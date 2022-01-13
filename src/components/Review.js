import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'
import "./css/review.css"
import user from "./images/user.jpeg"
import ReactStars from "react-rating-stars-component";

export default class Review extends Component {
    render() {
        return (<>
        <Header />
            <div className='review'>
                <div><h1>Customer Reviews</h1></div>
                <div className="usersReview">
                    <div className='singleUserReview'>
                        <figure>
                            <img src={user} alt="User"/>
                            <figcaption>Lorem Ipsum</figcaption>
                        </figure>
                        <div>
                            <ReactStars count={5} isHalf={true} size={25} edit={false} value={3.5}/>
                        </div>
                        <div className='reviewcontent'>
                            <h3>Dolor Imit</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sollicitudin a nulla nec dignissim. Nunc vitae lobortis turpis. Sed ornare enim ac tempor placerat.</p>
                        </div>

                    </div>

                    <div className='singleUserReview'>
                        <figure>
                            <img src={user} alt="User"/>
                            <figcaption>Lorem Ipsum</figcaption>
                        </figure>
                        <div>
                            <ReactStars count={5} isHalf={true} size={25} edit={false} value={2.5}/>
                        </div>
                        <div className='reviewcontent'>
                            <h3>Dolor Imit</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sollicitudin a nulla nec dignissim. Nunc vitae lobortis turpis. Sed ornare enim ac tempor placerat.</p>
                        </div>

                    </div>

                    <div className='singleUserReview'>
                        <figure>
                            <img src={user} alt="User"/>
                            <figcaption>Lorem Ipsum</figcaption>
                        </figure>
                        <div>
                            <ReactStars count={5} isHalf={true} size={25} edit={false} value={4}/>
                        </div>
                        <div className='reviewcontent'>
                            <h3>Dolor Imit</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sollicitudin a nulla nec dignissim. Nunc vitae lobortis turpis. Sed ornare enim ac tempor placerat.</p>
                        </div>

                    </div>

                    <div className='singleUserReview'>
                        <figure>
                            <img src={user} alt="User"/>
                            <figcaption>Lorem Ipsum</figcaption>
                        </figure>
                        <div>
                            <ReactStars count={5} isHalf={true} size={25} edit={false} value={3}/>
                        </div>
                        <div className='reviewcontent'>
                            <h3>Dolor Imit</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sollicitudin a nulla nec dignissim. Nunc vitae lobortis turpis. Sed ornare enim ac tempor placerat.</p>
                        </div>

                    </div>

                    <div className='singleUserReview'>
                        <figure>
                            <img src={user} alt="User"/>
                            <figcaption>Lorem Ipsum</figcaption>
                        </figure>
                        <div>
                            <ReactStars count={5} isHalf={true} size={25} edit={false} value={3}/>
                        </div>
                        <div className='reviewcontent'>
                            <h3>Dolor Imit</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sollicitudin a nulla nec dignissim. Nunc vitae lobortis turpis. Sed ornare enim ac tempor placerat.</p>
                        </div>

                    </div>

                    <div className='singleUserReview'>
                        <figure>
                            <img src={user} alt="User"/>
                            <figcaption>Lorem Ipsum</figcaption>
                        </figure>
                        <div>
                            <ReactStars count={5} isHalf={true} size={25} edit={false} value={3.5}/>
                        </div>
                        <div className='reviewcontent'>
                            <h3>Dolor Imit</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sollicitudin a nulla nec dignissim. Nunc vitae lobortis turpis. Sed ornare enim ac tempor placerat.</p>
                        </div>

                    </div>

                    <div className='singleUserReview'>
                        <figure>
                            <img src={user} alt="User"/>
                            <figcaption>Lorem Ipsum</figcaption>
                        </figure>
                        <div>
                            <ReactStars count={5} isHalf={true} size={25} edit={false} value={1.5}/>
                        </div>
                        <div className='reviewcontent'>
                            <h3>Dolor Imit</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sollicitudin a nulla nec dignissim. Nunc vitae lobortis turpis. Sed ornare enim ac tempor placerat.</p>
                        </div>

                    </div>

                    <div className='singleUserReview'>
                        <figure>
                            <img src={user} alt="User"/>
                            <figcaption>Lorem Ipsum</figcaption>
                        </figure>
                        <div>
                            <ReactStars count={5} isHalf={true} size={25} edit={false} value={4}/>
                        </div>
                        <div className='reviewcontent'>
                            <h3>Dolor Imit</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sollicitudin a nulla nec dignissim. Nunc vitae lobortis turpis. Sed ornare enim ac tempor placerat.</p>
                        </div>

                    </div>

                    <div className='singleUserReview'>
                        <figure>
                            <img src={user} alt="User"/>
                            <figcaption>Lorem Ipsum</figcaption>
                        </figure>
                        <div>
                            <ReactStars count={5} isHalf={true} size={25} edit={false} value={2}/>
                        </div>
                        <div className='reviewcontent'>
                            <h3>Dolor Imit</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sollicitudin a nulla nec dignissim. Nunc vitae lobortis turpis. Sed ornare enim ac tempor placerat.</p>
                        </div>

                    </div>

                    <div className='singleUserReview'>
                        <figure>
                            <img src={user} alt="User"/>
                            <figcaption>Lorem Ipsum</figcaption>
                        </figure>
                        <div>
                            <ReactStars count={5} isHalf={true} size={25} edit={false} value={3.5}/>
                        </div>
                        <div className='reviewcontent'>
                            <h3>Dolor Imit</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sollicitudin a nulla nec dignissim. Nunc vitae lobortis turpis. Sed ornare enim ac tempor placerat.</p>
                        </div>

                    </div>
                </div>
                
                
            </div>
            <Footer />
            </>
        )
    }
}
