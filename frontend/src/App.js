import React from 'react';
import Login from './login';
import Logout from './logout';
import Forgot from './forgot';
import Refsignup from './subscription';
import Dashboard from './dashboard';
import Profile from './profile';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard/>}/>
        </Routes>
        <Routes>
          <Route exact path="/forgot" element={<Forgot/>}/>
        </Routes>
        <Routes>
          <Route exact path="/login" element={<Login/>}/>
        </Routes>
        <Routes>
          <Route exact path="/logout" element={<Logout/>}/>
        </Routes>
        <Routes>
          <Route exact path="/subscription" element={<Refsignup/>}/>
        </Routes>
        <Routes>
          <Route exact path="/dashboard" element={<Dashboard/>}/>
        </Routes>
        <Routes>
          <Route exact path="/profile" element={<Profile/>}/>
        </Routes>
    </Router>
  );
}

export default App;
