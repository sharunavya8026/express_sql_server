import UserModel from "../Model/userModel.js";

//user creation

export const createUserController = async(req, res)=>{
    try{
        const{names, email,password}=req.body
            const response = await UserModel.createUserModel({names,email,password});
   
        res.status(201).json({
            message: "user has been created",
            userId: response
        })

        }
        catch(err){
            res.status(500).json({error:err.message})
        }
    }
    // get all the users
    export const getAllUsersController=async(req, res)=>{
        try{
            const data=await UserModel.getAllUsersModel();
            res.json(data)
        }
        catch(err){
            res.status(500).json({error:err.message})

        }

    }
    export const updateUserPasswordController= async(req, res)=>{
        try{
            const {password}=req.body;
            const updatePassword=await UserModel.updateUserPasswordModel(req.params.id,
                {password})
                if(!updatePassword){
                    res.status(404).json({message: "user not found"})
                }
                else{
                    res.json({message: "password has been update"})
                }
            }
                catch(err){
                    res.status(500).json({error:err.message})

                }
        }
        export const deleteUserController=async(req, res) =>{
            try{
            
            const delte=await UserModel.deleteUserModel(req.params.id)
                if(!delte){
                    res.json({message: "user not found"})
                }
                else{
                    res.json({message: "user has been deleted"})
                }
            }
                catch(err){
                    res.status(500).json({error:err.message})

                }
        }
    
        







