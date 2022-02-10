import asyncHandler from 'express-async-handler';

import Todo from '../model/todoModel.js';

// @desc Get Todos
// @route GET /api/todos
// @access Private
const getTodos = asyncHandler(async (req,res)=>{
    const todos = await Todo.find();
    res.status(200).json(todos);
})

// @desc Set Todos
// @route POST /api/todos
// @access Private
const setTodo = asyncHandler(async (req,res)=>{
    if(Object.keys(req.body).length === 0){
        res.status(400);
        throw new Error('Please add a todo');
    }
    /*const {text} = req.body;
    console.log(text);*/
    const todo = await Todo.create({
        text: req.body.text
    })
    res.status(200).json(todo);
})

// @desc Update Todos
// @route PUT /api/todos
// @access Private
const updateTodo = asyncHandler(async (req,res)=>{
    res.status(200).json({message:'update a todo here'});
})


// @desc Delete Todos
// @route DELETE /api/todos
// @access Private
const deleteTodo = asyncHandler(async (req,res)=>{
    res.status(200).json({message:'delete a todo here'});
})


export{
    getTodos,
    setTodo,
    updateTodo,
    deleteTodo
}