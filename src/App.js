
import './App.css';

import { Route, Routes } from "react-router-dom"
import Login from './Components/Login/index';
import SignUp from './Components/SignUp';


function App() {
  return (
    <>
    <Routes>
    <Route path = "/" element={<Login />}/>
    <Route path = "/sign" element={<SignUp />}/>
      </Routes>
      </>
  );
}

export default App;
