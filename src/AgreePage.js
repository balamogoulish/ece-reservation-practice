import React, {useState } from 'react';
import Header from './Header';
import { useNavigate } from "react-router-dom"

function AgreePage(){
	const navigate = useNavigate();

  const navigateToSignUp = () => {
    navigate("/signUp");
  }

  return (
    <div className='page'>
      <Header />
      <div>개인정보동의</div>
      
    </div>
    
  )
}

export default AgreePage;