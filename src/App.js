import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {AboutUs, ContactUs, Home} from './Pages'
import React from 'react';
import './App.css';
import './index.css';


const App = () => {
  return (
    <Router>
			<Routes>
				<Route path='/' element={<Home/>}/>
				<Route path='/About' element={<AboutUs/>}/>
				<Route path='/Contact' element={<ContactUs/>}/>
      </Routes>
    </Router>
  );
};

export default App;
