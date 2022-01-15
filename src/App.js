import './App.css';
import ReactStars from "react-rating-stars-component";
import Loader from './components/Loader';
import React, { Component } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Error from './components/Error';
import {CgMathPlus,CgMathMinus} from "react-icons/cg"


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      recieved: false,
      error: false,
      descArr: Array(21).fill(false),
      stockArr:Array(21).fill(0),
      yourCart:0

    }
  }
 
  componentDidMount = () => {
    this.getData()
   
  }

  set = (pData) => {
    pData.forEach((ele)=>{
      let tempArr=this.state.stockArr
      tempArr[ele.id]=ele.rating.count
      this.setState({stockArr:tempArr})
    })
    this.setState({ products: pData, recieved: true })

  }

  getData = async () => {
    try {
      const pBuffer = await fetch("https://fakestoreapi.com/products")
      const pData = await pBuffer.json()
      this.set(pData)

    }
    catch (err) {
      console.error(err)
      this.setState({ error: true })
    }
  }

  renderDisc = (id) => {
    const tempArr = this.state.descArr
    tempArr[id] = !tempArr[id]
    this.setState({ descArr: tempArr })
  }

  categoriesFunc = async (id) => {

    this.setState({ recieved: false })
    if (id.target.value === 'All') {
      this.getData()
      return;
    }
    try {
      const buffer = await fetch(`https://fakestoreapi.com/products/category/${id.target.value}`)
      const data = await buffer.json()
      this.set(data)
    }
    catch (err) {
      console.log(err)
    }
  }

  // addToCart=(id)=>{
  //   let tempArr=this.state.stockArr
  //   if(tempArr[id]===0){
  //     return;
  //   }
  //   tempArr[id]--;
  //   this.setState({stockArr:tempArr,yourCart:this.state.yourCart+1})
  // }

  // removeFromCart=(id)=>{
  //   if(this.state.yourCart===0){
  //     return;
  //   }
  //   let tempArr=this.state.stockArr
  //   tempArr[id]++;
  //   this.setState({stockArr:tempArr,yourCart:this.state.yourCart-1}) 
  // }

  render() {

    return (
      <>
        <Header />
        <Main />

        <div className='dropdown'>
          
          <label>Categories
            <select onChange={this.categoriesFunc}>
              <option value="All">All</option>
              <option value="electronics"> Electronics
              </option>
              <option value="jewelery"> Jewelery
              </option>
              <option value="men's clothing"> Men's clothing
              </option>
              <option value="women's clothing"> Women's clothing
              </option>
            </select>
          </label>
        </div>
        {this.state.error ? <Error /> : !this.state.recieved ? <Loader /> : (<div className='d-flex flex-row flex-wrap justify-content-between align-items-center products' id="shop">

          {
            this.state.products.map((prod) => {
              return (<div key={prod.id} className="singlep d-flex flex-column align-items-center justify-content-center text-center bg-light p-3 m-2 shadow bg-white rounded">
                <figure className='m-0'>
                  <img src={prod.image} alt={prod.title} title={prod.title} style={{width:"150px",height:"150px"}}/>
                  <figcaption className='font-weight-bold h-50'>{prod.title}</figcaption> 
                </figure>
                <div className='text-center'><ReactStars count={5} value={prod.rating.rate} size={25} isHalf={true} edit={false} /></div>
                <div style={{fontWeight:"700"}} className='text-center'>${prod.price}</div>
                <div className='d-flex flex-column justify-content-center'>
                  {this.state.stockArr[prod.id]===0?<div className='text-danger' >Out of Stock</div>:<div>Item in Stock</div>}
                  <span>
                   <CgMathMinus/> {this.state.stockArr[prod.id]}<CgMathPlus/>
                  </span>
                </div>

                <button onClick={() => { this.renderDisc(prod.id) }} className='btn btn-light btn-outline-dark'>Description</button>
                {this.state.descArr[prod.id] ? <p className='text-center'>{prod.description}</p> : undefined}

              </div>)
            })
          }
        </div>)}

        <Footer />
      </>
    )
  }
}



