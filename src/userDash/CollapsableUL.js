import React from 'react';
import {connect} from 'react-redux'
import './collapsableul.css'
import { loadAuthToken } from './../local-storage.js'
import {setAuthToken} from '../actions/auth'

export class CollapsableUL extends React.Component {

  render() {
 
const results = this.props.results.map((product, index) => (
        <dl>
          <dt key={index}>
            {product.brand} {product.category}

          </dt>
          <dd> 
            {product.shade}
          </dd>
        </dl>
      ));

    return (
      <div className="collapsable">
      <h4>Collapsable Header</h4>

        {results}

      </div>

    );
  }
}



const mapStateToProps = (main, ownProps) => ({currentUser: main.main.currentUser,
   authToken: main.main.authToken,
    results: main.main[ownProps.type]})

export default connect(mapStateToProps)(CollapsableUL)