import React, { Component } from 'react'
import "./css/main.css"
import offer1 from "./images/offer1.jpg"
import offer2 from "./images/offer2.jpg"
import offer3 from "./images/offer3.jpg"
import offer4 from "./images/offer4.jpg"
import offer5001 from "./images/500pxoffer1.png"
import offer5002 from "./images/500pxoffer2.png"
import offer5003 from "./images/500pxoffer3.jpg"
import offer5004 from "./images/500pxoffer4.jpg"
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';



export default class Main extends Component {
    constructor(props){
        
        super(props)

        this.state={
           width:window.innerWidth
        }

        

        this.arr=[offer1,offer2,offer3,offer4]
        this.smallScreenArr=[offer5001,offer5002,offer5003,offer5004]
    }

    componentDidMount=()=>{
       this.interval=setInterval(() => {
           this.setState({width:window.innerWidth})
       }, 1000);
    }
   
    componentWillUnmount=()=>{
        clearInterval(this.interval)
    }
    render() {
        if(this.state.width>570){

            return (
                <div className="main">
                   <Slide>
                       {
                           this.arr.map((image,index)=>{
                               return(<a href="#shop" key={index}> <img src={image} alt="awesome offer" className='offerimg'/></a>)
                           })
                       }
                   </Slide>
                </div>
            )
        }
        else{
            return(
                <div className='main'>
                     <Slide>
                       {
                           this.smallScreenArr.map((image,index)=>{
                               return(<a href="#shop" key={index}> <img src={image} alt="awesome offer" className='offerimg'/></a>)
                           })
                       }
                   </Slide>

                </div>
            )
        }
    }
}
