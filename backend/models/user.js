//import mongoose module
const mongoose = require("mongoose");
//import npm i mongoose-validators-unique model
const uniqueValidator = require('mongoose-validators-unique');

const userSchema = mongoose.Schema({
    firstName:String,
    lastName:String,
    email:{type:String,unique:true},
    pwd:String,
    role:String,
    tel:Number,
    adress:String,
    img: String,

});
//Model Name:(collection 'users' will be created /generated in DB)
const user = mongoose.model("User", userSchema);
//make file exportable
module.exports = user;