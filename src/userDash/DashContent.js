import React from 'react'
import '../landingPage/herotext.css';
import { connect } from 'react-redux';


export  class DashContent extends React.Component{

render () {
    console.log('i a box!', this.props)
    if(this.props.display==='dash') {
        return (
            <div >
     <h1>Stash App</h1>
     <p> Being gorgeous with belly side up favor packaging over toy i could pee on this if i had the energy. Sleeps on my head you call this cat food i </p>
          </div>
        );
    } else if (this.props.display==='products'){
        return 'products'
    } else if (this.props.display==='looks'){
        return 'looks'
    }

}    

}


const mapStateToProps = state => ({
    display: 'dash'
});
  
  export default connect(mapStateToProps)(DashContent);