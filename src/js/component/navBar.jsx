import React from "react";



const NavBar = () => {
    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-black ">
            <div className="container-fluid position-relative">
                <a className="navbar-brand text-light fw-bold fs-2" href="#">Start Bootstrap</a>
                <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse position-absolute bottom-0 end-0 fs-4" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 me-3">
                        <li className="nav-item me-3">
                            <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link active text-secondary" aria-current="page" href="#">About</a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link text-secondary" href="#">Services</a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link text-secondary" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar