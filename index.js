import { connectDB } from "./Db/db.js";
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import userRoute from "./Routes/userRouter.js";

dotenv.config();
 const app=express();
const PORT=process.env.PORT||5000;

// Middleare
app.use(express.json());
app.use(cors());
// http://localhost:5000/api/user/signup


connectDB();
app.use("/api/user", userRoute);

app.listen(PORT, ()=>{
    console.log(`your server is running in ${PORT}`);

})