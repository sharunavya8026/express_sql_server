import db from "../Db/db.js";

const table = "enrollments";
class enrollModel{
    static async enrollStudentModel({student_id, course_id, course}){
        const sql=`INSERT INTO enrollments (student_id, course_id, course) VALUES (?, ?, ?)`;
        const [result]= await db.execute(sql,[student_id, course_id, course]);
        return result.insertId;
    }

    static async getAllEnrollmentsModel(){
        const sql=`SELECT * FROM enrollments`;
        const [rows]= await db.execute(sql);
        return rows;
    }
    static async getEnrollmentsByStudentIdModel(student_id){
        const sql=`SELECT * FROM enrollments WHERE student_id=?`;
        const [rows]= await db.execute(sql,[student_id]);
        return rows;
    }

    static async updateEnrollmentModel(id,course){
        const sql=`UPDATE enrollments SET course=? WHERE id=?`
        const[update]=await db.execute(sql,[course,id])
        return update.affectedRows;
    }
    static async deleteEnrollmentModel(id){
        const sql=`DELETE FROM enrollments WHERE id=?`
        const[deleteResult]= await db.execute(sql,[id])
        return deleteResult.affectedRows;

}
}


export default enrollModel;
