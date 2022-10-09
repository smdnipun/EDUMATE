import React, { useContext } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/common/Navbar'
import { Footer } from './components/common/footer'
import { UploadNote } from './components/client/teacher/uploadNote.js'
import { StudentAnswersUpload } from './components/client/student/StudentAnswersUpload'
import { ExamTimeTable } from './components/client/student/examtimetable/ExamTimeTable'
import { FeedBack } from './components/client/student/feedback/FeedBack'
import { UploadLink } from './components/client/teacher/UploadLink.js'
import { ViewLinks } from './components/client/teacher/viewLinks'
import { Updatelink } from './components/client/teacher/Updatelink'
import AddStreams from './components/admin/streams/AddStreams'
import AddSubjects from './components/admin/streams/AddSubjects'
import ViewStreams from './components/admin/streams/ViewStreams'
import ViewSubjects from './components/admin/streams/ViewSubjects'
import UpdateStreams from './components/admin/streams/UpdateStreams'
import UpdateSubjects from './components/admin/streams/UpdateSubjects'
import AdminHome from './components/admin/AdminHome'
import { ViewNote } from './components/client/teacher/ViewNote'
import { UpdateNote } from './components/client/teacher/UpdateNote'
import Main from './components/common/userReg/Main.js'
import SignIn from './components/common/userReg/SignIn.js'
import SignUp from './components/common/userReg/SignUp.js'
import Profile from './components/common/Profile/Profile.js'
import Update from './components/common/Profile/Update'
import { ViewStudentPaper } from './components/client/teacher/ViewStudentPaper'
import { AuthContext } from './context/AuthContext'
import UserManagement from './components/admin/UserManagement'
import ForgetPwd from './components/common/Profile/ForgetPwd'
import UpdateUser from './components/admin/UpdateUser'
import AddUser from './components/admin/AddUser'
import AddAdmin from './components/admin/AddAdmin'
import OTPverification from './components/common/userReg/OTPverification'
import ForgetPassword from './components/common/userReg/ForgetPassword'
import './components/common/userReg/main.css'
import { MarkPaper } from './components/client/teacher/MarkPaper.js'
import { UpdateMark } from './components/client/teacher/UpdateMark.js'
import { ViewComments } from './components/client/teacher/ViewComments.js'
import { NotesReport } from './components/client/teacher/NotesReport'

function App() {
  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext)
    if (!user) {
      return <Navigate to='/login' />
    }
    return children
  }
  const StudentProtectedRoutes = ({ children }) => {
    const { user } = useContext(AuthContext)
    if (user.type != 'Student') {
      return <Navigate to='/login' />
    }
    return children
  }
  const TeacherProtectedRoutes = ({ children }) => {
    const { user } = useContext(AuthContext)
    if (user.type != 'Teacher') {
      return <Navigate to='/login' />
    }
    return children
  }

  return (
    <div className='App'>
      {/* <Navbar /> */}
      {/* <UploadNote/> */}
      <BrowserRouter>
        <Routes>
          {/*common*/}
          <Route exact path={'/'} element={<Main />} />
          <Route exact path={'/login'} element={<SignIn />} />
          <Route exact path={'/logout'} element={<SignIn logout={true} />} />
          <Route exact path={'/register'} element={<SignUp />} />
          <Route exact path={'/forgotPassword'} element={<OTPverification />} />
          <Route exact path={'/resetPassword'} element={<ForgetPassword />} />
          <Route
            exact
            path={'/profile'}
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path={'/updateProfile/:id'}
            element={
              <ProtectedRoute>
                <Update />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path={'/forgetPwd/:id'}
            element={
              <ProtectedRoute>
                <ForgetPwd />
              </ProtectedRoute>
            }
          />

          {/* user admin */}
          <Route exact path={'/viewuser'} element={<UserManagement />} />
          <Route exact path={'/updateuser/:id'} element={<UpdateUser />} />
          <Route exact path={'/adduser'} element={<AddUser />} />
          <Route exact path={'/addadmin'} element={<AddAdmin />} />

          {/* admin */}
          <Route
            exact
            path={'/adminhome'}
            element={
              <ProtectedRoute>
                <AdminHome />
              </ProtectedRoute>
            }
          />
          <Route exact path={'/addstream'} element={<AddStreams />} />
          <Route exact path={'/addsubject'} element={<AddSubjects />} />
          <Route exact path={'/getstream'} element={<ViewStreams />} />
          <Route exact path={'/getsubject'} element={<ViewSubjects />} />
          <Route exact path={'/editstrm/:_id'} element={<UpdateStreams />} />
          <Route
            exact
            path={'editsubj/:_id'}
            element={<UpdateSubjects />}
          ></Route>

          {/* student  */}
          <Route
            exact
            path={'/studentanswersheetUpload'}
            element={<StudentAnswersUpload />}
          />
          <Route exact path={'/examtimetable'} element={<ExamTimeTable />} />
          <Route exact path={'/feedback'} element={<FeedBack />} />

          {/* teacher */}
          <Route exact path='/addlink' element={<UploadLink />} />
          <Route exact path='/viewlink' element={<ViewLinks />} />
          <Route exact path='/updatelink/:id' element={<Updatelink />} />
          <Route exact path='/addNote' element={<UploadNote />} />
          <Route exact path='/viewNote' element={<ViewNote />} />
          <Route exact path='/updatenote/:id' element={<UpdateNote />} />
          <Route exact path='/papers' element={<ViewStudentPaper />} />
          <Route exact path='/markpapers/:id' element={<MarkPaper />} />
          <Route exact path='/viewmark' element={<UpdateMark />} />
          <Route exact path='/viewComments' element={<ViewComments/>} />
            <Route exact path='/notereport' element={<NotesReport/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
