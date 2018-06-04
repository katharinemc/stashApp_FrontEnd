
import React from 'react'
import { connect } from 'react-redux';

import {setFooterExpand, changeDisplay} from '../actions/landingActions'
export class MainFooter extends React.Component {
    expandFooter(){
        this.props.dispatch(setFooterExpand(!this.props.expandFooter))
    }

render () {
    return (

        <span className="main ">     
        <button type="button" onClick={(e) => this.props.dispatch(changeDisplay('products')) }>Products</button>
        <button className="projectName" onClick={(e) => this.expandFooter()}>^</button>
        <button type="button" onClick={(e) => this.props.dispatch(changeDisplay('looks'))}>Looks</button> 
      </span> 
    );
}
 
}

const mapStateToProps = main => ({
    display: main.main.display,
    expandFooter: main.main.expandFooter
});
  
  export default connect(mapStateToProps)(MainFooter);