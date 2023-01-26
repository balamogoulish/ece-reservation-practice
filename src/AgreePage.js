import React, { useState, useEffect } from 'react';
import Header from './Header';
import { useNavigate } from "react-router-dom"

function AgreePage(){
	const [Check, setCheck] = useState(false);
  const [noButton, setNoButton] =useState(true);
  const navigate = useNavigate();

  const navigateToSignUp = () => {
    navigate("/signUp");
  }

  const CheckEvent =()=>{
    if(Check === false) {
      setCheck(true)
    }else {
      setCheck(false)
    }
  };

  useEffect(() => {
    if(Check === true){
      setNoButton(false)
      return;
    }
    setNoButton(true);
  },[Check]);

  return (
    <div className='page'>
      <Header />
      <div className='titleWrap'>
        개인정보동의
      </div>

      <div className='content'>
        개인정보 동의 내역 세부 사항을 여기에 작성합니다.
      </div>

      <div className='checkBox'>
        <input type='checkbox' onChange={CheckEvent} />개인정보 사용에 동의합니다.
      </div>
      
      <div className='buttonWrap'>
          <button disabled={noButton} onClick={navigateToSignUp} className='button_loginPage'>회원가입</button>
      </div >
    </div>
    
  )
}

export default AgreePage;