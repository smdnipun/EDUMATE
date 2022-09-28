import express from 'express'
import {
  CreateStudentAnswers,
  GetAllStudentAnswers,
  Upload,
  GetStudentAnswers,
    UpdateStudentAnswers,
  getStudentAnswersByStream
} from '../controller/Studentanswers.controller.js'

const router = express.Router()

//create answers
router.post('/add', Upload.single('file'), CreateStudentAnswers)

router.put('/:id', UpdateStudentAnswers)
//get all answers
router.get('/get', GetAllStudentAnswers)

router.get('/get/:id', GetStudentAnswers)

router.get('/getBySubject/:stream',getStudentAnswersByStream)

export default router
