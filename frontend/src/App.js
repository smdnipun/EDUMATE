import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/footer';
import { UploadNote } from './components/client/teacher/UploadNote.js';
import { StudentAnswersUpload } from './components/client/student/StudentAnswersUpload';
import Home from './components/client/Home';
import { ExamTimeTable } from './components/client/student/examtimetable/ExamTimeTable';
import { FeedBack } from './components/client/student/feedback/FeedBack';
import { UploadLink } from './components/client/teacher/UploadLink.js';
import { ViewLinks } from './components/client/teacher/viewLinks';
import AddStreams from './components/admin/streams/AddStreams';
import AddSubjects from './components/admin/streams/AddSubjects';
import ViewStreams from './components/admin/streams/ViewStreams';
import ViewSubjects from './components/admin/streams/ViewSubjects';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <UploadNote/> */}
      <BrowserRouter>

        <Routes>
          {/* admin */}
            <Route exact path={'/addstream'} element={<AddStreams />} />
            <Route exact path={'/addsubject'} element={<AddSubjects />} />
            <Route exact path={'/getstream'} element={<ViewStreams />} />
            <Route exact path={'/getsubject'} element={<ViewSubjects />} />

            {/* client */}
            <Route exact path={'/studentanswersheetUpload'} element={<StudentAnswersUpload/>}/>
            <Route exact path ={'/examtimetable'} element={<ExamTimeTable/>}/>
            <Route exact path={'/feedback'} element={<FeedBack/>}/>

          {/* teacher */}
          <Route exact path='/addlink' element={<UploadLink />} />
          <Route exact path='/viewlink' element={<ViewLinks />} />

          {/* student */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
