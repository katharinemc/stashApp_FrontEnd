import React from 'react';
import {connect} from 'react-redux'
import './collapsableul.css'
import { loadAuthToken } from './../local-storage.js'
import {setAuthToken} from '../actions/auth'
import { fetchProducts, fetchLooks} from  '../actions/landingActions'

export class CollapsableUL extends React.Component {

  render() {
    if (this.props.products === []) {

      // this.props.dispatch(fetchProducts(this.props.authToken, this.props.currentUser))
      this.props.dispatch(fetchLooks(this.props.authToken))  
    }
  

    console.log('i am a collapsable ul', this.props.results)
 const results = this.props.results.map((item, index) => (
        <div key={index}>
          <dt >
            {item.brand} {item.category} {item.name}

          </dt>
          <dd> 
            {item.shade}
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