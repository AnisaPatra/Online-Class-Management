import React from 'react';
import { Container, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap';
import './footer.css';

/**
* @author
* @function Footer
**/

const Footer = (props) => {
  return (
    <div>
      <div className="footer">
        <Container style={{ paddingBlock: "50px" }}>
          <Row>
            <Col >
              <b className="colHead">Get to Know Us</b>
              <br /><br />
              <ul className="lists">
                <li>
                  About Us
                </li>
                <li>
                  Careers
                </li>
                <li>
                  Press Releases
                </li>
                <li>
                  Gift a Smile
                </li>
              </ul>
            </Col>
            <Col>
              <b className="colHead">Connect with Us</b>
              <br /><br />
              <ul className="lists">
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
              </ul>
            </Col>
            <Col>
              <b className="colHead">Let Us Help You</b>
              <br /><br />
              <ul className="lists">
                <li>COVID-19 and Online Class Management</li>
                <li>Your Account</li>
                <li>Online Class Management App Download</li>
                <li>Online Class Management Assistant Download</li>
                <li>Help</li>
              </ul>
            </Col>
          </Row>
          <hr className="line" />
          <pre style={{ marginInlineStart: "50px", color: "grey" }}>Conditions of Use Sale    Privacy Notice    Interest-Based Ads    © 1996-2021, Online Class Management.com, Inc. or its affiliates
          </pre>
        </Container>
      </div>
    </div>
  )

}

export default Footer