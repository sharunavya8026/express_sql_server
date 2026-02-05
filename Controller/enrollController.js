import enrollModel from "../Model/enrollModel.js";

//student enroll courses

export const enrollCourse= async(req, res)=>{
    try{
        const {student_id, course_id, course}= req.body;
        if(!student_id || !course_id || !course){
            return res.status(400).json({message: "student_id, course_id and course are required"})
        }

        const enrollId= await enrollModel.enrollStudentModel({
            student_id, course_id, course
        })
        res.status(201).json({message: "student enrolled successfully", enrollId})
    }
        catch(error){
            res.status(500).json({message: error.message})
        }
    };

    export const getAllEnrollments= async(req, res)=>{
        try{
            const {student_id}= req.params;

            const data=await enrollModel.getEnrollmentsByStudentIdModel(student_id);
            res.json(data); 
        }
        catch(error){
            res.status(500).json({message: error.message})
        }
    }
    export const updateEnrollment= async(req, res)=>{
        try{
            const{id}=req.params;
            const {course}= req.body;
             if (!course) {
      return res.status(400).json({
        message: "course is required"
      });
    }  
            const update= await enrollModel.updateEnrollmentModel(id, course);
            if(!update){
                return res.status(404).json({message: "enrollment not found"})
            }   
            res.json({message: "enrollment updated successfully"})
        }
        catch(error){
            res.status(500).json({message: error.message});
        }
    };

    export const deleteEnrollment=async(req, res)=>{
        try{
            const {id}=req.params;
            const delte= await enrollModel.deleteEnrollmentModel(id);
            if(!delte){
                return res.status(404).json({message: "enrollment not found"})
            }       
            res.json({message: "enrollment deleted successfully"})
        }
        catch(error){
            res.status(500).json({message: error.message});
        }
    }