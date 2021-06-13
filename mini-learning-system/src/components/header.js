import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './header.css';
import {isUserLoggedIn, signout} from '../actions/authentication';
import { useSelector } from 'react-redux';

/**
* @author
* @function Header
**/

const Header = (props) => {
  const auth = useSelector(state => state.auth);
  return (
    <div>
      <Navbar style={{ backgroundColor: "#fed851", height: "80px" }}>
        <button className="logo">Online Class Management</button>
        {/*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <InputGroup style={{width:"auto"}}>
            <InputGroup.Prepend>
            <DropdownButton title="All" variant="dark" className="drp-btn">
              <Dropdown.Item>All Categories</Dropdown.Item>
              <Dropdown.Item>Deals</Dropdown.Item>
              <Dropdown.Item>Books</Dropdown.Item>
              <Dropdown.Item>Car & Motorbike</Dropdown.Item>
              <Dropdown.Item>Clothing & Accessories</Dropdown.Item>
              <Dropdown.Item>Collectibles</Dropdown.Item>
            </DropdownButton>
            </InputGroup.Prepend>
            <input style={{ width: "300px", height: "40px", marginBlockStart:"6px" }}></input>
            <InputGroup.Append>
            <span style={{ backgroundColor: "#febd69", width: "50px", height: "40px",marginBlockStart:"6px", padding: "2px", display: "inline-block" }}>
              <MDBIcon icon="search" size="lg" style={{paddingLeft:"9px", paddingTop:"8px"}}/>
            </span>
            </InputGroup.Append>
        </InputGroup>*/}
        <div style={{ marginInlineStart: "680px" }}>
          <button className="header-right-button active">
            <a href="/">Home</a>
          </button>
          <button className="header-right-button">
            <a href="/courses">Courses</a>
          </button>
          {/*<button className="header-right-button">
            <a href="/">About Us</a>
          </button>
          <button className="header-right-button">
            <a href="/">Contact Us</a>
          </button>*/}
          <button className="header-right-button">
            {auth.authenticate ? <pre>Hi, {auth.user.name}</pre> : <a href="/auth">Sign in</a> }
          </button>
        </div>
      </Navbar>
      <Navbar style={{ paddingInlineStart: "30px", color: "white" }} className="lower-header" expand={false}>
      <table cellPadding="15px">
        <tr>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ color: "white" }} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>Biology</Nav.Link>
            <Nav.Link>Economics</Nav.Link>
            <Nav.Link>Social Science</Nav.Link>
            <Nav.Link>Finance & Accounting</Nav.Link>
            <Nav.Link>Computer Science</Nav.Link>
            <Nav.Link>Personal Development</Nav.Link>
            <Nav.Link>Business Administration</Nav.Link>
            <Nav.Link>Computers</Nav.Link>
            <Nav.Link>Mass Media</Nav.Link>
            <Nav.Link>New</Nav.Link>
          </Nav>
        </Navbar.Collapse>
            <td>Biology</td>
            <td>Economics</td>
            <td>Social Science</td>
            <td>Finance & Accounting</td>
            <td>Computer Science</td>
            <td>Personal Development</td>
            <td>Business Administration</td>
            <td>Computers</td>
            <td>Mass Media</td>
            <td>New</td>
          </tr>
        </table>
      </Navbar>
    </div>
  )

}

export default Header