const User = require("../models/User");

const userController = {};


userController.getAll = async (req, res) => {
    try {
        const users = await User.find();

        return res.status(200).json(
            {
                success: true,
                message: 'Get all users retrieved succsessfully',
                data: users
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: 'Error retrieving users',
                error: error.message
            }
        )
    }
};


userController.getUserById = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findById(id).select(['-password','-__v']);

        if(!user) {
            return res.status(404).json(
                {
                    success: true,
                    message: "User not found",
                    data: []
                }
            ); 
        }
        if(req.user_role=='admin'){
            return res.status(200).json(
                {
                    success: true,
                    message: "User found",
                    data: user
                }
            );
        }
        if(req.user_id!==id){
            return res.status(404).json(
                {
                    success: true,
                    message: "User not found"
                }
            );
        }
        return res.status(200).json(
            {
                success: true,
                message: "User found",
                data: user
            }
        );
    } catch (error) {
        if(error?.message.includes('Cast to ObjectId failed')) {
            return res.status(404).json(
                {
                    success: true,
                    message: "User not found"
                }
            );
        };

        return res.status(500).json(
            {
                success: false,
                message: "Error finding user",
                error: error?.message || error
            }
        );
    }
};


userController.update = async (req, res) => {
    try {
        const filter = {_id: req.params.id};
        const user = await User.findByIdAndUpdate(req.params.id)
        const update = {
            name: req.body.name
        };
        await User.findOneAndUpdate(filter, update);
        const userUpdated = await User.findOne(filter).select(['-password','-__v']);
       
        if(!user) {
            return res.status(404).json(
                {
                    success: true,
                    message: "User not found",
                    data: []
                }
            ); 
        }
        if(req.user_role=='admin'){
            return res.status(200).json(
                {
                    success: true,
                    message: "User Update",
                    data: userUpdated
                }
            );
        }
        if(req.user_id!==filter._id){
            return res.status(404).json(
                {
                    success: true,
                    message: "User not found"
                }
            );
        }
        return res.status(200).json(
            {
                success: true,
                message: "User Update",
                data: userUpdated
            }
        );
    } catch (error) {
        if(error?.message.includes('Cast to ObjectId failed')) {
            return res.status(404).json(
                {
                    success: true,
                    message: "User not found"
                }
            )
        };

        return res.status(500).json(
            {
                success: false,
                message: "Error finding user",
                error: error?.message || error
            }
        );   
    }
};

userController.delete = async (req, res) => {
    try {
        const {id} = req.params;
        const userDeleted = await User.findByIdAndDelete(id).select(['-password','-__v']);
        

        return res.status(200).json({
            success: true,
            message: "Delete user sucessfully",
            data: userDeleted
        })

    
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: 'Error Deleted User',
                data: error?.message ||error
            }
        )
    }
};
module.exports = userController;