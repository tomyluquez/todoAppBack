import Todo from "../Models/todo.js";

export const createTodo = async (req, res) => {
  try {
    const { description } = req.body;
    const todo = await Todo.create({ description });
    res.status(200).json({ message: "todo creado con exito", data: todo });
  } catch (error) {
    res.status(404).json({ error: error });
  }
};

export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json({ message: "todos obtenidos", data: todos });
  } catch (error) {
    res.status(404).json({ error: error });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const { id, isComplete, description } = req.body;
    if (!description) {
      const complete = await Todo.findByIdAndUpdate(id, { isComplete });
      res.status(200).json({ message: "complete" });
    } else {
      const update = await Todo.findByIdAndUpdate(id, { description });
      res.status(200).json({ message: "todo actualizado con exito" });
    }
  } catch (error) {
    res.status(404).json({ error: error });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.body;
    const todoDelete = await Todo.findByIdAndDelete(id);
    res.status(200).json({ message: "todo eliminado exitosamente" });
  } catch (error) {
    res.status(404).json({ error: error });
  }
};
