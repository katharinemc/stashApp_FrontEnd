
import React from 'react'
import '../landingPage/footer.css';
import { connect } from 'react-redux';

import {setFooterExpand} from '../actions/landingActions'
export class MainFooter extends React.Component {
    changeDisplay(){
        this.props.dispatch(setFooterExpand(!this.props.expandFooter))
    }

render () {
    return (

        <span className="main">     
        <button type="button" onClick={(e) => this.changeDisplay('products') }>Products</button>
        <button className="projectName" onClick={(e) => this.changeDisplay()}>^</button>
        <button type="button" onClick={(e) => this.changeDisplay('looks')}>Looks</button> 
      </span> 
    );
}
 
}

const mapStateToProps = main => ({
    display: main.main.display,
    expandFooter: main.main.expandFooter
});
  
  export default connect(mapStateToProps)(MainFooter);