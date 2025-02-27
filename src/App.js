import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import { NavLink } from "react-router-dom";

function App() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" >Головна</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" >Про нас</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Контакт</NavLink>
                    </li>
                </ul>
            </nav>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1>404 - Сторінка не знайдена</h1>} />
        </Routes>
        </div>
    );
}

export default App;
