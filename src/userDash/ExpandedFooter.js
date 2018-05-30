import React  from 'react';
import './expandedfooter.css'
import {connect} from 'react-redux'
import { setEditing } from '../actions/dashActions';
import {setFooterExpand} from '../actions/landingActions'
import { logOutSequence } from '../actions/auth';
export  class ExpandedFooter extends React.Component {

  addProduct(status) {
    this
      .props
      .dispatch(setEditing(status))

    this.props.dispatch(setFooterExpand('false'))
    }

logOut() {
  this.props.dispatch(logOutSequence(this.props.dispatch))
}


    render() {

      return (
        <div >
            
            <ul >
<li onClick={()=>this.addProduct(!this.props.editing) } >Add Product</li>
<li>Add Look</li>
<li onClick={()=>this.logOut() }>Log Out  </li>

                </ul>

            </div>

      );
    }
  }
  

  const mapStateToProps = main => ({
    editing: main.dash.editing, 
})

export default connect(mapStateToProps)(ExpandedFooter)