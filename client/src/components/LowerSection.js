import React from 'react';
// import ShareSection from './ShareSection';
import style from '../style/LowerSection.css';
import axios from 'axios';

class LowerSection extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      price: 0
    }
  }
  render(){
    return(
      <div >
        <div className={style.review}>
          <p className={style.price}><span style={{fontWeight:"bold"}}>${`${this.state.price}`}</span> per person</p>
          <p className={style.reviewdetails}>
            ★★★★★ 0 reviews
          </p>
          <button className={style.seeDatesButton}>See dates</button>
        </div>
        {/* <div className={style.dates}>
          Hello from LowerSection Dates Button! */}
          
        {/* </div> */}
        <hr></hr>
        {/* <div>
          <ShareSection />
        </div> */}
      </div>
    )
  }
}

export default LowerSection;