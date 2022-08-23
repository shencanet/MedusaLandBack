const mongoose = require("mongoose");

const medusaSchema = new mongoose.Schema({
  medusaId: {
    type: String,
    required: true,
  },

  description: {
    type: String,
  },
  poster: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  stock: {
    type: Number,
    default: 0,
    required: true,
},
});

const Medusa = mongoose.model("Medusa", medusaSchema);

module.exports = Medusa;
