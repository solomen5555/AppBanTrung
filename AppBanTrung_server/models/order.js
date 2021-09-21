const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    DsSanPham:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'OrderItem',
        required:true
    }],
    DiaChiGiaoHang1:{
        type:String,
        required:true
    },
    DiaChiGiaoHang2:{
        type:String,
    },
    TinhTP:{
        type:String,
        required:true,
    },
    MaBuuDien:{
        type:String,
        required:true
    },
    DatNuoc:{
        type:String,
        required:true
    },
    SoDienThoai:{
        type:String,
        required:true
    },
    TrangThai:{
        type:String,
        required:true,
        default:'ChuaGiaiQuyet',
    },
    TongTien:{
        type:Number
    },
    TaiKhoan:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    NgayMua:{
        type:Date,
        default:Date.now,
    }
})



exports.Order = mongoose.model('Order',orderSchema);