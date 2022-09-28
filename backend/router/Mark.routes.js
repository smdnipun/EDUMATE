import express from 'express'
import {
  createMark,
  updateMark,
  deleteMark,
  getMark,
  getMarks,
  getMarkByStudentId,
  getMarkByTeacherId
} from '../controller/Mark.controller.js'

const router = express.Router()
//CREATE
router.post('/add', createMark)

router.put('/:id', updateMark)
//DELETE
router.delete('/:id', deleteMark)
//GET

router.get('/:id', getMark)
//GET ALL

router.get('/', getMarks)

router.get('/get/:student_id', getMarkByStudentId)
router.get('/getto/:markedBy', getMarkByTeacherId)


export default router
