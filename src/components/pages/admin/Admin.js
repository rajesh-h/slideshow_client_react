import React from 'react';
import axios from 'axios';


import Slides from './Slides';
import AddSlide from './AddSlide';


class Admin extends React.Component {
  base_url = this.props.base_url
  state = {
    slides: [
    ]
    
  }



  componentDidMount() {
    axios.get(this.base_url + 'api/slides')
    .then(res => 
         this.setState({ slides: res.data.data},
        // console.log(res.data.data)
         )
        )
  }
  
  //Delete Todo
  delSlide = (id) => (
    axios.delete(this.base_url + `api/slide/${id}`)
    .then (res => this.setState({ 
      slides: [...this.state.slides.filter(slide => 
        slide.id !== id)]}))    
  )

  editSlide = (id, title, imageurl, description,  ) => {
    // this.setState({ isEdit : true})
     console.log(id, title, imageurl, description)
    axios.patch(this.base_url + `api/slide/${id}`, { 
       "title": title, 
       "imageurl" : imageurl,  
       "description" : description
  
    })
    .then(res => this.setState(
      { slides: this.state.slides.map(slide => {
      if (slide.id === id) {
        slide = {...res.data.data, id:id}
        
       }
       return slide;
    })},
    this.props.updateActveSlides()
       
    )
    
    )
    .catch(err => (
      console.log(err)
    ) )
    // setTimeout(()=> this.props.updateActveSlides(), 2000)
    
    
  }

  addSlide = (title, imageurl, description) => {
    // console.log(title, imageurl, description)
    axios.post(this.base_url + 'api/slide', { 
       "title": title, 
       "imageurl" : imageurl,  
       "description" : description
  
    })
    .then(res => this.setState({         
        slides: [({ id: res.data.id ,...res.data.data}), ...this.state.slides ] //Append original list later as a second argument so the latest added entry stays on top
    }))
    
    
  }

  render(){
  return (
    
    <div className="Admin">      
      <h3>Manage Slides</h3>
      <p style={{color : 'red'}}>In Real world This page will be accessible only after succesful Authentication</p>
      <hr/>      
      <AddSlide addSlide={this.addSlide}/>
      <hr/>
      <br/>
      <Slides slides={this.state.slides} delSlide={this.delSlide} editSlide={this.editSlide} isEdit={this.state.isEdit}/>

      
    
    </div>
    
  );
}
}

export default Admin;
