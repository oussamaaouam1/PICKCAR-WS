import  express  from "express";  
import { authMiddleware } from "../middleware/authMiddleware";
import { getReservationPayments, getReservations } from "../controllers/reservationControllers";


const router = express.Router();

router.get("/",authMiddleware(["manager","renter"]),getReservations)
router.get("/:id/payments",authMiddleware(["manager","renter"]),getReservationPayments)



export default router;