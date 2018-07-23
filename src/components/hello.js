// Import react class from react package
import React from 'react';

// Define class component which extends react.component and returns a render method
class Hello extends React.Component {
  render() {
    // render method returns a html string in JXS
    // Interpolation in JSX is curly braces (return level) inside another curly braces (render level)
    return <div>Hello {this.props.firstName} {this.props.lastName}!</div>;

  }
}

// export component
export default Hello;
