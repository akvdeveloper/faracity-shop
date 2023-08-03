import React from 'react';
import './Signup.css';

const Signup = () => {
  return (
    <>
        <div className='m2 pt3 pb3 bdy' style={{backgroundColor:"#F9FBFA"}}>
            <div className='d-flex-center '>
                <button className='font-size-3 bg-transparent text-green' >Signup Now & Get</button>
            </div>
            <div className='d-flex-center'>
                <div className='d-flex-center ms4' >
                    <span className='font-size-3 mt2'>
                    <h1 style={{marginRight:"-30px"}}>01</h1>
                    </span>
                    <ul className='list-style-none'>
                        <li style={{lineHeight:"0.1"}}>
                            <h2>Early Access</h2>
                        </li>
                        <li>
                            <a>You'll be priorites from <br/> the pool of millions</a>
                        </li>
                    </ul>
                </div>
                <div className='d-flex-center ms4'>
                    <span className='font-size-3 mt2'>
                    <h1 style={{marginRight:"-30px"}}>02</h1>
                    </span>
                    <ul className='list-style-none'>
                        <li style={{lineHeight:"0.1"}}>
                            <h2>Zero Brokerage</h2>
                        </li>
                        <li>
                            <a>You'll be priorites from <br/> the pool of millions</a>
                        </li>
                    </ul>
                </div>
                <div className='d-flex-center ms4'>
                    <span className='font-size-3 mt2'>
                    <h1 style={{marginRight:"-30px"}}>03</h1>
                    </span>
                    <ul className='list-style-none'>
                        <li style={{lineHeight:"0.1"}}>
                            <h2>Zero Processing Charges</h2>
                        </li>
                        <li>
                            <a>You'll be priorites from <br/> the pool of millions</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Signup;