import React from 'react';
import './Contact.css';
import { VscGithub } from 'react-icons/vsc';
import { CgMail } from 'react-icons/cg';
import { BsInstagram, BsFillTelephoneFill } from 'react-icons/bs';
import { ThemeContext } from '../../Context/theme';

import { FaLinkedin } from 'react-icons/fa';
export const Contact = () => {
  const [{ themeName }] = React.useContext(ThemeContext);

  return (
    <>
      <div className='section'>
        <h2 className='section__title' data-aos='fade-right'>
          Get in <span className='different'>Touch</span>
        </h2>
        <div className='contactMain'>
          <div
            className={'contactcontainer ' + themeName}
            data-aos='fade-right'
          >
            <a
              href='https://www.linkedin.com/in/nurulbd75/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedin className='linkedin' />
            </a>
            <a
              href='https://github.com/nurulcse7'
              target='_blank'
              rel='noreferrer'
            >
              <VscGithub className='github' />
            </a>
            <a
              href='mailto:nurul.cse7@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              <CgMail className='email' />
            </a>
            <a href='tel:+8801601915577' target='_blank' rel='noreferrer'>
              <BsFillTelephoneFill className='phone' />
            </a>
          </div>
          <div className='mailNumber' data-aos='fade-right'>
            <div>
              <span>
                <CgMail className='email' />
              </span>
              <span>
                <p>nurul.cse7@gmail.com</p>
              </span>
            </div>
            <div className='iconsCont'>
              <span>
                <BsFillTelephoneFill className='phone' />
              </span>
              <span>
                <p>+88 01601915577</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
