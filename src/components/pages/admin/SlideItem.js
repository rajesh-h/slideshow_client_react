import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Slides.css'

export class SlideItem extends Component {

    //Styles
    state = {
        title : this.props.slide.title,
        imageurl : this.props.slide.imageurl,
        description : this.props.slide.description,
        isEdit: false
      }

    selectEdit = (id) => (
        this.setState({ isEdit : true })         
      )

    saveSlide = (id) => {
        this.props.editSlide(
            id, 
            this.state.title,
            this.state.imageurl,
            this.state.description,
            )
        this.setState({ isEdit : false })                         
    }

    cancelEdit = (id) => (
        this.setState({             
            isEdit : false 
        })         
      )
    
    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    });

    render() {
        const { id, title, imageurl, description } = this.props.slide;
        return (            
            
                 this.state.isEdit ?
                
                 <tr key={id}>
                    <td>{id}</td>
                    <td>
                        <input type="text" 
                            name="title" 
                            style= {{ flex:'10', padding: '5px'}}                
                            value={this.state.title}
                            onChange={this.onChange}
                        />
                    </td>
                    <td>
                        <input type="text" 
                            name="imageurl" 
                            style= {{ flex:'10', padding: '5px'}}                
                            value={this.state.imageurl}
                            onChange={this.onChange}
                        />
                    </td>
                    <td>
                        <input type="text" 
                            name="description" 
                            style= {{ flex:'10', padding: '5px'}}                
                            value={this.state.description}
                            onChange={this.onChange}
                        />
                    </td>
                    <td>
                        <button  onClick={this.saveSlide.bind(this, id)} style={{ cursor: 'pointer', color: 'blue'}}>Save</button>
                        {`  `}
                        <button  onClick={this.cancelEdit.bind(this, id)} style={{ cursor: 'pointer', color: 'green'}}>Cancel</button>             
                    </td>
                </tr>
              

                :

                <tr key={id}>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td><img src={imageurl} alt="" style={{height: '50px', width: 'auto'}}/></td>
                    <td>{description}</td>
                    <td>
                        <button  onClick={this.selectEdit.bind(this, id)} style={{ cursor: 'pointer', color: 'blue'}}>Edit</button>
                        {`  `}
                        <button  onClick={this.props.delSlide.bind(this, id)} style={{ cursor: 'pointer', color: 'red'}}>Delete</button>   
                                  
                    </td>
                </tr>
                
            
            
        )
    }
}




//PropTypes
SlideItem.propTypes = {
    slide: PropTypes.object.isRequired   
}
export default SlideItem
