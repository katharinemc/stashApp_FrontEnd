import React from 'react';
import {connect} from 'react-redux'
import './collapsableul.css'
export  class CollapsableUL extends React.Component {


  render() {
    return (
      <div className="collapsable">
      <ul>
      <li>Maybelline Lipstick</li>
      <li>Revlon Blush</li>
      <li>Fancy Mascara</li>
      
                      </ul>
      </div>

    );
  }
}

const mapStateToProps = state => ({
  expandFooter: state.expandFooter
})

export default connect (mapStateToProps)(CollapsableUL)