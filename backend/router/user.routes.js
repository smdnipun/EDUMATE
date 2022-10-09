import express from 'express'
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from '../controller/user.controller.js'
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js'

const router = express.Router()

//update
router.put('/:id', updateUser)

//delete
router.delete('/:id', deleteUser)

//get
router.get('/:id', getUser)

// get all
router.get('/', getUsers)

//get user by type
// router.get('/', getUserByType)
// router.get('/search/:firstName', getUserByName)

export default router
