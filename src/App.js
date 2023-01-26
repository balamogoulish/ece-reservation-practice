import Login from "./Login";
import SignUp from './SignUp';
import AgreePage from './AgreePage';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/signUp' element={<SignUp/>}></Route>
        <Route path='/agreeInform' element={<AgreePage/>}></Route>
        <Route path='/' exact element={<Login/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
