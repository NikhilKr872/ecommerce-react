import React, { Component } from 'react'
import addr from "./images/Address.png"
import userImg from "./images/user.jpeg"
import phoneImg from "./images/phone.png"
import emailImg from "./images/emailimg.jpg"
import Header from './Header'
import Footer from "./Footer"
import "./css/user.css"

export default class User extends Component {
    render() {
        return (
            <>
            <Header />
            <div className='user'> 
                <figure className='userprofilefig'>
                    <img src={userImg} alt="User Pic" title="User" className='profileImg'/>
                    <figcaption>John Doe</figcaption>
                </figure>

                <figure className='details'>
                    <img src={emailImg} alt="User Email" title="Email" className='addricons'/>
                    <figcaption>doejohn@example.com</figcaption>
                </figure>

                <figure className='details'>
                    <img src={phoneImg} alt="User Pic" title="Phone" className='addricons'/>
                    <figcaption>+1 202-918-2132</figcaption>
                </figure>
                <figure className='details'>
                    <img src={addr} alt="User Address" title="Address" className='addricons'/>
                    <figcaption>
                        <span>604 S 7th St</span>
                        <span>Wewahitchka, Florida(FL), 32465</span>
                    </figcaption>
                </figure>
                
            </div>
            <Footer />
            </>
        )
    }
}
