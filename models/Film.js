const mongoose = require('mongoose');

const filmSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        enum: ['terror','comedia','suspense','accion','ciencia ficcion','musical','not specified'],
        default: 'not specified'
    },
    actors: {
        type: Array,
        required: true
    },
    description: {
        type: String,
    },
    daterelaase: {
        type: Date,
    },
      poster:{
        type: String,
        
    }

})

const Film = mongoose.model('Film', filmSchema);

module.exports = Film;