const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    address:{
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    medusaId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Medusa',
        required: true
    },
    totalPrice: {
        type: Number,
        required: true,
        default: 0,
    },
    
},
{
    timestamps: true
})

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;