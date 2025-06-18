import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function insertLocationData(locations: any[]) {
  for (const location of locations) {
    const { id, country, city, state, address, postalCode, coordinates } = location;
    try {
      // Check if location already exists
      const existingLocation = await prisma.location.findUnique({
        where: { id }
      });

      if (!existingLocation) {
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
      } else {
        console.log(`Location ${city} already exists, skipping...`);
      }
    } catch (error) {
      console.error(`Error inserting location for ${city}:`, error);
    }
  }
}

async function main() {
  const dataDirectory = path.join(__dirname, "seedData");

  // Only process location and car data
  const fileNames = ["location.json", "car.json"];

  for (const fileName of fileNames) {
    const filePath = path.join(dataDirectory, fileName);
    const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    const modelName = fileName.replace('.json', '');

    if (modelName === "location") {
      await insertLocationData(jsonData);
    } else if (modelName === "car") {
      for (const car of jsonData) {
        try {
          // Check if car already exists
          const existingCar = await prisma.car.findUnique({
            where: { id: car.id }
          });

          if (!existingCar) {
            await prisma.car.create({
              data: car
            });
            console.log(`Inserted car ${car.name}`);
          } else {
            console.log(`Car ${car.name} already exists, skipping...`);
          }
        } catch (error) {
          console.error(`Error inserting car ${car.name}:`, error);
        }
      }
    }

    await sleep(1000);
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
