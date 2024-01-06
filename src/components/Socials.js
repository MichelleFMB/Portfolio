import React, { useContext } from 'react';
import { CursorContext } from '../context/CursorContext';
import { ImLinkedin } from 'react-icons/im';
import { AiFillInstagram, AiFillGithub } from 'react-icons/ai';

const Socials = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className='hidden xl:flex ml-24'
    >
      <ul className='flex gap-x-4'>
        <li>
          <a href='https://www.linkedin.com/in/michelle-moreno-best-1ba33b297' target='_blank' rel='noreferrer'>
            <ImLinkedin size={25} />
          </a>
        </li>
        <li>
          <a href='http://www.instagram.com' target='_blank' rel='noreferrer'>
            <AiFillInstagram size={25} />
          </a>
        </li>
        <li>
          <a href='https://github.com/MichelleFMB' target='_blank' rel='noreferrer'>
            <AiFillGithub size={25} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;