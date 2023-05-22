//import mongoose module
const mongoose = require("mongoose");
const reclamationSchema = mongoose.Schema({
    subject:String,
    description:String,
    userId:String,

});
//Model Name:(collection 'reclamations' will be created /generated in DB)
const reclamation = mongoose.model("Reclamation", reclamationSchema);
//make file exportable
module.exports = reclamation;