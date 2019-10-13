import React from 'react'

const Slide = ( props ) => {
    // console.log(props.url + '  I am here')
    // const styles = {
    //     backgroundImage: `url(${props.url})`,
    //     backgroundSize: 'cover',
    //     backgroundRepeat: 'no-repeat',
    //     backgroundPosition: 'center',
        
    //   }
    //   return <div className="image-slide" style={styles}>    
      
    //   </div>
	
	return (
		<div className="image-slide" >
            <img className="slideimg" src={props.slide.imageurl} onMouseDown={ props.stopShow } onMouseUp={ props.restartShow } alt="" style={{maxWidth:'100%', maxHeight: 'auto'}}/>
            <div className="imageLeftSide" onClick={props.goToPrevSlide}></div>
            <div className="imageRightSide" onClick={props.goToNextSlide}></div>
            <div><p className="legend">{props.slide.description} </p></div>
        </div>
	);
}

export default Slide;