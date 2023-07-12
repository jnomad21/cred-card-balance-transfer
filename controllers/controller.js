const model = require('../models/model')

const controller={

index: (req,res)=>{
    res.render('home')
},

new: (req, res)=>{
    res.render('new')
}
}

module.exports = controller