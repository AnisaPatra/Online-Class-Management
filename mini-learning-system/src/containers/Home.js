import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Carousel, CarouselItem, Row, Col, Card } from 'react-bootstrap';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBCardGroup, MDBContainer } from "mdbreact";

/**
* @author
* @function Home
**/


const PanelPage = () => {
  return (
    <MDBContainer>
      <MDBCardGroup deck>
        <MDBCard color="rainy-ashville-gradient" text="black" className="text-center" style={{ height: "200px" }}>
          <MDBCardBody>
            <MDBCardTitle tag="h2" style={{ fontFamily: "Georgia", padding: "5px" }}><b>Students</b></MDBCardTitle>
            <MDBCardText style={{ color: "black", fontFamily: "Franklin Gothic Medium", letterSpacing: ".8px", fontSize: "15px" }}>
              Enable students to grasp concepts more quickly, understand complex  instruction much better and retain them better over time so that amount of time struggling with the program is reduced, and they can get their work done.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        <MDBCard color="near-moon-gradient" text="black" className="text-center">
          <MDBCardBody>
            <MDBCardTitle tag="h2" style={{ fontFamily: "Georgia", padding: "5px" }}><b>Faculty</b></MDBCardTitle>
            <MDBCardText style={{ color: "black", fontFamily: "Franklin Gothic Medium", letterSpacing: ".8px", fontSize: "15px" }}>
              Track each student in real time to ensure they are staying on task. Collaborative tools to broadcast messages to students and support learning.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCardGroup>
    </MDBContainer>
  );
};

const Home = (props) => {
  return (
    <div>
      <Header />
      <Carousel fade indicators={false} style={{ marginLeft: "9px" }}>
        <Carousel.Item>
          <img
            src="https://leverageedu.com/blog/wp-content/uploads/2020/03/Online-Learning.jpg"
            alt="First slide"
            style={{ width: "100%", height: "700px" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://michiganvirtual.org/wp-content/uploads/2019/09/online-teaching-Converted.png"
            alt="Second slide"
            style={{ width: "100%", height: "700px" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://www.insidehighered.com/sites/default/server_files/media/Inside%20Digital%20Learning/iStock-872232248.jpg"
            alt="Third slide"
            style={{ width: "100%", height: "700px" }}
          />
        </Carousel.Item>
      </Carousel>
      <br /><br /><br />
      <br />
      <h1 style={{ textAlign: "center", fontFamily: "Georgia", fontWeight: "800", color: "black" }}>Catered to Everyone's needs</h1><br /><br />
      <PanelPage />
      <br /><br /><br /><br />
      <Row>
        <Col style={{ fontWeight: "800", paddingBlockStart: "100px", fontSize: "35px", paddingInlineStart: "100px", fontFamily: "Georgia", line: "2" }}>
          Learn From Anywhere, Anytime.<br />
          Learn the latest skills to reach your professional goals.
        </Col>
        <Col>
          <img src="https://www.creatrixcampus.com/sites/default/files/2020-09/campaign_count.png" style={{height:"400px",width:"80%"}}/>
        </Col>
      </Row>
      <br /><br /><br /><br />
      <Row>
        <Col>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV-QOBFb3165RgDG86c-C-ZvNBZezQJ7HZ7o0QZD_KBVQ4-Gpkz4fqhBYWWhtIrraocu8&usqp=CAU" style={{width:"100%",height:"400px",paddingLeft:"200px"}} />
        </Col>
        <Col style={{ fontWeight: "800", paddingBlockStart: "100px", fontSize: "35px", paddingInlineStart: "100px", fontFamily: "Georgia", line: "2" }}>
          Teach Your Students Online.<br />
          Manage your classes and share your knowledge.
        </Col>
      </Row>
      <br /><br /><br /><br />
      <Footer />
    </div>
  )

}

export default Home