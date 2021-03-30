import React from 'react';

import SvgHome from './icons/Home';
import SvgHomeFilled from './icons/HomeFilled';
import SvgSuitcase from './icons/Suitcase';
import SvgSuitcaseFilled from './icons/SuitcaseFilled';
import SvgWritingFilled from './icons/WritingFilled';
import SvgWriting from './icons/Writing';
import SvgCv from './icons/Cv';
import SvgCvFilled from './icons/CvFilled';
import SvgContact from './icons/Contact';
import SvgContactFilled from './icons/ContactFilled';
import Link from 'next/link';

const menuItems = [
  {
    text: 'Anasayfa',
    path: '/',
    icon: <SvgHome />,
    iconHover: <SvgHomeFilled />,
  },
  {
    text: 'Portfolyo',
    path: '/portfolyo',
    icon: <SvgSuitcase />,
    iconHover: <SvgSuitcaseFilled />,
  },
  {
    text: 'Blog',
    path: '/blog',
    icon: <SvgWriting />,
    iconHover: <SvgWritingFilled />,
  },
  {
    text: 'CV',
    path: '/files/bilal-ucar-cv.pdf',
    icon: <SvgCv />,
    iconHover: <SvgCvFilled />,
  },
  {
    text: 'İletişim',
    path: '/#contact',
    icon: <SvgContact />,
    iconHover: <SvgContactFilled />,
  },
];

function Header() {
  return (
    <div id="header" className="header">
      <ul className="header__menu">
        {menuItems.map(item => (
          <li key={item.path}>
            <Link href={item.path}>
              <a className="header__menu-item">
                {item.icon} <span>{item.text}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;
