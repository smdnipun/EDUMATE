import express from 'express';
import { CreateStudentAnswers } from '../controller/Studentanswers.controller.js';

const router = express.Router();

//create innovation
router.post('/add',CreateStudentAnswers);

export default router;