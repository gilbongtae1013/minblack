import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/header';
import './App.css';


// 임시 페이지 컴포넌트들 (나중에 독립된 파일로 분리해도 됩니다)
function Home() {
  return <div className="home">
    <h1>권민석 초심 찾아라</h1>
  </div>;
}

function About() {
  return (
    <div className='about'>
      <h1>이름: 권민석</h1>
      <h2>성별: 게이</h2>
      <h2>소개:
      게이다, 초심을 잃었다.
      </h2>
    </div>
  )
}

function Services() {
  return (
    <div className='service'>
      <img src='https://i.namu.wiki/i/YEwyFLeIEAUtSuc29_UFUSaN4V7oZJRs78RmEhVI5O89AEohIgUplZaX6bwVFoyyiESHV8uPwJY_t69Wdl0sQQ.webp'/>
    </div>
  )
}

function Contact() {
  return (
    <div className='contact'>
      <h1>디코로 해</h1>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      {/* 헤더는 공통 컴포넌트이므로 Routes 바깥에 위치합니다 */}
      <Header />

      {/* URL 경로에 따라 보여줄 컴포넌트 매핑 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}