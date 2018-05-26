
import React from 'react'
import '../landingPage/footer.css';
import { connect } from 'react-redux';

export class Footer extends React.Component {


render () {
    return (
        <footer>
            
        <button type="button" onClick={(e) => this.changeDisplay('products') }>Products</button>
        <span className="projectName" onClick={(e) => this.changeDisplay('dash')}>|</span>
        <button type="button" onClick={(e) => this.changeDisplay('looks')}>Looks</button> 
      </footer>     
    );
}
 
}

const mapStateToProps = state => ({
    display: state.display
});
  
  export default connect(mapStateToProps)(Footer);