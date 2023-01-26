import React, { useEffect, useState } from 'react'
import Modal from './Modal'
import Header from './Header'
import { useNavigate } from "react-router-dom"

/*임시 유저 아이디*/
const User={
  id: 'ece',
  pw: '440'
}

export default function Login() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [notBtnAllow, setNotBtnAllow] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  
  const navigate = useNavigate();

  const navigateToAgree = () => {
    navigate("/agreeInform");
  }

  /*이용안내 모달 함수*/
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  /*아이디와 비밀번호가 모두 입력된 경우 로그인 버튼 활성화*/
  useEffect(() => {
    if(id.length > 0 && pw.length > 0){
      setNotBtnAllow(false)
      return;
    }
    setNotBtnAllow(true);
  },[id,pw]);

  const confirmLogin = () => {
    if(id === User.id && pw === User.pw){
      alert('로그인에 성공했습니다.')
    }
    else{
      alert('잘못된 아이디 또는 비밀번호입니다.')
    }
  }

  return(
    <div className='page'>
      <Header />
      <div className='titleWrap'>
        ECE-Reservation
      </div>
      <div className='contentWrap'>
        <div className='inputTitle'>아이디</div>
        <div className='inputWrap'>
          <input 
            type='text'
            className='input'
            placeholder='아이디를 입력하세요'
            value={id}
            onChange={(e)=>setId(e.target.value)} />
        </div>
        {/* <div className='errorMessageWrap'>
          아이디를 입력해주세요
        </div> */}

        <div style={{ marginTop:'26px' }} className='inputTitle'>
          비밀번호</div>
        <div className='inputWrap'>
          <input
            type='password'
            className='input'
            placeholder='비밀번호를 입력하세요'
            value={pw}
            onChange={(e)=>setPw(e.target.value)} />
        </div>
        {/* <div className='errorMessageWrap'>
          비밀번호를 입력해주세요
        </div> */}
      </div>
      
      <div className='buttonWrap'>
        <div >
          <button onClick={confirmLogin} disabled={notBtnAllow} className='button_loginPage'>로그인</button>
        </div>
        <div >
          <button onClick={navigateToAgree} className='button_loginPage'>회원가입</button>
        </div>
        <div >
        <React.Fragment>
          <button onClick={openModal} className='button_loginPage'>이용안내</button>
          <Modal open={modalOpen} close={closeModal} header="이용안내">
            팝업창입니다. 쉽게 만들 수 있어요. 같이 만들어봐요!
          </Modal>
        </React.Fragment>
        </div>
      </div>
      
    </div>
  )
}