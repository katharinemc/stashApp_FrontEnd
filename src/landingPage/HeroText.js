import React from 'react'
import './herotext.css';
import SignUpBox from './SignUpBox'
import { connect } from 'react-redux';

import LogInBox from './LogInBox'

export  class HeroText extends React.Component{

render () {
    console.log('i a box!', this.props)
    if(this.props.display==='landing') {
        return (
            <div className="HeroText">
     <h1>Stash App</h1>
     <p> Being gorgeous with belly side up favor packaging over toy i could pee on this if i had the energy. Sleeps on my head you call this cat food i </p>
          </div>
        );
    } else if (this.props.display==='login'){
        return <LogInBox />
    } else if (this.props.display==='register'){
        return <SignUpBox />
    }

}    

}


const mapStateToProps = state => ({
    display: state.display
});
  
  export default connect(mapStateToProps)(HeroText);