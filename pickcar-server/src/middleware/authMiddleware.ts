import jwt,{JwtPayload} from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';


interface DecodedToken extends JwtPayload {
  sub: string;
  "custom:role"?: string;
}
declare global {
  namespace Express {
    interface Request {
      user?:{
        id:string;
        role: string;
      }
    }
  }
}

export const authMiddleware = (allowedRoles : string[]) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      res.status(401).json({ message: "Unauthorized" });
      return
    }

    try {
      const decoded = jwt.decode(token) as DecodedToken;
      const userRole = decoded["custom:role"] || "";
      req.user = {
        id: decoded.sub,
        role: userRole, 
      }
      // Check if the user's role is in the allowed roles
      const hasAccess = allowedRoles.includes(userRole.toLowerCase());
      if (!hasAccess) {
        res.status(403).json({ message: "Access Denied !!" });
        return
      }
      
    } catch (error) {
      res.status(401).json({ message: "Unauthorized(invalid token)" });
      console.error("Error decoding token:", error);
      return
    }
    next();
  };
}