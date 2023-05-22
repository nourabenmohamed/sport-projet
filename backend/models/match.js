//import mongoose module
const mongoose = require("mongoose");


const matchSchema = mongoose.Schema({
    scoreOne: Number,
    scoreTwo: Number,
    teamOne: String,
    teamOne: String,

});
//Model Name:(collection 'matches' will be created /generated in DB)
const match = mongoose.model("Match", matchSchema);
//make file exportable
module.exports = match;