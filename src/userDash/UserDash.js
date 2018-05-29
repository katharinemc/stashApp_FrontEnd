import React from 'react';
import Footer from './Footer'
import {connect} from 'react-redux'
import CollapsableUL from './CollapsableUL'
import './userdash.css'

export class UserDash extends React.Component {

  render() {
    return (
      <div className="Dash">
        <h4>Collapsable Header</h4>

        <CollapsableUL/>
        <Footer/>

      </div>
    );
  }
}

const mapStateToProps = main => ({expandFooter: main.main.expandFooter})

export default connect(mapStateToProps)(UserDash)