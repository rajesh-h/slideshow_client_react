import React, { Component } from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './CustomStyle.css'

import axios from 'axios'

class RRCarousel extends Component {
    base_url = this.props.base_url
		
    state = {
        activeSlides : [],
        imagesLoaded : false,
        currentImageIndex: 0
        
    }; 


    componentDidMount() {
        axios.get(this.base_url + 'api/activeslides')
        .then(res => 
             this.setState({ 
                 activeSlides: res.data.data,
                 imagesLoaded : true
            },
            //  console.log(res.data.data)
             
             )
            )
           
      }

    render() {
        return (
            this.state.imagesLoaded ? 
            <Carousel infiniteLoop autoPlay swipeable={true}>
                               
                {this.state.activeSlides.map((value, index) => {
                    return <div key={index}>
                     <img src={value.imageurl} alt=""/>
                     <p className="legend">{value.description} </p>
                    </div>
                })}
                
            </Carousel>
				:
				<div>
					<h1>Slideshow Loading in progress</h1>
				</div>
        )
    }
}

export default RRCarousel
