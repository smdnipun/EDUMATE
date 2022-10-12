import express from 'express'
import {
    createExam,
    updateExam,
    deleteExam,
    getExamById,
    getExams,
    getExamByName,
    displaySearch
} from '../controller/ExamTimeTable.controler.js'

const examrouter = express.Router()
//CREATE
examrouter.post('/add', createExam)

//UPDATE
examrouter.put('/:id', updateExam)

//DELETE
examrouter.delete('/:id/', deleteExam)

//GET
examrouter.get('/:id', getExamById)

//GET ALL
examrouter.get('/', getExams)

//get by name
examrouter.post('/search', getExamByName)

//display search
examrouter.get('/view/:sub', displaySearch)

export default examrouter
