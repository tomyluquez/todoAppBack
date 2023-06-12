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
app.use("*", (req, res) => {
  res.send("Hello World");
});

// levantamos el server
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
