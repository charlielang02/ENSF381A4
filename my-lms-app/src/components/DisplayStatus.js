import React from 'react';
import './LoginForm.css'; // Ensure it follows the LMS theme

const DisplayStatus = ({ type, message }) => {
    return <div className={`status-message ${type}`}>{message}</div>;
};

export default DisplayStatus;
