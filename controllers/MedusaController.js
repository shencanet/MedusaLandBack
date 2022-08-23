const Medusa = require('../models/Medusa');

const medusaController = {};

medusaController.getAll = async (req,res)=>{
    try{
        const medusa = await Medusa.find();
        
        return res.status(200).json(
            {
                success: true,
                message: 'Get all Medusa retrieved succcesfully',
                data: Medusa
            }
        );
    }catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error retrieving Medusa',
            error: error.message
        })
    }
}

medusaController.addmedusa = async (req,res)=> {
    try{
        const {medusaId,price,stock} = req.body;
        if(!medusaId|| !price || !stock){
            return res.status(400).json({
                success: false,
                message: 'medusaId  are required'
            })
        }
        const newMedusa = {
            medusaId,
            price,
            stock
            
        }
        await Medusa.create(newMedusa);
        return res.status(200).json(
            {
                success: true,
                message: 'Create Medusa succesfully'
            }
        )
    }catch(error){
        return res.status(500).json({
            success: false,
            message: 'Error Reading Medusa',
            error: error.message
        })
    }
}

medusaController.getmedusaById = async(req,res)=>{
    try{
        const {id} = req.params;
        const medusa = await Medusa.findById(id);
        if(!medusa){
            return res.status(404).json(
                {
                    success: true,
                    message: 'Medusa not found',
                    data: []
                }
            );
        };
        return res.status(200).json({
            success: true,
            message: 'Medusa found',
            data: medusa
        });
    }catch(error){
        if(error?.message.includes('Cast to ObjectId failed')){
            return res.status(404).json(
                {
                    success: true,
                    message: 'Medusa not found',
                    data: []
                }
            );
        }
        return res.status(500).json(
            {
                success: false,
                message: 'Error finding Medusa',
                error: error.message
            }
        )
    }
}


module.exports = medusaController;