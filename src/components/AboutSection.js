import React from 'react'
import home1 from "../img/home1.jpg"

export default function AboutSection() {
    return (
        <div>
            <div className='description'>
                <div className='title'>
                    <div className='hide'>
                        <h2>We work to make</h2>
                    </div>
                    <div className='hide'>
                        <h2>
                            your <span>dreams</span> cpme
                        </h2>
                    </div>
                    <div className='hide'>
                        <h2>true</h2>
                    </div>
                </div>
                <p>Contact me on etc etc</p>
            </div>
            <img src={home1} alt="home1" />
        </div>
    )
}
