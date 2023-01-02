import React from 'react';
import './Footer.css';
import { ThemeContext } from '../../Context/theme';

export const Footer = () => {
  const [{ themeName }] = React.useContext(ThemeContext);

  return (
    <>
      <div className={'section ' + themeName}>
        <a href='/' rel='noreferrer' target='_blank'>
          <div className='footerBox'>
            <h3 className='footer'>
              Made with{' '}
              <span style={{ color: `red`, background: `transparent` }}>❤</span>{' '}
              By Shreyas
            </h3>
          </div>
        </a>
      </div>
    </>
  );
};
