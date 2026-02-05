import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
dotenv.config();

export const protect = async(req,res,next)=>{
    const authHeader= req.header.authorization;
    if(!authHeader || !authHeader.startsWith("Bearer")){
        return res.status(401).json({message: "unauthorized user"}) 
    }
    const token= authHeader.split(" ")[1];
   try{
    const decode= jwt.verify(token, process.env.JWT_TOKEN);
    req.user= decode;
    next();
   }
   catch(err){
    return res.status(401).json({message: "invalid token"}) 
   }

}