import db from "../Db/db.js";

const table = "user";

class UserModel {

    static async createUserModel({ names, email, password }) {
        const sql = `INSERT INTO ${table} (names, email, password) VALUES (?, ?, ?)`;

        const [result] = await db.execute(sql, [names, email, password]);
        return result.insertId;
    }
    static async getAllUsersModel(){
        const sql=`SELECT * FROM ${table}`
        const [rows]= await db.execute(sql);
        return rows;
        
    }
    static async updateUserPasswordModel(id,{password}){// pass recieved as object
        const sql=`UPDATE ${table} SET password=? WHERE id=?`
        const[update]=await db.execute(sql,[password,id])
        return update.affectedRows;



    }
    static async deleteUserModel(id){
        const sql=`DELETE FROM ${table} WHERE id=?`
        const[delte]= await db.execute(sql,[id])
        return delte.affectedRows;
    }


}

export default UserModel;
