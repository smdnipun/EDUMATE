import express from 'express'
import { login, register, updatePassword } from '../controller/auth.js'

const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.put('/updatePwd/:id', updatePassword)

export default router
