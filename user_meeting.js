//kaynakça: https://www.youtube.com/watch?v=weA9FTMzK-E
// bütün formatlar https://gist.github.com/prof3ssorSt3v3/ae2009806bb59f9a3279d0ac48d655ec
// npm install moment --save
const express = require("express");
const {Time} = require("../models/time")

const {User,Role,USER_HAS_ROLE} = require("../models/time"); // burası mentee tablosu olacak
const router = express.Router();


let d4 = new Date(yil, ay, gun, saat, dakika);
//let d4 = new Date(2017, 0, 1, 12, 30);
//                 yıl,ay(0-11),gün,saat,dakika, 
   const time = console.log(d4.toLocaleString('tr-TR') );

router.post("/meet", async (req,res) => {   
    
    const { Mentee, Time, Message} = req.body; //tablodan çekilecek veriler
    const alreadyExistUser = await Mentee.findOne({ where: { mentee_id } }).catch((err) => {
        console.log(err)
});
if(alreadyExistUser){
    return res.status(404).json({ message: "Users have the same id! ",mentee_id})
};

})


module.exports = router;
    



    