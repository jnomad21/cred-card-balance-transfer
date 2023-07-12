const Model = require('../models/model')

const controller={

index: (req,res)=>{
    res.render('home')
},

new: (req, res)=>{
    res.render('new')
},
create: async(req, res)=>{
   try{
    const newAcct = await Model.create(req.body);
    res.redirect(`/${newAcct._id}`)
   }catch(err){
    console.log(err)
    res.send(err)
   }
},
}

module.exports = controller