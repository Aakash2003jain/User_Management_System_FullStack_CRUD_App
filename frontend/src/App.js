import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./layout/Navbar"; // Ensure correct path
import Home from "./pages/Home";
import AddUser from "./User/AddUser";
import EditUser from "./User/EditUser";
import ViewUser from "./User/ViewUser";
export default function App() {
  return (
    
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/add-user" element={<AddUser/>}/>
            <Route exact path="/edituser/:id" element={<EditUser/>}/>
            <Route exact path="/view-user/:id" element={<ViewUser/>}/>
          </Routes>
        </Router>

      </div>
    
  );
}
