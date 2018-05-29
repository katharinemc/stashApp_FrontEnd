import React from 'react'
import '../landingPage/footer.css';
import {connect} from 'react-redux';
import ExpandedFooter from './ExpandedFooter'
import MainFooter from './MainFooter'
import './expandedfooter.css'

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
      <footer className="dash">
        <MainFooter/>

      </footer>
    );
  }

}

const mapStateToProps = main => ({display: main.main.display, expandFooter: main.main.expandFooter});

export default connect(mapStateToProps)(Footer);