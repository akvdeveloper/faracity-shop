import React from 'react';
import './Header.css';
const Header = () => {
  return (
    <>
        <nav className='d-flex-space-between'>
            <div className='font-size-3'>Fractify</div>
            <ul className='d-flex-space-between list-style-none  font-size-2'>
                <li className='ms7'>
                    <a className='text-decoration-none text-black' href='#'>Products</a>
                </li>
                <li className='ms7'>
                    <a className='text-decoration-none text-black'  href='#'>Invest</a>
                </li >
                <li className='ms7'>
                    <a className='text-decoration-none text-black'  href='#'>Community</a>
                </li>
                <li className='ms7'>
                    <a className='text-decoration-none text-black'  href='#'>About</a>
                </li>    
            </ul>
            <div><button className='early-access'>Early Access</button></div>
        </nav>
    </>
  )
}

export default Header;