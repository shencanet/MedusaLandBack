const mongoose = require('mongoose');

const medusaSchema = new mongoose.Schema({
    medusaId: {
        type: String,
        required: true
    },

   description: {
        type: String,
    },
    dateOrder: {
        type: Date,
    },
      poster:{
        type: String,
        
    },
    price: {
        type: Number,
        required: true,
        default: 0,
    },

})

const Medusa = mongoose.model('Medusa', medusaSchema);

module.exports = Medusa;