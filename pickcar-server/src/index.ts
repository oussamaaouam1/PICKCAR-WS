import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import { authMiddleware } from './middleware/authMiddleware';

/*ROUTES IMPORT*/
import renterRoutes from './routes/renterRoutes';
import managerRoutes from './routes/managerRoutes';

/*CONFIGURATION*/
dotenv.config();
const app = express();
app.use (express.json ());
app.use(helmet ());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan ('common'));
app.use(bodyParser.json ());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors ());


/*ROUTES*/
app.get('/',  (req, res) => {
    res.send('home route test');
});

app.use("/renters",authMiddleware(["renter"]), renterRoutes)
app.use("/managers",authMiddleware(["manager"]), managerRoutes)

/*SERVER*/
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
