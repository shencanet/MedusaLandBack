const mongoose = require('mongoose');

const db =  () => mongoose.connect(process.env.MONGO_URI)
    .then(()=> console.log('Connexion established'))
    .catch((error)=> console.log('Error connetcing to MongoDB', error));

module.exports = db;