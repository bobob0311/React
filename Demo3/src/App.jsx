import React, { useState, useEffect, useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './context/auth-context';

function App() {
  const ctx = useContext(AuthContext);


  return (
    <>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </>
  );
}

export default App;




// 서비스 기획자 
// 데이터분석가  
// 블록체인      




// 프론트엔드 --> 일주일 2시간 캐치에서 서치  // 프론트 종류??? 3D 특화된거 아니면 우선 동일하게 깔고 들어가는
// 코틀린, 풀스택, 사용자 정보량 페이지/ 최적의 정보량/ 


// 취준공부// 내년 6월에서 12사이에 들어간다   
// 취업이 멀다고 느껴져                      



