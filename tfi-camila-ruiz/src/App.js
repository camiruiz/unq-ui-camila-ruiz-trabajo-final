import React from 'react';
import './Styles/App.css';
import Home from './Components/Home';
import Game from './Components/Game';
import {BrowserRouter, Routes, Route} from 'react-router-dom';



 
function App() {

    return (
        <BrowserRouter>
                <Routes>
                 <Route index element={<Home/>} />
                 <Route exact path='/Game' element={<Game/>} />
                </Routes>
        </BrowserRouter>
           
    )
 }

export default App;
