//import mongoose module
const mongoose = require("mongoose");
const stadiumSchema = mongoose.Schema({
    name:String,
    capacity:Number,
    city:String,
});
//Model Name:(collection 'stadiums' will be created /generated in DB)
const stadium = mongoose.model("Stadium", stadiumSchema);
//make file exportable
module.exports = stadium;