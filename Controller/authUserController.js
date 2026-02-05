import {hashPassword, passwordCheck}from "../utils/hash.js";
import {createToken}from "../utils/token.js";

import AuthUserModel from "../Model/authUserModel.js";

// checking mail existing or not

export const authSignUp = async(req, res)=>{
    try{
    const {names, email, password, role}=req.body
    // existing or not mail
    const chechEmail=await AuthUserModel.userLoginModel(email)
    if(chechEmail){
        return res.status(500).json({message : "email already exist"})
    }
    const newPassword= await hashPassword(password);
    const id = await AuthUserModel.userSignupModdel(
        {names,
            email,
            password: newPassword,
            role: role|| "user"
        })
        
            res.status(201).json({message: "user has been created"})
    }
    catch(err){
        res.status(500).json({error:err.message})
    }
}
export const login= async(req,res)=>{
    try{

        const{email,password}=req.body
        const user= await AuthUserModel.userLoginModel(email)
        if(!user){
            return res.status(400).json({message: "invalid user"})
        }
        const checkPassword=await passwordCheck(password, user.password)
        if(!checkPassword){
            return res.status(400).json({message: "invalid passowrd"})
        }
        const token=createToken({
            id: user.id,
            role: user.role
        })
        res.status(200).json({message: "login successfully"})
    }
    catch(err){
        res.status(500).json({error:err.message})
    }
}