import React from 'react';
import {connect} from 'react-redux'
import './collapsableul.css'
import { loadAuthToken } from './../local-storage.js'
import {setAuthToken} from '../actions/auth'

export class CollapsableUL extends React.Component {


  render() {
 const results = this.props.results.map((product, index) => (
        <div key={index}>
          <dt >
            {product.brand} {product.category}

          </dt>
          <dd> 
            {product.shade}
          </dd>
</div>
      ));

    return (
      <div className="collapsable">
      <h4>Collapsable Header</h4>
      <dl>
        {results}
        </dl>
      </div>

    );
  }
}



const mapStateToProps = (main, ownProps) => ({currentUser: main.main.currentUser,
   authToken: main.main.authToken,
   editing: main.main.editing,
    results: main.main[ownProps.type]})

export default connect(mapStateToProps)(CollapsableUL)