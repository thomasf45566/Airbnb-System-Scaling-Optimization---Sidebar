import React from 'react';
import ShareSection from './ShareSection';
import style from '../style/LowerSection.css';

class LowerSection extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      price: 175,
      reviewcount: 100,
    }
  };
  render(){
    return(
      <div className={style.lowersection}>
        <div className={style.reviewsection}>
          <p className={style.price}>
            <span style={{fontWeight:"bold"}}>${`${this.state.price}`}</span> per person
            <br/>
            <span className={style.reviewdetails}>
              ★★★★★ {this.state.reviewcount} reviews
            </span>
          </p>
            <div className={style.buttonContainer}>
              <button className={style.seeDatesButton}>See dates</button>
            </div>
        </div>
        <div>
          <ShareSection />
        </div>
      </div>
    )
  }
};

export default LowerSection;