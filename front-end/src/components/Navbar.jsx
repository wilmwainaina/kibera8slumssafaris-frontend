import React from 'react';
import { AiOutlineMenu, AiOutlineHome, AiOutlinePhone, AiOutlineBook } from 'react-icons/ai';
import { BsCoin } from 'react-icons/bs';
import logosvg from '/home/wil/Desktop/phase-5/project/front-end/src/assets/logo.svg';

const iconsize = 20;

function Navbar() {
  return (
    <div className='w-screen h-[80px] z-10 bg-[rgb(255,255,255)] fixed border-b-2 border-black shadow-lg navbar'>
      
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <div className='pl-8'>
              <img src={logosvg} alt='logo' className='w-20' />
          </div>

          <div className='pl-72'>
            
            <ul className='flex p-8'>
              <NavItem icon={<AiOutlineHome size={iconsize} />} to='/' label='Home' />
              <NavItem icon={<BsCoin size={iconsize} />} to='/donations' label='Donations' />
              <NavItem icon={<AiOutlineBook size={iconsize} />} to='/about' label='AboutUs' />
              <NavItem icon={<AiOutlinePhone size={iconsize} />} to='/contacts' label='Contacts' />
            </ul>
          </div>
        </div>

        <div className='flex pr-4'>
          <button className='w-20 bg-[#027884] text-white border-none rounded-md py-2 px-4 mt-4 cursor-pointer m-4'>
            sign in</button>
        </div>

        <div className='md:hidden'>
          <AiOutlineMenu className='w-9' />
        </div>
      </div>
      
    </div>
  );
}

// Navigation Item Component
function NavItem({ icon, to, label }) {
  return (
    <li className={location.pathname === to}>
      <div className='flex items-center'>
        {icon}
        <a href={to} className='flex'>
          {label}
        </a>
      </div>
    </li>
  );
}

export default Navbar;
