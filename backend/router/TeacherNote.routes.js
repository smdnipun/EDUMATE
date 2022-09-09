import express from 'express'
import {
  CreateNote,
  DeleteNote,
  GetNote,
  GetTeacherNotes,
    UpdateNote,
  Upload
} from '../controller/Note.controller.js'

const router = express.Router()

//create answers
router.post('/add', Upload.single('file'), CreateNote)
//get all answers
router.get('/get', GetTeacherNotes)

router.get('/:id', GetNote)

router.delete('/:id', DeleteNote)

router.put('/:id', UpdateNote)
export default router;
