import  express  from "express";  
import { createRenter, getRenter,updateRenter } from "../controllers/renterController";


const router = express.Router();

router.get("/:cognitoId",getRenter)
router.post("/",createRenter)
router.put("/:cognitoId",updateRenter)


export default router;