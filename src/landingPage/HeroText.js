import React from 'react'
import './herotext.css';
import SignUpBox from './SignUpBox'
import {connect} from 'react-redux'
import {BrowserRouter as Route, Redirect} from 'react-router-dom'
import {fetchProducts, changeDisplay, fetchLooks, CHANGE_DISPLAY} from '../actions/landingActions'
import ReduxLogin from './ReduxLogin'
import ReduxRegister from './ReduxRegister';

export class HeroText extends React.Component {
  showMore() {
    this
      .props
      .dispatch(changeDisplay('landing2'))
  }

  render() {
    console.log(this.props)
    if (this.props.authToken != null) {
      console.log('about to redirect', this.props.currentUser, 'current display, ', this.props.display)
      this
        .props
        .dispatch(changeDisplay('products'))
      return <Redirect to={`/users/${this.props.currentUser}`}/>;
    } else if (this.props.display === 'login') {
      return <ReduxLogin/>
    } else if (this.props.display === 'register') {
      return <ReduxRegister/>
    } else if (this.props.display === 'landing') {
      return (
        <div className="welcome centeredContent">
          <h1>Stash App</h1>
          <h3>For Makeup Lovers</h3>
          <br/>
          <p>Lauren is a hobbyist who buys every red lipstick on impulse... not realizing
            she has backups for her backups in herotext makeup kit at home.</p>

          <p>Leah is professional on-site with a client who wants to recreate a stunning
            look from six months ago, but ...what was the shade she used in the socket that
            made everything pop?</p>

          <p>They both need StashApp to catalog their collections and looks for easy
            on-the-go access.</p>
          <p>
            Learn More
            <button
              aria-label="moreInfo"
              onClick={() => this.showMore()}
              type="button"
              className="hiddenButton">
              <i className="fas fa-lg fa-arrow-right"></i>
            </button>
          </p>

        </div>
      );
    } else if (this.props.display === 'landing2') {
      return (
        <div className="welcome centeredContent">
          <p>Stash App lets you catalog your makeup collection so that it can be searched
            by brand, category, color, and product name. Include notes about the formulation
            or your likelihood to rebuy for easy future reference.</p>
          <span>IMAGE HERE</span>
          <p>
            You can organize your makeup into Looks so that you can easily remember what you
            wore to brunch or which products you plan to take on vacation.
          </p>
          <span>Image HERE</span>
          <p>You can even peruse your friend's collections and looks to see what products
            they love and how they wear them!</p>
          <span>IMAGE HERE</span>
          <p>To see a collection in action, click here [TODO LINK], or click below to get
            started</p>
        </div>
      )
    }
  }
}

const mapStateToProps = (main, auth) => {

  return ({
    display: main.main.display,
    authToken: main.auth.authToken,
    currentUser: main.auth.currentUser,
    products: main.main.products,
    looks: main.main.looks,
    loading: main.main.loading
  });

}

export default connect(mapStateToProps)(HeroText);