import mysql2 from 'mysql2/promise'
import dotenv from 'dotenv'

dotenv.config();

const db=mysql2.createPool({ // help to maintain multiple connection and defining the connectivity string
    host: process.env.SQL_HOST,
    database:process.env.SQL_DB,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASS,
    port: process.env.SQL_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0

})
export const connectDB =async()=>{
    try{
        const connection = await db.getConnection(); // connecting express and mysql
        console.log("db connected successfully");
       connection.release()

    }catch (err){
        console.error("connection is  esatablished", err);
        process.exit(1);
    }
}

export default db;