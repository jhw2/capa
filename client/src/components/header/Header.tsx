import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const mMenuOpen = () : void => {
    setMenuOpen(true);
  }
  const mMenuClose = () : void => {
    setMenuOpen(false);
  }
  return (
    <header id='capa-header' className={isMenuOpen ? 'lnb-open' : ''}>
      <div className='group'>
        <span className='m-menu' onClick={mMenuOpen}>모바일 메뉴</span>
        <a href='/' className='ic-logo'>CAPA파트너스</a>
        <ul className='right' >
          <li className='lnb-header'><a href='/' className='ic-logo'>CAPA파트너스</a></li>
          <li className='ic-company'>A가공업체</li>
          <li><a href='/'>로그아웃</a></li>
        </ul>
      </div>
      <div className='m-menu-bg' onClick={mMenuClose}></div>
    </header>
  );
}

export default Header;
