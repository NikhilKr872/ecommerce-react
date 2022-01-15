import React, { Component } from 'react'
import cLogo from "./images/companylogo.png"
import {TiSocialFacebook,TiSocialPinterest,TiSocialTwitter,TiSocialYoutube} from "react-icons/ti"
import "./css/footer.css"

export default class Footer extends Component {
    render() {
        return (
            <div className='Footer'>
                <img src={cLogo} className="companylogo" alt='Company Logo'/>
                <div className='d-flex flex-row align-items-center'>Mail us at abc@xyz.com</div>
                <div className='socialmediaicons'>
                    <TiSocialFacebook size={30} title='Facebook' className='footericons'/>
                    <TiSocialTwitter size={30} title='Twitter' className='footericons'/>
                    <TiSocialPinterest size={30} title='Pinterest'className='footericons'/>
                    <TiSocialYoutube size={30} title='Youtube'className='footericons'/>
                </div>
            </div>
        )
    }
}
