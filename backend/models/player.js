//import mongoose module
const mongoose = require("mongoose");
const playerSchema = mongoose.Schema({
    name:String,
    position:String,
    nbre:Number,
    age:Number,
});
//Model Name:(collection 'players' will be created /generated in DB)
const player = mongoose.model("Player", playerSchema);
//make file exportable
module.exports = player;