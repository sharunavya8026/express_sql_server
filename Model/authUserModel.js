import db from "../Db/db.js";
const table="authusers";

class AuthUserModel{
    static async  userLoginModel (email){
        const sql= `SELECT *FROM ${table} WHERE email=? `;
        const[rows]=await db.execute(sql,[email]);
        
        return rows[0]
    }
    static async  userSignupModdel({names, email, password,role}){

        const sql= `INSERT INTO  ${table} (names, email, password,role) VALUES (?, ?, ?,?)`;
        const [insert]= await db.execute(sql,[names,email,password,role ]);
        return insert.insertId;
    }


}
export default AuthUserModel;