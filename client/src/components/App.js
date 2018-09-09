import React from 'react';
import axios from 'axios';
import LowerSection from './LowerSection';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import style from '../style/App.css';


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      currentexperience: 'wolfencounter9999999',
      imgs: [],
      currentImg: {},
      showVideo: {},

    }
  };

  componentDidMount(){
    this.fetchimgs()
  };

  fetchimgs(){
    axios.get(`/sidebar/experience/${this.state.currentexperience}`)
      .then((data) => {
        let arr = data.data;
        arr[0]['renderItem'] = this._renderVideo.bind(this);
        this.setState( {imgs: arr, currentImg: arr[0]} )
      })
      .catch((err) => {console.error(err)})
  };

  _toggleShowVideo(url) {
    this.state.showVideo[url] = !Boolean(this.state.showVideo[url]);
    this.setState({
      showVideo: this.state.showVideo
    });
  }

  _renderVideo(item) {
    return (
      <div className='image-gallery-image' style={{zIndex:2}}>
        {
          this.state.showVideo[item.embedurl] ?
            <div className='video-wrapper'>
                <a
                  className='close-video'
                  onClick={this._toggleShowVideo.bind(this, item.embedurl)}
                >
                </a>
                <iframe
                  width='480'
                  height='640'
                  src={item.embedurl}
                  frameBorder='0'
                  loop='1'
                >
                </iframe>
            </div>
          :
            <a onClick={this._toggleShowVideo.bind(this, item.embedurl)}>
              <div className='play-button'></div>
              <img src={item.original}/>
            </a>
        }
      </div>
    );
  };

  render(){
    return (
      <div className={style.sidebar}>
        <div>
          <ImageGallery 
              items ={this.state.imgs}
              showNav = {false}
              showThumbnails={false}
              slideInterval={2800}
              autoPlay={false}
              showFullscreenButton={false}
          />
        </div>
        <div className={style.lowersection}>
          <LowerSection />
        </div>
      </div>
    )
  }
} 
export default App;
