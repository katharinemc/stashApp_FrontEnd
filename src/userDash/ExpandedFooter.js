import React from 'react';
import {connect} from 'react-redux'
import {setEditing} from '../actions/dashActions';
import {Link} from "react-router-dom";
import {setFooterExpand} from '../actions/landingActions'
import {logOutSequence} from '../actions/auth';
import {setRequestedUser} from "../actions/dashActions";

export class ExpandedFooter extends React.Component {

  addNew(status) {
    this
      .props
      .dispatch(setEditing(status))

    this
      .props
      .dispatch(setFooterExpand('false'))
  }

  logOut() {
    this
      .props
      .dispatch(logOutSequence(this.props.dispatch))
  }

  render() {
    console.log('this', this.props.location)
    if (this.props.requestedUser === this.props.currentUser) {
      return (
        <div >

          <ul >

            <li onClick={() => this.addNew('addProduct')}>Add Product</li>
            <li onClick={() => this.addNew('addLook')}>Add Look</li>
            <li onClick={() => this.logOut()}>Log Out
            </li>

          </ul>

        </div>

      );
    } else if (this.props.authToken != null) {
      return (
        <ul>
          <li
            onClick={() => this.props.dispatch(setRequestedUser(this.props.currentUser))}>
            <Link to ={`/users/${this.props.currentUser}`}>Show my Stuff </Link>
            </li>
          <li onClick={() => this.logOut()}>Log Out
          </li>
        </ul>
      )
    } else {
      return (
        <ul>
          <li>
            <Link to={`/`}>
              Home
            </Link>
          </li>
        </ul>
      )
    }
  }
}

const mapStateToProps = main => ({editing: main.dash.editing, currentUser: main.auth.currentUser, requestedUser: main.dash.requestedUser, currentUser: main.auth.currentUser, authToken: main.auth.authToken})

export default connect(mapStateToProps)(ExpandedFooter)