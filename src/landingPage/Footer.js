import React from 'react'
import './footer.css';
import { connect } from 'react-redux';
import { changeLanding } from '../actions/landingActions'

export class Footer extends React.Component {

changeDisplay(value){
    this.props.dispatch(changeLanding(value))
}

render () {
    return (
        <footer className="landing">
            
        <button type="button" onClick={(e) => this.changeDisplay('login') }>Login</button>
        <span className="projectName" onClick={(e) => this.changeDisplay('landing')}>|</span>
        <button type="button" onClick={(e) => this.changeDisplay('register')}>Register</button> 
      </footer>     
    );
}
 
}

const mapStateToProps = state => ({
    display: state.display
});
  
  export default connect(mapStateToProps)(Footer);