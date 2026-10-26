import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // 👈 CSS 파일 불러오기

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-wrapper">
          
          {/* 로고 영역 */}
          <div className="logo-area">
            <Link to="/" className="logo">
              Minblack
            </Link>
          </div>

          {/* 데스크탑 네비게이션 메뉴 */}
          <nav className="desktop-nav">
            <Link to="/" className="nav-link">홈</Link>
            <Link to="/about" className="nav-link">소개</Link>
            <Link to="/services" className="nav-link">서비스</Link>
            <Link to="/contact" className="nav-link">문의</Link>
          </nav>

          {/* 모바일 햄버거 버튼 */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="hamburger-btn"
            aria-label="메뉴 열기"
          >
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 드롭다운 */}
      {isOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setIsOpen(false)} className="mobile-link">홈</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="mobile-link">소개</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="mobile-link">서비스</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="mobile-link">문의</Link>
        </div>
      )}
    </header>
  );
}