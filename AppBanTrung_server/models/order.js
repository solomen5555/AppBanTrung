const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    DsSanPham:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'OrderItem',
        required:true
    }],
    DiaChiGiaoHang:{
        type:String,
        required:true
    },
    LoaiGiaoDich:{
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
        default:'Đang xử lý',
    },
    TongTien:{
        type:Number,
        default:0
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