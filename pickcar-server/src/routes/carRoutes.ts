import express from "express";
import { getCar, getCars, createCar,deleteCar } from "../controllers/carControllers";
import { authMiddleware } from "../middleware/authMiddleware";
import multer from "multer";
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = express.Router();

router.get("/", getCars);
router.get("/:id", getCar);
router.post(
  "/",
  authMiddleware(["manager"]),
  upload.array("images"),
  createCar
);
router.delete("/:id", authMiddleware(["manager"]), deleteCar);

export default router;
