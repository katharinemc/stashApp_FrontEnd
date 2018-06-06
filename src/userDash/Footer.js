import React from 'react'
import {connect} from 'react-redux';
import ExpandedFooter from './ExpandedFooter'
import MainFooter from './MainFooter'
import '../userDash/globalFooter.css';

import {setFooterExpand} from '../actions/landingActions'
export class Footer extends React.Component {
  changeDisplay() {
    this
      .props
      .dispatch(setFooterExpand(!this.props.expandFooter))
  }

  render() {
    if (this.props.expandFooter === true) {
      return (
        <footer className="expanded">
          <ExpandedFooter/>
          <MainFooter/>
        </footer>
      );

    }
 
    return (
      <footer>
        <MainFooter/>

      </footer>
    );
  }

}

const mapStateToProps = main => ({display: main.main.display, expandFooter: main.main.expandFooter});

export default connect(mapStateToProps)(Footer);