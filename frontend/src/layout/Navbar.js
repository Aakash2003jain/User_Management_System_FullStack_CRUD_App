import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
  return (
    <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
          <div class="container-fluid">
            <Link class="navbar-brand" to={"/"}>Full Stack Application</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="n avbar-toggler-icon"></span>
            </button>

            <Link className="btn btn-outline-light" to="/add-user">
              Add User
            </Link>
            
          </div>
        </nav>
    
    </>
  );
}
