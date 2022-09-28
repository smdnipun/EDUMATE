import exprees from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import authRoute from './router/auth.js'
import userRoute from './router/user.routes.js'
import studentanswersRoutes from './router/StudentAnswers.routes.js'
import linkRoutes from './router/Link.routes.js'
import streamrouter from './router/Streams.routes.js'
import subjectrouter from './router/Subject.routes.js'
import subjectfeedback from './router/subjectfeedback.routes.js'
import teacherRouter from './router/TeacherNote.routes.js'
import markRouter from './router/Mark.routes.js'
import commentRouter from './router/Comment.routes.js'

const app = exprees()
dotenv.config()

//mongoose connection

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONG_URL).then(() => {
      console.log('Connected to mongoDB')
    })
  } catch (err) {
    throw err
  }
}

mongoose.connection.on('disconnected', () => {
  console.log('mongoDB disconnected !!!')
})

//middleware
app.use(cookieParser())
app.use(exprees.json())
app.use(cors())

//admin pass - admin123
app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/studentanswers', studentanswersRoutes)
app.use('/link', linkRoutes)
app.use('/stream', streamrouter)
app.use('/subject', subjectrouter)
app.use('/subjectfeedback', subjectfeedback)
app.use('/teacherNote', teacherRouter)
app.use('/StudentAnswers', exprees.static('StudentAnswers'))
app.use('/TeacherNotes', exprees.static('TeacherNotes'))
app.use('/mark', markRouter)
app.use('/comment',commentRouter)

//error handling
app.use((err, req, res, next) => {
  const errorStatus = err.status || 5000
  const errorMessage = err.message || 'Something went wrong!!!'
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  })
})

//port connecting
app.listen(process.env.PORT, () => {
  connect()
  console.log('Successfully connected to PORT 5000')
})
