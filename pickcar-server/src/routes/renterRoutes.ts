import  express  from "express";  
import { createRenter, getRenter,updateRenter } from "../controllers/renterControllers";


const router = express.Router();

router.get("/:cognitoId",getRenter)
router.post("/",createRenter)
router.put("/:cognitoId",updateRenter)


export default router;