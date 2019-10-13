import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Admin from './components/pages/admin/Admin'
import Header from './components/layout/Header'
import About from './components/pages/About'
// import Carousel from './components/pages/home/Carousel'
import SlideShow from './components/pages/home/SlideShow'
import RRCarousel from './components/pages/slider2/Carousel'
// import uuid from 'uuid'
import axios from 'axios';
const base_url = 'http://localhost:8000/'
class App extends React.Component {
  state = {
    activeSlides : [],
    imagesLoaded : false,
  }

  componentDidMount() {
    axios.get(base_url + 'api/activeslides')
    .then(res => 
       this.setState({ 
         activeSlides: res.data.data,
         imagesLoaded : true
      },
        console.log(res.data.data)
       
       )
      )
      // this.startSlideShow();
    }

  updateActiveSlides = () => {
    console.log(this.state.activeSlides)
      axios.get(base_url + 'api/activeslides')
        .then(res => 
          this.setState({ activeSlides : res.data.data  }, () => {
            console.log(this.state.activeSlides, 'here again')
          })
           
          )
    }

  render(){
  return (
    <Router>
    <div className="App">
      <div className="container">
      <Header />
      
    <Route exact path="/" render={(props) => <SlideShow {...props} base_url={base_url} activeSlides={this.state.activeSlides} imagesLoaded={this.state.imagesLoaded}/>}/>
    <Route path="/admin" render={(props) => <Admin {...props} base_url={base_url} updateActveSlides={this.updateActiveSlides} />}/>
    <Route path="/about" component={About}/>
    <Route path="/slider2" render={(props) => <RRCarousel {...props} base_url={base_url} />}/>


      
    </div>
    </div>
    </Router>
  );
}
}

export default App;
