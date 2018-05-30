import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux'
import './testaccordion.css'


class TestAccordion extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false
    }
  }

  handleClick() {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    console.log('accordion has', this.props)
    const results = this
      .props
      .results
      .map((item, index) => (
        <div key={index}>
          <li onClick={() => this.handleClick()}>{item.brand} {item.category} {item.name}</li>
          <div className='content' className={this.state.open ? 'visible' : 'hidden'}>
            {item.shade}
          </div>

        </div>
      ));

    return (
      <ul>
  {results}
      </ul>
    );
  }
}

const mapStateToProps = (main, ownProps) => ({
  currentUser: main.main.currentUser,
  authToken: main.main.authToken,
  editing: main.main.editing,
  results: main.main[ownProps.type]
})

export default connect(mapStateToProps)(TestAccordion)