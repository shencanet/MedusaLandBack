const Order = require("../models/Order");

const orderController = {};

orderController.getAll = async (req, res) => {
    try {
        const orders = await Order.find();

        return res.status(200).json({
                success: true,
                message: 'Get all orders retrieved succcesfully',
                data: orders
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error retrieving orders',
            error: error.message
        })
    }
}


orderController.createOrder = async (req, res) => {
    try {
        const userId = req.user_id;
        const {orderDate, returnDate, filmId } =req.body;
        const newOrder ={
            orderDate,
            returnDate,
            userId,
            filmId
        }
        if(!orderDate || !returnDate || !userId || !filmId){
            return res.status(400).json({
                success: false,
                message: 'orderDate, userId and filmId are required'
            })
        }
        const orders = await Order.find();
        const alreadyOrdered = orders.filter(order=>order.returned===false);
        if(alreadyOrdered.length>0){
             return res.status(400).json(
                {
                    success: true,
                    message: "User already ordered a film",
                    data: alreadyOrdered
                }
            ); 
        }
        const order = await Order.create(newOrder);
        return res.status(200).json({
            success: true,
            message: 'Order created succesfully',
            data: order
    });
    }catch(error){
        return res.status(500).json({
            success: false,
            message: 'Error creating orders',
            error: error.message
        })
    }
};



module.exports = orderController;