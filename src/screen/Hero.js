import React from 'react';
import './Hero.css';
import HeroImg from '../assets/banner.png';
import upTrend from '../assets/trending-up.svg';
import Signup from './Signup';

const Hero = () => {
  return (
    <>
        <div className='hero'>
            <div className='hero-head'>
                <div className='content-head'>
                    <div className='word-cont'>
                        Unlock <button className='btnyour'>your</button> <br/>
                        online growth <br/>
                        Potential <button className='yesContent'><button>Yes</button></button>
                    </div>
                    <div className='btngroup'>
                        <div>
                             <button className='our-product'>Our Product</button>
                         </div>    
                        <div className='playbtn-div'>
                            <button className='play-button'>
                                <span className='bi bi-play-fill' style={{fontSize:"70px", color:"green"}}></span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='content-foot'>
                    <img src={HeroImg} width={520} height={520}/>
                </div>
            </div>
            <div className='hero-foot d-flex-center'>
                <div className='hero-bottom d-flex-center'>
                    <div className='hero-bottom-1 d-flex-center '>
                        <ul className='hero-bottom-content d-flex-center'>
                            <div className='trendup'>
                                <img src={upTrend} width={40} height={40}/>
                            </div>
                            <div className='tc1'>
                                <h4>Drive Your Money to <br/> work smarter than others</h4>
                            </div>
                            <div className='tc2'>
                                <p>A safe and secure investment nedd guided aproach width real time <br/> analytics and risk analysis, we can help you to catch all at once.</p>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            <Signup />
        </div>
    </>
  )
}

export default Hero;