import React, { Component } from 'react'
import axios from 'axios';
import { MDBBtnGroup, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
/**
* @author
* @function Courses
**/


export default class Courses extends Component {
  constructor(props) {
    super(props);
    this.CoursesList = this.CoursesList.bind(this);
    this.state = {
      courses: []
    }
  }

  componentDidMount() {
    var a = null;
    var x = [];
    axios.get('http://localhost:2000/courses')
      .then(res => {
        this.setState({
          courses: res.data,
        })
        console.log(this.state.courses);
      })
      .catch(err => { console.log(err) });
  }

  CoursesList(){
    this.state.courses.map(function(item){
      return(
        <div style={{background:"black"}}>
        <p>Hi</p>
        <p>{item.CourseId}</p>
        </div>
      ) 
    })
  }
  

  render() {
    return (
      <div>{this.CoursesList()}</div>
    )
  }
}