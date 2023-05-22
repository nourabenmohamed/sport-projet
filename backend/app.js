// import express module
const express = require("express");
// import multer module
const multer = require("multer");
// import axios module
const axios = require("axios");
// import path module
const path = require("path");
// import bcrypt module
const bcrypt = require("bcrypt");
// import body-parser module
const bodyParser = require("body-parser");
//import mongoose module
const mongoose = require('mongoose');
//connect APP with DB:127=>adress de base =>test=
mongoose.connect('mongodb://127.0.0.1:27017/sportDB');

//create express application
const app = express();

// Configure Body-parser
// Send JSON responses   :pour rendre une réponse sous format JSON de BE=>FE
app.use(bodyParser.json());
// Get objects from Request :pour parses les data 
app.use(bodyParser.urlencoded({ extended: true }));
// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );

    next();

});

//Upload files config
app.use('/images', express.static(path.join('backend/images')));


const MIME_TYPE = {
    'image/png': 'png', //type de média
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
};

const storage = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = null;
        }
        cb(null, 'backend/images')
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
            extension;
        cb(null, imgName);
    }
});


//Models Importation
const Match = require("./models/match");
const User = require("./models/user");
const Player = require("./models/player");
const Team = require("./models/team");
const Reclamation = require("./models/reclamation");
const Comment = require("./models/comment");

//function to generate ID
function generateId(tab) {

    var max;
    if (tab.length == 0) {
        max = 0;
    }
    else {
        max = tab[0].id;
        for (var i = 1; i < tab.length; i++) {
            if (tab[i].id > max) {
                max = tab[i].id;
            }
        }
    }
    return max + 1;
}
function checkEmail(email, usersTab) {
    let exist = false;
    for (let i = 0; i < usersTab.length; i++) {
        if (usersTab[i].email == email) {
            exist = true;
            break;

        }

    }
    return exist;
}

//matches tab simulation
let matches = [
    { id: 1, scoreOne: 0, scoreTwo: 2, teamOne: "EST", teamTwo: "CSS" },
    { id: 2, scoreOne: 1, scoreTwo: 0, teamOne: "CA", teamTwo: "ULV" },
    { id: 3, scoreOne: 3, scoreTwo: 1, teamOne: "EST", teamTwo: "CSS" },
];

//users tab simulation
let users = [
    {
        id: 1,
        FirstName: "Mouna",
        LastName: "benSalah",
        email: "mouna@gmail.com",
        pwd: "aaa",
        Role: "user"
    },
    {
        id: 2,
        FirstName: "Molka",
        LastName: "benMed",
        email: "molka@gmail.com",
        pwd: "bbb",
        Role: "admin"
    },
    {
        id: 3,
        FirstName: "Salim",
        LastName: "youssfi",
        email: "salim@gmail.com",
        pwd: "ccc",
        Role: "user"
    },
];

//teams tab simulation
let teams = [
    { id: 1, name: "carthage", owner: "ali", staduim: "rades", fondation: 1964 },
    { id: 2, name: "marsa", owner: "samy", staduim: "menzeh", fondation: 1980 },
    { id: 3, name: "ghafsa", owner: "kamil", staduim: "bizerte", fondation: 1960 },
];

//players tab simulation
let players = [
    { id: 1, name: "Lionel Messi", nbre: 10, image: "assets/images/img_3.jpg" },
    { id: 2, name: "Benzima", nbre: 9, image: "assets/images/img_2.jpg" },
    { id: 3, name: "Neymar", nbre: 10, image: "assets/images/img_1.jpg" },
];


//business logic:get all Matches
app.get("/matches", (req, res) => {
    //traitement logique
    Match.find().then((docs) => {
        res.json({ matchArray: docs, message: "Done" })
    });

});
// business logic:get match by ID
app.get("/matches/:x", (req, res) => {
    this.console.log("here into BL:Get match by ID");
    //let id=activated Route.snapshot().paramMap().get("x")
    let id = req.params.x;
    Match.findOne({ _id: id }).then((doc) => {
        res.json({ match: doc });
    });
});
// business logic: add match
app.post('/matches', (req, res) => {
    console.log('here into BL:Add match');
    //get object from request
    const match = new Match(req.body);
    match.save();
    res.json({ message: "added whith success" });
});
//  business logic:Delete match by ID
app.delete("/matches/:y", (req, res) => {
    console.log("here ino BL:Delete match by id");
    let id = req.params.y;
    Match.deleteOne({ _id: id }).then((response) => {
        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });
        } else {
            res.json({ isDeleted: false });
        }
    });
});

// business logic: Edit match
app.put("/matches", (req, res) => {
    console.log("here into BL:edit match");
    let newMatch = req.body;
    Match.updateOne({ _id: newMatch._id }, newMatch).then((response) => {
        if (response.nModified == 1) {
            res.json({ isUpdated: true });
        } else {
            res.json({ isUpdated: false });
        }
    });
});

//business logic:search Matches by scores
app.post("/matches/search", (req, res) => {
    console.log("here into BL:search matches", req.body);
    let search = req.body;
    let findedMatches = matches.filter((obj) => {
        return obj.scoreOne == search.scoreOne || obj.scoreTwo == search.scoreTwo
    });
    res.json({ searchTab: findedMatches });
});
//business logic:signup
app.post("/users/signup",
    multer({ storage: storage }).single("img"),
    (req, res) => {
        console.log('here into BL:signup', req.body);
        bcrypt.hash(req.body.pwd, 8).then((cryptedPwd) => {
            console.log('Crypted pdw', cryptedPwd);
            let url =req.protocol+"://"+req.get("host");
            let imgPath=req.file
            ? url+"/images/"+req.file.filename
            :url+"/images/avatar.png";
            //if(req.file){
                //imgPath=req.file.filename;
                //else:
                //imgPath=null;
            
            let user = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                pwd: cryptedPwd,
                tel: req.body.tel,
                role: req.body.role,
                adress: req.body.adress,
                img: imgPath,
            });
            user.save((err, doc) => {
                console.log("here error", err);
                console.log("here doc", doc);
                if (err) {
                    res.json({ message: false });
                } else {
                    res.json({ message: true });
                }
            });
        });
    });

