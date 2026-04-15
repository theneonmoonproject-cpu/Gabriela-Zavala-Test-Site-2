import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
    const phoneNumber = 'XXXXXXXXXXX'; // Replace with the actual phone number

    return (
        <a href={`https://wa.me/${phoneNumber}`} className="whatsapp-button" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i>
        </a>
    );
};

export default WhatsAppButton;