const express = require('express');
const router = express.Router();
const {Product} = require('../models/product');

router.get(`/`, (req,res)=>{
     Product.find().populate('Loai').then(productList=>{
        if(!productList){
       return  res.status(500).json({
                success:false,
                message:'không lấy được danh sách sản phẩm'
            })
        }
       return res.status(200).json({
           success:true,
           message:'lấy danh sách sản phẩm thành công',
           response:productList
       });
     }).catch(err=>{
         return res.status(400).json({
             success:false,
             message:'',
             error:err
         })
     })
    
})

router.get('/:id',(req,res)=>{
    Product.findById(req.params.id).populate('Loai').then(product=>{
        if(!product){
            return res.status(404).json({
                success:false,
                message:'không tìm thấy sản phẩm'
            })
        }
        return res.status(200).json({
            success:true,
            message:'tìm thấy sản phẩm',
            response:product
        })
    }).catch(err=>{
        return res.status(400).json({
            success:false,
            message:' ',
            error:err
        })
    })
})

router.get('/get/count',(req,res)=>{
    Product.countDocuments().then(productCount=>{
        if(!productCount){
            return res.status(500).json({
                success:false,
                message: ""
            })
            
        }
        return res.status(200).json({
            success:true,
            message:'lấy số lượng thành công',
            response:productCount
        })
    }).catch(err=>{
        return res.status(400).json({
            success:false,
            message:'',
            error:err
        })
    })
})

router.get(`/get/AnTuong`,(req,res)=>{
    Product.find({AnTuong:true }).then(productList=>{
        if(!productList){
            return res.status(500).json({
                success:false,
                message: ""
            })
            
        }
        return res.status(200).json({
            success:true,
            message:'lấy danh sách ấn tượng thành công',
            response:productCount
        })
    }).catch(err=>{
        return res.status(400).json({
            success:false,
            message:'',
            error:err
        })
    })
})

router.post(`/`,  (req,res)=>{
 
    const product = new Product({
        Ten :req.body.Ten,
        MoTa: req.body.MoTa,
        MoTaChiTiet: req.body.MoTaChiTiet,
        Image: req.body.Image,
        Images: req.body.Images,
        ThuongHieu: req.body.ThuongHieu,
        Gia:req.body.Gia,
        Loai:req.body.Loai,
        TonKho:req.body.TonKho,
        XepHang:req.body.XepHang,
        LuotDanhGia: req.body.LuotDanhGia,
        AnTuong: req.body.AnTuong,
    })
    product.save().then((createdProduct=>{
        res.status(201).json({
            success:true,
            message:'thêm mới 1 sản phẩm',
            response:createdProduct
        })    
    })).catch((err)=>{
        res.status(500).json({
            error : err,
            success: false
        })
    })
})

router.put('/:id', (req,res)=>{
    Product.findByIdAndUpdate(req.params.id,{
        Ten :req.body.Ten,
        MoTa: req.body.MoTa,
        MoTaChiTiet: req.body.MoTaChiTiet,
        Image: req.body.Image,
        Images: req.body.Images,
        ThuongHieu: req.body.ThuongHieu,
        Gia:req.body.Gia,
        Loai:req.body.Loai,
        TonKho:req.body.TonKho,
        XepHang:req.body.XepHang,
        LuotDanhGia: req.body.LuotDanhGia,
        AnTuong: req.body.AnTuong,
        
    },{
        new:true
    }).then(product =>{
        if(!product){
            return res.status(404).json({
                success:false,
                message:'sản phẩm chưa tồn tại'
            })
        }
    
        res.status(201).json({
            success:true,
            message:'sửa thành công',
            response:product
        })
    }).catch(err=>{
        return res.status(400).json({
            success:false,
            message:'',
            error:err
        })
    })
})

router.delete('/:id',(req,res)=>{
    Product.findByIdAndDelete(req.params.id).then(product=>{
        if(!product){
            return res.status(404).json({
                success:false,
                message:'sản phẩm không tồn tại'
            })

        }
        return res.status(200).json({
            success:true,
            message:'xóa thành công'
        })
    }).catch(err=>{
        return res.status(400).json({
            success:false,
            message: " ",
            error:err 
        })
    })
})

module.exports = router;