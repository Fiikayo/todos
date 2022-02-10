import mongoose from 'mongoose';

const todoSchema = mongoose.Schema(
    {
        text:{
            type:String,
            required:[true,'Please add a description']
        },
        completed:{
            type:Boolean,
            default:false
        },
    },
    {
        timestamps:true
    }
);

export default mongoose.model('Todo',todoSchema);