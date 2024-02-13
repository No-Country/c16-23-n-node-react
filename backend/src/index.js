import express from 'express';
import "dotenv/config";
import "./database/db_connect.js"
import cors from "cors";
import morgan from "morgan";
import routes from "./routes/index.js";
import fileUpload from 'express-fileupload';

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './uploads/'
  }));

app.use('/api', routes)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Puerto corriendo en : ${port}`));