const Model = require('../models/model')

const controller={

index: async (req,res)=>{
    try{
    const cards = await Model.find();
    res.render('index', {
    cards: cards
})
}catch(err){
    console.log(err)
    res.send(err)
   }
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
show: async(req, res)=>{
    const card = await Model.findById(req.params.id);
        res.render('show', {
            card: card,
    })
},

delete: async(req, res)=>{
    try{
        const deleteAcct = await Model.findByIdAndDelete(req.params.id)
        res.redirect('/accts')
    }catch(err){
        res.send(err)
    }
},
edit: async(req, res)=>{
    try{
        const card = await Model.findById(req.params.id)
        res.render('edit',{
            card: card
        })
    }catch(err){
        res.send(err)
    }

},
update: async (req, res)=>{
    try{
        await Model.findByIdAndUpdate(req.params.id, req.body)
        res.redirect(`/accts/${req.params.id}`)
    }catch(err){
        res.send(err)
    }
},
}

module.exports = controller