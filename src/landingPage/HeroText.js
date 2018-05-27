import React from 'react'
import './herotext.css';
import SignUpBox from './SignUpBox'
import { connect } from 'react-redux';
import ReduxLogin from './ReduxLogin'
import LogInBox from './LogInBox'

export  class HeroText extends React.Component{

render () {
    if(this.props.display==='landing') {
        return (
            <div className="HeroText">
     <h1>Stash App</h1>
     <p> Being gorgeous with belly side up favor packaging over toy i could pee on this if i had the energy. Sleeps on my head you call this cat food i </p>
          </div>
        );
    } else if (this.props.display==='login'){
        return <ReduxLogin />
    } else if (this.props.display==='register'){
        return <SignUpBox />
    }
}    
}


const mapStateToProps = main => 

 {
return     ({
        display: main.main.display
    });
    
 }
  
  export default connect(mapStateToProps)(HeroText);