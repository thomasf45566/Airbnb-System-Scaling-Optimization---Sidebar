import React from 'react';
import axios from 'axios';
import LowerSection from './LowerSection';
import ShareSection from './ShareSection';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import style from '../style/App.css';


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      currentexperience: 'wolfencounter',
      imgs: [],
      currentImg: {}
    }
  };

  componentDidMount(){
    this.fetchimgs()
  };

  fetchimgs(){
    axios.get(`/sidebar/${this.state.currentexperience}`)
      .then((data) => {
        console.log('got data: ', data)
        this.setState( {imgs: data.data, currentImg: data.data[0]} )
      })
      .catch((err) => {console.error(err)})
  };

  render(){
    console.log('style: ', style)
    return (
      <div className={style.sidebar}>
        {/* <h1 
          className={style.headertest}
        >{this.state.currentexperience}</h1> */}
        <div>
          <ImageGallery 
              items ={this.state.imgs}
              showNav={true}
              showThumbnails={false}
              slideInterval={2000}
              autoPlay={true}
          />
        </div>
        <div className={style.lowersection}>
          <LowerSection />
        </div>
        <hr></hr>
        <div>
          <ShareSection />
        </div>
      </div>
    )
  }
} 
export default App;
