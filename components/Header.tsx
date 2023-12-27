'use client';

import Link from 'next/link';
import SvgMenu from './icons/Menu';
import { useState } from 'react';

const menuItems = [
  {
    text: 'Anasayfa',
    path: '/',
  },
  {
    text: 'Portfolyo',
    path: '/portfolyo',
  },
  // {
  //   text: 'Blog',
  //   path: '/blog',
  // },
  {
    text: 'CV',
    path: '/files/bilal-ucar-cv.pdf',
  },
  {
    text: 'İletişim',
    path: '/#contact',
  },
];

const Header = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div id="header" className="header">
      <nav>
        <div className="header__toggle">
          <input type="checkbox" onChange={event => setIsChecked(event.currentTarget.checked)} />
          <SvgMenu id="menu-icon" onClick={() => setIsChecked(!isChecked)} />
        </div>
        <ul className={isChecked ? 'header__menu header__menu--open' : 'header__menu'}>
          {menuItems.map(item => (
            <li key={item.path}>
              <Link href={item.path} className="header__menu-item">
                <span>{item.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
