import  express  from "express";  
import { getCar,getCars,createCar } from "../controllers/carControllers";
import { authMiddleware } from "../middleware/authMiddleware";
import multer from "multer";
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


const router = express.Router();

router.get("/",getCars)
router.get("/:id",getCar)
router.post("/",
  authMiddleware(["manager"]),
  upload.array("photos"),
  createCar)


export default router;