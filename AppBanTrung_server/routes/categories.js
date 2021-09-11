const express = require('express');
const router = express.Router();
const {Category} = require('../models/category');

router.get(`/`,async (req,res)=>{
    const categoryList = await Category.find();
    if(!categoryList){
        res.status(500).json({
            success:false
        })
    }
    res.send(categoryList);
})

router.post(`/`,async (req,res)=>{
    const category = new Category({
        Ten: req.body.Ten,
        Icon: req.body.Icon,
        Color:req.body.Color
    })

    category = await category.save();
    if(!category){
        return res.status(404).send('Thêm thất bại!');
    }

    res.send(category);
   
    
})


module.exports = router;