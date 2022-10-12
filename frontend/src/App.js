import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/common/Navbar'
import { Footer } from './components/common/footer'
import { UploadNote } from './components/client/teacher/uploadNote.js'
import { StudentAnswersUpload } from './components/client/student/StudentAnswersUpload'
import Home from './components/client/Home'
import { ExamTimeTable } from './components/client/student/examtimetable/ExamTimeTable'
import { FeedBack } from './components/client/student/feedback/FeedBack'
import { UploadLink } from './components/client/teacher/UploadLink.js'
import { ViewLinks } from './components/client/teacher/viewLinks'
import { Updatelink } from './components/client/teacher/Updatelink'
import AddStreams from './components/admin/streams/AddStreams'
import AddSubjects from './components/admin/streams/AddSubjects'
import ViewStreams from './components/admin/streams/ViewStreams'
import ViewSubjects from './components/admin/streams/ViewSubjects'
import UpdateStreams from './components/admin/streams/UpdateStreams';
import UpdateSubjects from './components/admin/streams/UpdateSubjects';
import AdminHome from './components/admin/AdminHome';
import { ViewNote } from './components/client/teacher/ViewNote'
import { UpdateNote } from './components/client/teacher/UpdateNote'
import Main from './components/common/userReg/Main.js'
import SignIn from './components/common/userReg/SignIn.js'
import SignUp from './components/common/userReg/SignUp.js'
import Profile from './components/common/Profile/Profile.js'
import Update from './components/common/Profile/Update'
import AddSubjectTimeTable from './components/admin/Time Tables/AddSubjectTimeTable'
import ViewSubjectTimeTable from './components/admin/Time Tables/ViewSubjectTimeTable'
import AddExamTimeTable from './components/admin/Time Tables/AddExamTimeTable'
import ViewExamTimeTable from './components/admin/Time Tables/ViewExamTimeTable'
import UpdateExamTimeTable  from './components/admin/Time Tables/UpdateExamTimeTable'
import UpdateSubjectTable  from './components/admin/Time Tables/UpdateSubjectTable'
import SearchedExam from './components/admin/Time Tables/SearchedExam'

function App() {
  return (
    <div className='App'>
      {/* <Navbar /> */}
      {/* <UploadNote/> */}
      <BrowserRouter>
        <Routes>
          {/*common*/}
          <Route exact path={'/main'} element={<Main />} />
          <Route exact path={'/login'} element={<SignIn />} />
          <Route exact path={'/register'} element={<SignUp />} />
          <Route exact path={'/profile'} element={<Profile />} />
          <Route exact path={'/updateProfile'} element={<Update />} />
          <Route exact path={'/navbar'} element={<Navbar />} />

          {/* admin */}
          <Route exact path={'/adminhome'} element={<AdminHome />} />
          <Route exact path={'/addstream'} element={<AddStreams />} />
          <Route exact path={'/addsubject'} element={<AddSubjects />} />
          <Route exact path={'/getstream'} element={<ViewStreams />} />
          <Route exact path={'/getsubject'} element={<ViewSubjects />} />
          <Route exact path={'/editstrm/:_id'} element={<UpdateStreams />} />
          <Route exact path={'/addsubtime'} element={<AddSubjectTimeTable />} />
          <Route exact path={'/getsubtime'} element={<ViewSubjectTimeTable />} />
          <Route exact path={'/addexam'} element={<AddExamTimeTable />} />
          <Route exact path={'/getexam'} element={<ViewExamTimeTable />} />
          <Route exact path={'/editexam/:_id'} element={<UpdateExamTimeTable />} />
          <Route exact path={'/editsubtbl/:_id'} element={<UpdateSubjectTable />} />
          <Route exact path={'/searchexam'} element={<SearchedExam />} />

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
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
