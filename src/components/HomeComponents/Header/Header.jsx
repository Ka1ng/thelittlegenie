import React from 'react'
import "./Header.css"
import Fade from 'react-reveal/Fade';

export default function Header() {
    return (
        <div className='header'>
            <div className="headerText">
                <Fade top duration={2000}>
                    <div className="logo">Feel Your Authenticity.</div>
                </Fade>
                <Fade right delay={2000} duration={2000} distance={"200px"}>
                    <div className="logoSubText">Be confident what you are holding</div>
                </Fade>
                <a href="/charles&keith"><button>Charles & Keith</button></a> 
                <a href="/pedro"><button>Pedro</button></a>
            </div>
        </div>
    )
}
