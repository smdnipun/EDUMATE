import express from 'express'
import {
    createLink,
    updateLink,
    deleteLink,
    getLink,
    getLinks
} from '../controller/Link.controller.js'



const router = express.Router()
//CREATE
router.post('/add', createLink)

//UPDATE
// router.put('/availability/:id',updateItemAvailability)
router.put('/:id', updateLink)
//DELETE
router.delete('/:id/', deleteLink)
//GET

router.get('/:id', getLink)
//GET ALL

router.get('/', getLinks)

export default router
