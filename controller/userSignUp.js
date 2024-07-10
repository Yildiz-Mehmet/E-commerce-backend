const userModel = require("../models/userModel")

async function userSignUpController(req,res){
    try{

        const {email,password,name} = req.body

        if(!email){
            throw new Error("Please provide email")
        }
        if(!password){
            throw new Error("Please provide password")
        }
        if(!name){
            throw new Error("Please provide name")
        }

        const userData = new userModel(req.body)
    }
    catch(err) {
        res.json({
            message :  err,
            error : true,
            success : false,


        })
    }
}