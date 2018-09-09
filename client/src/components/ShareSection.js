import React from 'react';
import style from '../style/ShareSection.css'

class ShareSection extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className={style.container}>
        <a className={style.socialmediabutton} target="_blank" title="follow AirBNB on Facebook" href="http://www.facebook.com/airbnb">
          <img width='12' height='25' alt="follow AirBNB on Facebook" src="https://www.bikethomson.com/wp-content/themes/bike_thomson/images/fb.png" />
        </a>
        <a className={style.socialmediabutton} target="_blank" title="follow AirBNB on Twitter" href="http://www.twitter.com/airbnb">
          <img width='25' height='20' alt="follow me on Twitter" src="http://winthropgroup.com/do-not-enter-or-modify-or-erase/site-theme/img/twitter-dark-grey.png" />
        </a>
        <a className={style.mailbutton} target="_blank" title="mail this" href="http://www.gmail.com">
          <img style={{width:25, height:28}} alt="mail this" 
            src="https://freeiconshop.com/wp-content/uploads/edd/mail-var-solid.png" 
          />
        </a>
        <div className={style.save}>
          Save 	♡
        </div>
      </div>
    )
  }
}

export default ShareSection;