import express from 'express';
import { enrollCourse, getAllEnrollments,updateEnrollment, deleteEnrollment} from "../Controller/enrollController.js";
const Router= express.Router();

Router.post('/enroll', enrollCourse);
Router.get('/enrollments/:student_id', getAllEnrollments);
Router.put('/updateenroll/:id', updateEnrollment);
Router.delete('/deleteenroll/:id', deleteEnrollment);

export default Router;