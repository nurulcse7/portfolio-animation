import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import { ThemeContext } from '../../Context/theme';
import Image from './../../assets/logo.png';
import './Header.css';

export const Header = () => {
  const [{ themeName }] = React.useContext(ThemeContext);

  return (
    <div>
      <header className={'header center ' + themeName}>
        <h3>
          <a href='#home' className='link'>
            <span>
              <img src={Image} alt='logo' />
            </span>
            Portfolio
          </a>
        </h3>
        <Navbar />
      </header>
    </div>
  );
};
