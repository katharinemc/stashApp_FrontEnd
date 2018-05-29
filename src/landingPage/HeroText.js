import React from 'react'
import './herotext.css';
import SignUpBox from './SignUpBox'
import {connect} from 'react-redux'
import {BrowserRouter as Route, Redirect} from 'react-router-dom'
import {fetchProducts} from '../actions/landingActions'
import ReduxLogin from './ReduxLogin'

export class HeroText extends React.Component {

  render() {

    console.log('herotext props', this.props)

    if (this.props.loading === 'true') {

      this
        .props
        .dispatch(fetchProducts(this.props.authToken, this.props.currentUser))
      return <h1>Here's some stuff, loading</h1>

    } else if (this.props.loading === 'complete' || this.props.display === 'dash') {
      return <Redirect to={"/UserDash"}/>;

    } else if (this.props.display === 'landing') {
      return (
        <div className="HeroText">
          <h1>Stash App</h1>
          <p>
            Being gorgeous with belly side up favor packaging over toy i could pee on this
            if i had the energy. Sleeps on my head you call this cat food i
          </p>
        </div>
      );
    } else if (this.props.display === 'login') {
      return <ReduxLogin/>
    } else if (this.props.display === 'register') {
      return <SignUpBox/>
    }
  }
}

const mapStateToProps = (main, auth) => {

console.log(main)
  return (
    {display: main.main.display,
       authToken: main.auth.authToken,
        currentUser: main.auth.currentUser, 
        products: main.main.products,
         loading: main.main.loading});

}

export default connect(mapStateToProps)(HeroText);