import React from 'react';
import Footer from './Footer'
import HeroText from './HeroText'

export  default class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'landing',
                   }
    }

setEditing(displayType) {
    console.log("button fires", displayType)
    this.setState({
            display: displayType
        });
    }

  render() {


    
    return (
      <div className="App">
      <HeroText  display={this.state.display} />
<Footer onClick={(value) => this.setEditing(value)} />

      </div>
    );
  }
}

