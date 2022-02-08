import asyncHandler from 'express-async-handler';
// @desc Get Todos
// @route GET /api/todos
// @access Private
const getTodos = asyncHandler(async (req,res)=>{
    res.status(200).json({message:'here are some todos'});
})

// @desc Set Todos
// @route POT /api/todos
// @access Private
const setTodo = asyncHandler(async (req,res)=>{
    if(Object.keys(req.body).length === 0){
        res.status(400);
        throw new Error('Please add a todo');
    }
    const todo = req.body;
    console.log(todo);
    res.status(200).json({message:'post a todo here'});
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