import React from 'react';
import Footer from './Footer'
import DashContent from './DashContent'


export  default class UserDash extends React.Component {


  render() {


    return (
      <div className="App">
      <DashContent />
<Footer onClick={(value) => this.setEditing(value)} />

      </div>
    );
  }
}

