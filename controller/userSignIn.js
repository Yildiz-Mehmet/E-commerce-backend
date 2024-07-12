async function userSignInController(req,res){
    try{

        const {email,password} = req.body

        if(!email){
            throw new Error("Please provide email")
        }
        if(!password){
            throw new Error("Please provide password")
        }

        const user = await userModel.findOne({email})

        if(!user){
            throw new Error("User not found")
        }

    }
    catch(err){
        res.json({
            message :  err.message || err,
            error : true,
            success : false,


        })

    }
}


module.exports = userSignInController