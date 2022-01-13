import React, { Component } from 'react'
import cLogo from "./images/companylogo.png"
import "./css/header.css"
import {MdPerson,MdSearch} from "react-icons/md"
import {AiOutlineShoppingCart} from "react-icons/ai"
import { Link } from 'react-router-dom'

export default class Header extends Component {

    constructor(props){
        super(props)
        this.state={search:false}
        this.clearInput=React.createRef()
    }

    toggleSearch=()=>{
        const toggle=this.state.search
        this.setState({search:!toggle})
    }

    clearSearch=(e)=>{
        
        if(e.key==='Enter'){
            this.clearInput.current.value=""
            this.setState({search:false})
        }
    }
 
    render() {
        return (
            <>
            <div className='Header'>
                <img src={cLogo} className="companylogo" alt='Company Logo'/>
                <div className='Nav'>
                <button><Link style={{textDecoration:"none",color:"black"}} to="/">Home</Link></button>

                    <button><Link style={{textDecoration:"none",color:"black"}} to="/review">Reviews</Link></button>

                    <button><a style={{textDecoration:"none",color:"black"}} href="#shop">Shop</a></button>
                </div>
                <div className='iconsparent'>
                   
                   <Link to="/user" style={{textDecoration:"none",color:"black"}}> <MdPerson className='headericons' size={40} title="Profile"/></Link>
                    <MdSearch className='headericons' size={40} title="Search" onClick={this.toggleSearch}/>
                    <AiOutlineShoppingCart className='headericons' size={40} title='Cart'/>
                </div>
            </div>
            {this.state.search?<div className='searchInput'><input type="text" placeholder="Search products" className='inputBox' onKeyPress={this.clearSearch} ref={this.clearInput}/></div>:undefined}
            </>
        )
    }
}