// 0 => please check email
// 1 => please check pwd
// 2 => welcome
//business logic:login
app.post("/users/login", (req, res) => {
    console.log("here into BL:login", req.body);
    let user = req.body;
    let userToSend;
    User.findOne({ email: user.email })
        .then((response) => {
            if (!response) {
                res.json({ message: "0" });
            }
            userToSend = response;
            return bcrypt.compare(user.pwd, response.pwd);
        })
        .then((pwdResponse) => {
            console.log("here pwdResponse", pwdResponse);
            if (!pwdResponse) {
                res.json({ message: "1" });
            } else {
                //object {fName,lName,id,role}
                let userObj = {
                    id: userToSend._id,
                    fName: userToSend.firstName,
                    lName: userToSend.lastName,
                    role: userToSend.role,
                };
                res.json({ message: "2", user: userObj });
            };
        });
});

//Business logic:Get all teams
app.get("/teams", (req, res) => {
    console.log("here all teams");
    Team.find().then((docs) => {
        res.json({ teamArray: teams, message: "Done" });
    });

});
//  business logic:get team by ID
app.get("/teams/:id", (req, res) => {
    console.log('here into BL:get team by ID');
    let id = req.params.x;
    Team.findOne({ _id: id }).then((doc) => {
        res.json({ team: doc });
    });
});
//  business logic: delete team
app.delete("/teams/:x", (req, res) => {
    console.log('here deleted team');
    let id = req.params.y;
    Team.deleteOne({ _id: id }).then((response) => {
        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });
        } else {
            res.json({ isDeleted: false });
        }
    });
});
// business logic: add team
app.post("/teams", (req, res) => {
    console.log('here into BL:add team');
    let team = new team(req.body);
    team.save();
    res.json({ message: "added whith success" });
});
//  business logic: edit team
app.put("/teams", (req, res) => {
    console.log("here into BL:edit team");
    let newTeam = req.body;
    Team.updateOne({ _id: newTeam._id }, newTeam).then((response) => {
        if (response.nModified == 1) {
            res.json({ isUpdated: true });
        } else {
            res.json({ isUpdated: false });
        }
    });
});
//business logic:get all Players
app.get('/players', (req, res) => {
    console.log('here all players ');
    Player.find().then((docs) => {
        res.json({ playerArray: players, message: "Done" });
    });
});
// business logic: get player by ID 
app.get("/players/:b", (req, res) => {
    console.log("here player by id");
    let id = req.params.x;
    Player.findOne({ _id: id }).then((doc) => {
        res.json({ player: doc });
    });
});
// business logic:add player
app.post('/players', (req, res) => {
    console.log('here adding player');
    let player = new player(req.body);
    player.save();
    res.json({ message: "added whith success" });
});
//delete player by id
app.delete("/players/:id", (req, res) => {
    console.log('here deleted player');
    let id = req.params.y;
    Player.deleteOne({ _id: id }).then((response) => {
        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });
        } else {
            res.json({ isDeleted: false });
        }
    });
});

//basic logic: edit player
app.put("/players", (req, res) => {
    console.log('here editing player');
    let newPlayer = req.body;
    Player.updateOne({ _id: newPlayer._id }, newPlayer).then((response) => {
        if (response.nModified == 1) {
            res.json({ isUpdated: true });
        } else {
            res.json({ isUpdated: false });
        }
    });
});

//business logic:Get User By ID
app.get("/users/:id",(req,res)=>{
    console.log("here into BL:get user by Id",req.params.id);
    User.findOne({_id:req.params.id}).then((doc)=>{
        console.log("here doc",doc);
        res.json({user:doc});
    });
});
//business logic:Search Weather
app.post("/weather",(req,res)=>{
    console.log('here object',req.body);
// key from OpenWeatherMapAPI(after login)
   const key="c874e8ce614f3900626a7dfe8a079c74";
// City from FE(form)
   const city=req.body.city; 
   const apiURL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
   axios.get(apiURL).then((response)=>{
    console.log("response from API",response.data.weather);
    let weatherRes={
        temperature:response.data.main.temp,
        humidity:response.data.main.humidity,
        pressure:response.data.main.pressure,
        img: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png` 
    };
    res.json({weather:weatherRes});
   });
   
});


//business logic:Add Reclamation
app.post("/reclamations",(req,res)=>{
    let reclamation=new Reclamation(req.body);
    reclamation.save((err,doc)=>{
        if (err) {
            res.json({isAdded:"false"});
               }else{
            res.json({isAdded:"true"});
        }
    });
});


//business Logic:Get all user Reclamations:
   
  app.get("/reclamations/:id",(req,res)=>{
    Reclamation.find({userId:req.params.id}).then((docs)=>{
        res.json({reclamations:docs});
    });
  });



//business logic:Add comment
app.post("/matches/comment",(req,res)=>{
    console.log("here comment",req.body);
})




//business logic:

//business logic:Get ALL Matches With Comments
app.get("/matches/comments/getAll",(req,res)=>{
    console.log("Here to get All matches with comments");
    Match.aggregate(
        [
        {
        $lookup: {
        from: "comments", // collection to join
        localField: "_id", //field from the input documents
        foreignField: "matchId", //field from the documents of the "from" collection
        as: "comments", // output array field
        },
        },
        ],
    );
})


//make app importable 
module.exports = app;