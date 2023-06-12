import { Router } from "express";
import {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} from "../Handlers/todos.js";

const router = Router();

router
  .post("/", createTodo)
  .get("/", getTodos)
  .put("/", updateTodo)
  .delete("/", deleteTodo);

export { router as todoRouter };
