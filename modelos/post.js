const mongoose = require ('mongose');
const PostSchema = mongoose.Schema({
    title:{
        type :stringify,
        require :true
    },
    description:{
        type: string,
        require : true
    },
    Date :{
        type: Date,
        default:Date.now
    }
});

module.exports=mongoose.module('post',PostSchema);