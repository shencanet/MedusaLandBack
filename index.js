const express = require('express');
require('dotenv').config();
const db = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const filmRoutes = require('./routes/filmRoutes');
const authRoutes = require('./routes/authRoutes');
const orderRoutes = require('./routes/orderRoutes');
const medusaRoutes = require('./routes/MedusaRoutes');
const app = express();

//middleware
app.use(express.json())

//cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Port
const PORT = process.env.PORT || 4000;

//routes

app.use('/api', userRoutes);
app.use('/api', filmRoutes);
app.use('/api', authRoutes);
app.use('/api', orderRoutes);
app.use('/api', medusaRoutes);

app.get('/', (req, res)=> {
    return res.send('Bienvenidos a nuestro videoclub');
});

app.get('*',(req,res)=>{
    return res.status(404).send('404 route not found')
})

//connect database

db().then(()=>{
app.listen(PORT, ()=> console.log('Server is running in ' + PORT));
}).catch((error)=>{
    console.log('Error connecting to mongoDB ', error);
})
