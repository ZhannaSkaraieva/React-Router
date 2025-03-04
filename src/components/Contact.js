import React from "react";  
import { useNavigate } from "react-router";
import './Contact.css';

export function Contact() {
    const navigate = useNavigate();
    return (
        <div className="contact">
            <h1>Це сторінка контактів</h1>
            <button onClick={() => navigate("/")}>На головну</button>
        </div>
        
    );
}

export default Contact;