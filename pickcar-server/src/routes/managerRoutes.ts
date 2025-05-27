import  express  from "express";  
import { createManager, getManager,getManagerCars,updateManager } from "../controllers/managerControllers";


const router = express.Router();

router.get("/:cognitoId",getManager)
router.put("/:cognitoId",updateManager)
router.get("/:cognitoId/cars",getManagerCars)
router.post("/",createManager)


export default router;