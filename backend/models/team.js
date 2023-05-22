//import mongoose module
const mongoose = require("mongoose");
const teamSchema = mongoose.Schema({
    name:String,
    owner:String,
    staduim:Number,
    fondation:Number,
});
//Model Name:(collection 'teams' will be created /generated in DB)
const team = mongoose.model("Team", teamSchema);
//make file exportable
module.exports = team;