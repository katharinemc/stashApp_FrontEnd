import React  from 'react';
import './expandedfooter.css'
import {connect} from 'react-redux'
import { setEditing } from '../actions/dashActions';

export  class ExpandedFooter extends React.Component {

  changeDisplay(status) {
    this
      .props
      .dispatch(setEditing(status))
  }



    render() {

      return (
        <div>
            
            <ul>
<li onClick={()=>this.changeDisplay(!this.props.editing) } >Add Product</li>
<li>Add Look</li>
<li>Log Out</li>

                </ul>

            </div>

      );
    }
  }
  

  const mapStateToProps = main => ({
    editing: main.dash.editing, 
})

export default connect(mapStateToProps)(ExpandedFooter)