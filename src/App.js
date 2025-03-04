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
                        <NavLink to="/about" style={({ isActive }) => ({
                        color: isActive ? "brown" : "black",})}>Про нас</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Контакт</NavLink>
                    </li>
                </ul>
            </nav>
         <Routes>
                <Route path="/" element={<Home />} /> {/*"/" на каком url будет отображаться компонент Home*/}
                {/*element - это параметр (пропс), который принимает компонент, который будет отображаться на экране*/}
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<h1>404 - Сторінка не знайдена</h1>} />
        </Routes>
        </div>
    );
}

export default App;
