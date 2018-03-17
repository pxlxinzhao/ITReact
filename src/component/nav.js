import React from 'react';
import {
  Button,
  Navbar,
  NavbarBrand,
} from 'reactstrap';

class NavigationBar extends React.Component {
  render() {
    const btnStyle = {
      float: 'right',
      width: '80px',
      position: 'absolute',
      right: '0px'
    }

    return (
      <div>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">CONTACTS</NavbarBrand>
          <Button style={btnStyle} color="primary" onClick={this.props.onClick}>Add</Button>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar;