import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getCourses } from '../actions/courses';
import { MDBBtnGroup, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
/**
* @author
* @function Courses
**/

const Courses = (props) => {
  const dispatch = useDispatch();
  dispatch(getCourses());
  const courses = useSelector(state => state.courses);
  return(
    <div>
      {
        courses.map((course)=>{
          <MDBCol>
              <MDBCard >
                <MDBCardImage src={"http://localhost:2000" + course.courseImage} />
                <MDBCardBody>
                  <MDBCardTitle >{course.CourseDept}</MDBCardTitle>
                  <MDBCardText>
                    {course.CourseName}
                  </MDBCardText><hr style={{ height: "12px", color: "black" }} />
                  <MDBCardText >
                    {course.description}
                  </MDBCardText>
                  <MDBCardText >
                    {course.CourseRoom}
                  </MDBCardText>
                  <MDBCardText >
                    {course.Waitlist_Capacity}
                  </MDBCardText>
                  <MDBCardText >
                    {course.CourseTeam}
                  </MDBCardText>
                  <MDBCardText >
                    {course.CourseTeam}
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
        })
      }
    </div>
   )

 }

export default Courses