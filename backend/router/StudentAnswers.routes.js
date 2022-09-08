import express from 'express';
import { CreateStudentAnswers, GetAllStudentAnswers, Upload } from '../controller/Studentanswers.controller.js';

const router = express.Router();

//create answers
router.post('/add',Upload.single('file'),CreateStudentAnswers);
//get all answers
router.get('/get', GetAllStudentAnswers);
export default router;