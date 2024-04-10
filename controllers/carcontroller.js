const db = require("../models/db");

exports.createcar = async(req , res , next) => {
    try{
        const {registrationnumber , brand , model , color , note ,} = req.body
        const createcar = await db.car.create({
            data: {
                registrationnumber,
                brand,
                model,
                color,
                note,
            }
        })
        res.json({message : "Car created success", createcar})
    }catch(err){
        next(err)
    }
}

exports.getcar = async(req, res , next) => {
    try{
        const cars = await db.car.findMany()
        res.json({message : "Cars fetched success", cars})
    }catch(err){
        next(err)
    }
}

exports.getcar1 = async(req, res , next) => {
    try{
        const {id} = req.params
        const cars = await db.car.findFirst({where:{id:+id}})
        res.json({message : "Car fetched success", cars})



    }catch(err){
        next(err)
    }
}

exports.deletecar = async(req , res , next) => {
    const {id} = req.params
    try{
        const result = await db.car.delete({
            where: {id: +id}
        })
        res.json({message : "Car deleted success", result: result})
    }catch(err){
        next(err)
    }
}

exports.updatecar = async (req , res , next) => {
    const {id} = req.params;
    const { registrationnumber, brand, model, color, note } =req.body;
    try{
        const result = await db.car.update({
            where: {id:+id},
            data:{
                registrationnumber,
                brand,
                model,
                color,
                note,
            }
        })
        res.json({message : "Car updated success", result: result})
    }catch(err){
        next(err)
    }
}
