import React from 'react';

function Notification({ message, type, onClose }) {
    return (
      <div className="notification-overlay" onClick={onClose}>
        <div className={`notification-popup ${type}`} onClick={(e) => e.stopPropagation()}>
            <h3>Message</h3>
          <p>{message}</p>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
      </div>
    );
  }
  

export default Notification;
