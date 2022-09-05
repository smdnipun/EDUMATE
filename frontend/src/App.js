import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/footer';
import { UploadNote } from './components/client/teacher/UploadNote.js';
import { StudentAnswersUpload } from './components/client/student/StudentAnswersUpload';
import Home from './components/client/Home';
import { ExamTimeTable } from './components/client/student/examtimetable/ExamTimeTable';
import { FeedBack } from './components/client/student/feedback/FeedBack';

function App() {
  return (
    <div className="App">
     <Navbar/>
     {/* <Home/> */}
     <BrowserRouter>
        <Routes>
            {/* admin */}

            {/* client */}
            <Route exact path={'/studentanswersheetUpload'} element={<StudentAnswersUpload/>}/>
            <Route exact path ={'/examtimetable'} element={<ExamTimeTable/>}/>
            <Route exact path={'/feedback'} element={<FeedBack/>}/>

        </Routes>
     </BrowserRouter>
     {/* <Footer/> */}
    </div>
  );
}

export default App;
