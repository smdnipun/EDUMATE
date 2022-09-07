import express from 'express';
import { createSubject, updateSubject, deleteSubject, getSubjects, getSubjectById } from '../controller/Subject.controler.js';

const subjectrouter = express.Router();

//create
subjectrouter.post ('/add', createSubject);

//UPDATE
subjectrouter.put('/:id', updateSubject)

//DELETE
subjectrouter.delete('/:id', deleteSubject)

//GET ALL
subjectrouter.get('/', getSubjects)

//get by id
subjectrouter.get('/get/:id', getSubjectById)

export default subjectrouter;