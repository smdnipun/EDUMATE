import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/footer';
import { UploadNote } from './components/client/teacher/UploadNote.js';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <UploadNote/>
     <BrowserRouter>
        <Routes>
            {/* admin */}

            {/* client */}

        </Routes>
     </BrowserRouter>
     {/* <Footer/> */}
    </div>
  );
}

export default App;
