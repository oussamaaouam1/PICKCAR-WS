import  express  from "express";  
import { authMiddleware } from "../middleware/authMiddleware";
import { createApplication, listApplications, updateApplicationStatus } from "../controllers/applicationControllers";


const router = express.Router();

router.post("/",authMiddleware(["renter"]),createApplication);// create application by renter
// Note: The createApplication function should handle the logic of checking if the renter has an active reservation for the car
router.put("/:id/status",authMiddleware(["manager"]),updateApplicationStatus);// update application status by manager
router.get("/",authMiddleware(["manager","renter"]),listApplications);// list all applications for managers and renters



export default router;