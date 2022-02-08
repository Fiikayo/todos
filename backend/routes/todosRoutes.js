import express from "express";
import {getTodos,deleteTodo,setTodo,updateTodo} from '../controllers/todos.js'
const router = express.Router();

router.get('/', getTodos);
router.post('/', setTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router;