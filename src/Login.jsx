import React, { useEffect, useState } from 'react'

/*임시 유저 아이디*/
const User={
  id: 'ece',
  pw: '440'
}

export default function Login() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const [notBtnAllow, setNotBtnAllow] = useState(true);

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
          <button className='button_loginPage'>회원가입</button>
        </div>
        <div >
          <button className='button_loginPage'>이용안내</button>
        </div>
      </div>
      
    </div>
  )
}