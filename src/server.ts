import cors from 'cors';
import express from "express";
const app = express();
import { router} from "./router"
import "./database";


app.use(express.json());
app.use(cors())
app.use(router)


app.listen(3000, () =>console.log("Server is running on port 3000"));