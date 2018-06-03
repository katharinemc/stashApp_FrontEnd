import React from 'react'
import './herotext.css';
import SignUpBox from './SignUpBox'
import {connect} from 'react-redux'
import {BrowserRouter as Route, Redirect} from 'react-router-dom'
import {fetchProducts, changeDisplay, fetchLooks, CHANGE_DISPLAY} from '../actions/landingActions'
import ReduxLogin from './ReduxLogin'
import ReduxRegister  from './ReduxRegister';

export class HeroText extends React.Component {

  render() {

    if (this.props.loading === 'true') {
      this.props.dispatch(fetchProducts(this.props.currentUser))
      this.props.dispatch(fetchLooks(this.props.currentUser))
      return <h1>Here's some stuff, loading</h1>

    } 
    else 
    if (this.props.loading === 'complete' && this.props.authToken != null) {
this.props.dispatch(changeDisplay('products'))
      return <Redirect to={`/users/${this.props.currentUser}`}/>;
  }
   else if (this.props.display === 'login') {
      return <ReduxLogin/>
    } else if (this.props.display === 'register') {
      return <ReduxRegister/>
    } else  {
      return (
        <div className="HeroText">
          <h1>Stash App</h1>
          <p>
            Being gorgeous with belly side up favor packaging over toy i could pee on this
            if i had the energy. Sleeps on my head you call this cat food i
          </p>
        </div>
      );
    } 
  }
}

const mapStateToProps = (main, auth) => {

  return (
    {display: main.main.display,
       authToken: main.auth.authToken,
        currentUser: main.auth.currentUser, 
        products: main.main.products,
        looks: main.main.looks,
         loading: main.main.loading});

}

export default connect(mapStateToProps)(HeroText);