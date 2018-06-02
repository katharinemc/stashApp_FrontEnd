import React  from 'react';
import './expandedfooter.css'
import {connect} from 'react-redux'
import { setEditing } from '../actions/dashActions';
import {setFooterExpand} from '../actions/landingActions'
import { logOutSequence } from '../actions/auth';
export  class ExpandedFooter extends React.Component {

  addNew(status) {
    this
      .props
      .dispatch(setEditing(status))

    this.props.dispatch(setFooterExpand('false'))
    }

logOut() {
  this.props.dispatch(logOutSequence(this.props.dispatch))
}


    render() {

if(this.props.requestedUser === this.props.currentUser){      return (
        <div >
            
            <ul >
              
<li onClick={()=>this.addNew('addProduct') } >Add Product</li>
<li onClick={()=>this.addNew('addLook') } >Add Look</li>
<li onClick={()=>this.logOut() }>Log Out  </li>

                </ul>

            </div>

      );}
      else{
        return (
<li onClick={()=>this.logOut() }>Log Out  </li>


        )
      }
    }
  }
  

  const mapStateToProps = main => ({
    editing: main.dash.editing, requestedUser: main.dash.requestedUser,
    currentUser: main.auth.currentUser,
  
})

export default connect(mapStateToProps)(ExpandedFooter)