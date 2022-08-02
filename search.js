//src>controller>search.js
//Kaynakça: https://www.youtube.com/watch?v=bIWZ8EnLk54
// Kaynak kod: https://github.com/anil-sidhu/node-js/blob/search-api/index.js
const express = require("express");
const {User,Role} = require("../models/user");
const app = express();
app.use(express.json());

            //Genel isim araması

app.get("/getAll/:userName",async (req,res)=>{

    let user = await User.findAll(
        {
            "$or":[
                {name:{$regex:req.params.userName}},
                {brand:{$regex:req.params.userName}}
            ]
        }
    )
    
    if(!user){
        return res.status(404).json({message: 'User not found'})
     }

     res.send(user);


})

        // rolü belirli olan isime göre arama

app.get("/getByRole/:roleName/:userName",async (req,res)=>{

    let user = await Role.find({ where:{role_name: req.params.roleName , userName: req.params.userName },  include: User },
        {
            "$or":[
                {name:{$regex:req.params.userName}},
                {brand:{$regex:req.params.userName}}
            ]
        }
    )
    if(!user){
        return res.status(404).json({message: 'User not found'})
     }
     
     res.send(user);

})













