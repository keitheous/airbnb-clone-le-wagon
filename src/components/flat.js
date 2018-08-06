import React from 'react';
import './flat.css';

class Flat extends React.Component {
  handleClick = () => this.props.selectFlat(this.props.flat);

  render() {
    // https://github.com/lewagon/flats-boilerplate
    const title = this.props.flat.price
      + this.props.flat.priceCurrency + '-' + this.props.flat.name;


    const style = {
      backgroundImage: `url('${this.props.flat.imageUrl}')`  // using Template Literals ES6 - Ruby's version of interpolation
      // backgroundImage: "url('" + this.props.flat.imageUrl + "')"; //without modern javascript, using concat
    }

    return (
      <div className='flat' onClick={this.handleClick}>
        <div className='flat-picture' style={style}></div>
        <div className='flat-title'>{title}</div>
      </div>
    );
  }
}

export default Flat
