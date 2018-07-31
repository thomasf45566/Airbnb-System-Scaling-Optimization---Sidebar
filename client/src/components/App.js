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
      currentImg: {},
      showVideo: {},

    }
  };

  componentDidMount(){
    this.fetchimgs()
  //   this.setState(prevState => ({
  //     imgs: {
  //         ...prevState.jasper,
  //         name: 'something'
  //     }
  // }))
  };

  fetchimgs(){
    axios.get(`/sidebar/${this.state.currentexperience}`)
      .then((data) => {
        console.log('got data: ', data.data)
        let arr = data.data;
        console.log(arr[0]);
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

    // if (this.state.showVideo[url]) {
    //   if (this.state.showPlayButton) {
    //     this.setState({showGalleryPlayButton: false});
    //   }

    //   if (this.state.showFullscreenButton) {
    //     this.setState({showGalleryFullscreenButton: false});
    //   }
    // }
  }

  _renderVideo(item) {
    return (
      <div className='image-gallery-image' style={{zIndex:2}}>
        {
          this.state.showVideo[item.embedUrl] ?
            <div className='video-wrapper'>
                <a
                  className='close-video'
                  onClick={this._toggleShowVideo.bind(this, item.embedUrl)}
                >
                </a>
                <iframe
                  width='480'
                  height='640'
                  src={item.embedUrl}
                  frameBorder='0'
                  loop='1'
                  // allowFullScreen
                >
                </iframe>
            </div>
          :
            <a onClick={this._toggleShowVideo.bind(this, item.embedUrl)}>
              <div className='play-button'></div>
              <img src={item.original}/>
              {/* {
                item.description &&
                  <span
                    className='image-gallery-description'
                    style={{right: '0', left: 'initial'}}
                  >
                    {item.description}
                  </span>
              } */}
            </a>
        }
      </div>
    );
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
