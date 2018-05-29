import React from 'react';
import {connect} from 'react-redux'
import './collapsableul.css'
import {fetchProducts} from '../actions/landingActions'
import { loadAuthToken } from './../local-storage.js'
import {setAuthToken} from '../actions/auth'

export class CollapsableUL extends React.Component {

componentWillMount (){
  const authToken = loadAuthToken();
  if (authToken) {
      const token = authToken;
      this.props.dispatch(setAuthToken(token));
      // store.dispatch(refreshAuthToken());
  }
}

  render() {
 
    // const kind = this.props.type;

// console.log( this.props[kind])

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