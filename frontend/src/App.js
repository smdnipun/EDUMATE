import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/footer';
import { UploadNote } from './components/client/teacher/UploadNote.js';
import { UploadLink } from './components/client/teacher/UploadLink.js';
import { ViewLinks } from './components/client/teacher/viewLinks';
import { Updatelink } from './components/client/teacher/Updatelink';


function App() {
  return (
    <div className='App'>
      <Navbar />
      {/* <UploadNote/> */}
      <BrowserRouter>
        <Routes>
          {/* admin */}

          {/* client */}

          {/* teacher */}
          <Route exact path='/addlink' element={<UploadLink />} />
          <Route exact path='/viewlink' element={<ViewLinks />} />
      	  <Route exact path='/updatelink/:id' element={<Updatelink/>}/>
          {/* student */}
        </Routes>
      </BrowserRouter>
      {/* <Footer/> */}
    </div>
  )
}

export default App;
