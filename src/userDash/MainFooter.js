
import React from 'react'
import { connect } from 'react-redux';

import {setFooterExpand, changeDisplay} from '../actions/landingActions'
export class MainFooter extends React.Component {
    expandFooter(){
        console.log('boom!')
        debugger
        this.props.dispatch(setFooterExpand(!this.props.expandFooter))
    }

render () {
    return (

        <span className="main ">     
        <button name="showProducts" type="button" onClick={(e) => this.props.dispatch(changeDisplay('products')) }>Products</button>
        <button name="showMenu" className="projectName" onClick={(e) => this.expandFooter()}><i className="fas fa-chevron-circle-up"></i></button>
        <button name="showLooks" type="button" onClick={(e) => this.props.dispatch(changeDisplay('looks'))}>Looks</button> 
      </span> 
    );
}
 
}

const mapStateToProps = main => ({
    display: main.main.display,
    expandFooter: main.main.expandFooter
});
  
  export default connect(mapStateToProps)(MainFooter);