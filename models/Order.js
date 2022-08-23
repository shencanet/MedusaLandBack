const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderDate:{
        type: Date,
        required: true
    },
    returnDate:{
        type: Date,
        required:true
    },
    returned:{
        type: Boolean,
        default: false
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    filmId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Film',
        required: true
    }
})

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;