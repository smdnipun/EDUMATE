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
router.put('/:id', verifyUser, updateUser)

//delete
router.delete('/:id', verifyUser, deleteUser)

//get
router.get('/:id', getUser)

// get all
router.get('/', verifyAdmin, getUsers)

export default router
