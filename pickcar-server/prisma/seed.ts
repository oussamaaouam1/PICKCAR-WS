import { PrismaClient, Prisma } from "@prisma/client";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();

/**
 * Utility function to pause execution for a specified time
 * @param ms - Time to sleep in milliseconds
 */
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Converts a string to PascalCase (first letter uppercase)
 * @param str - String to convert
 * @returns PascalCase string
 */
function toPascalCase(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Converts a string to camelCase (first letter lowercase)
 * @param str - String to convert
 * @returns camelCase string
 */
function toCamelCase(str: string): string {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

/**
 * Inserts location data with PostGIS support
 * Handles geographic coordinates using ST_GeomFromText
 * @param locations - Array of location objects
 */
async function insertLocationData(locations: any[]) {
  for (const location of locations) {
    const { id, country, city, state, address, postalCode, coordinates } = location;
    try {
      // Parse coordinates from "POINT(lng lat)" format
      const [lng, lat] = coordinates
        .replace('POINT(', '')
        .replace(')', '')
        .split(' ')
        .map(Number);

      await prisma.$executeRaw`
        INSERT INTO "Location" ("id", "country", "city", "state", "address", "postalCode", "coordinates") 
        VALUES (${id}, ${country}, ${city}, ${state}, ${address}, ${postalCode}, ST_SetSRID(ST_MakePoint(${lng}, ${lat}), 4326))
      `;
      console.log(`Inserted location for ${city}`);
    } catch (error) {
      console.error(`Error inserting location for ${city}:`, error);
    }
  }
}

/**
 * Resets the auto-increment sequence for a model's ID
 * Ensures new records start from the correct ID
 * @param modelName - Name of the model to reset sequence for
 */
async function resetSequence(modelName: string) {
  try {
    const tableName = toPascalCase(modelName);
    const query = `SELECT setval('"${tableName}_id_seq"', (SELECT COALESCE(MAX(id) + 1, 1) FROM "${tableName}"), false)`;
    await prisma.$executeRawUnsafe(query);
    console.log(`Reset sequence for ${modelName}`);
  } catch (error) {
    console.error(`Error resetting sequence for ${modelName}:`, error);
  }
}

/**
 * Deletes all data from the database in reverse dependency order
 * @param orderedFileNames - Array of JSON file names in dependency order
 */
async function deleteAllData(orderedFileNames: string[]) {
  // Convert file names to model names
  const modelNames = orderedFileNames.map((fileName) => {
    return toPascalCase(path.basename(fileName, path.extname(fileName)));
  });

  // Delete in reverse order to handle dependencies
  for (const modelName of modelNames.reverse()) {
    const modelNameCamel = toCamelCase(modelName);
    const model = (prisma as any)[modelNameCamel];
    if (!model) {
      console.error(`Model ${modelName} not found in Prisma client`);
      continue;
    }
    try {
      await model.deleteMany({});
      console.log(`Cleared data from ${modelName}`);
    } catch (error) {
      console.error(`Error clearing data from ${modelName}:`, error);
    }
  }
}

/**
 * Main seeding function
 * 1. Deletes existing data
 * 2. Seeds new data in dependency order
 * 3. Resets sequences
 */
async function main() {
  // Path to seed data directory
  const dataDirectory = path.join(__dirname, "seedData");

  // Define file order based on dependencies
  const orderedFileNames = [
    "location.json",    // No dependencies
    "manager.json",     // No dependencies
    "car.json",         // Depends on location and manager
    "renter.json",      // No dependencies
    "reservation.json", // Depends on car and renter
    "application.json", // Depends on car and renter
    "payment.json",     // Depends on reservation
  ];

  // Clear existing data
  await deleteAllData(orderedFileNames);

  // Seed new data
  for (const fileName of orderedFileNames) {
    const filePath = path.join(dataDirectory, fileName);
    const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    const modelName = toPascalCase(path.basename(fileName, path.extname(fileName)));
    const modelNameCamel = toCamelCase(modelName);

    // Special handling for Location model due to PostGIS
    if (modelName === "Location") {
      await insertLocationData(jsonData);
    } else {
      const model = (prisma as any)[modelNameCamel];
      try {
        // Create records for each item in the JSON file
        for (const item of jsonData) {
          await model.create({
            data: item,
          });
        }
        console.log(`Seeded ${modelName} with data from ${fileName}`);
      } catch (error) {
        console.error(`Error seeding data for ${modelName}:`, error);
      }
    }

    // Reset sequence after seeding
    await resetSequence(modelName);

    // Add delay between operations
    await sleep(1000);
  }
}

// Execute main function and handle cleanup
main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
