import mongoose from 'mongoose'

const teacherNotesSchema = new mongoose.Schema({
  note: {
    type: String,
  },
  subject: {
    type: String,
    required: true,
  },
  lesson_name: {
    type: String,
    required: true,
  },
  grade: {
    type: Number,
    required: true,
  },
})

export default mongoose.model('teacherNotes', teacherNotesSchema)
