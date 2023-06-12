import express from "express";
import dotenv from "dotenv";
import connectDB from "./Mongo/connectDB.js";
import { todoRouter } from "./Routes/todoRoutes.js";
import cors from "cors";

// iniciamos el servidor
const app = express();

// corremos las variables de entorno
dotenv.config();

//middlewares
app.use(express.json());
app.use(cors());

//conectar a la db
connectDB();

//creamos los endpoints
app.use("/api/todos", todoRouter);

// levantamos el server
app.listen(process.env.PORT, () => {
  console.log("listening on port " + process.env.PORT);
});
