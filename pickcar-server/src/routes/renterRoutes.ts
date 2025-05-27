import  express  from "express";  
import { addFavoriteCar, createRenter, getRenter,getRenterCars,removeFavoriteCar,updateRenter } from "../controllers/renterControllers";


const router = express.Router();

router.get("/:cognitoId",getRenter)
router.put("/:cognitoId",updateRenter)
router.post("/",createRenter)
router.get("/:cognitoId/current-cars",getRenterCars)
router.post("/:cognitoId/favorites/:carId",addFavoriteCar)
router.delete("/:cognitoId/favorites/:carId",removeFavoriteCar )


export default router;