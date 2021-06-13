import React, { useState } from 'react';
import { Jumbotron, Tab, Tabs, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { MDBInput } from "mdbreact";
import './auth.css';
import { login, register } from '../actions/authentication';

/**
* @author
* @function Signin
**/

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = useSelector(state => state.auth);
    const [error, setError] = useState(auth.error);
    const dispatch = useDispatch();

    const userLogin = (e) => {

        e.preventDefault();

        const user = {
            email, password
        }

        dispatch(login(user));
    }

    if (auth.authenticate) {
        return <Redirect to={`/`} />
    }
    return (
        <Form onSubmit={userLogin} className="signin">
            <br />
            <table cellpadding="20">
                <tr>
                    <td>
                        <label style={{ fontWeight: 'bold' }}>Email</label>
                    </td>
                    <td>
                        <MDBInput required hint="Email" type="email" value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label style={{ fontWeight: 'bold' }}>Password</label>
                    </td>
                    <td>
                        <MDBInput required hint="Password" value={password} type="password"
                            onChange={(e) => setPassword(e.target.value)} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label style={{ fontWeight: 'bold' }}>{auth.message}</label>
                    </td>
                </tr>
                <br />
                <tr>
                    <td colSpan="1">
                        <Button type="submit" variant="info" style={{ width: "130px", color: "white" }}>Sign In</Button>
                    </td>

                </tr>
            </table>
        </Form>
    )
}

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phoneNumber, setphoneNumber] = useState();
    const [role, setRole] = useState('Student');
    const [error, setError] = useState('');
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const userRegister = (e) => {

        e.preventDefault();

        const user = {
            email, password, name, phoneNumber, role
        }

        dispatch(register(user));
    }

    if (auth.authenticate) {
        return <Redirect to={`/`} />
    }
    return (
        <Form className="signin" onSubmit={userRegister}>
            <br />
            <table cellpadding="20">
                <tr>
                    <td>
                        <label style={{ fontWeight: 'bold' }}>Name</label>
                    </td>
                    <td>
                        <MDBInput
                            type="text"
                            required
                            maxlength="20"
                            minlength="3"
                            hint="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}

                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label style={{ fontWeight: 'bold' }}>Email</label>
                    </td>
                    <td>
                        <MDBInput required hint="Email" type="email" value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label style={{ fontWeight: 'bold' }}>Password</label>
                    </td>
                    <td>
                        <MDBInput required hint="Password" value={password} type="password"
                            onChange={(e) => setPassword(e.target.value)} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label style={{ fontWeight: 'bold' }}>Contact Number</label>
                    </td>
                    <td class="input">
                        <MDBInput
                            type="text"
                            hint="Contact Number"
                            required
                            pattern="^[789]\d{9}$"
                            value={phoneNumber}
                            onChange={(e) => setphoneNumber(e.target.value)}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label style={{ fontWeight: 'bold' }}>Role</label>
                    </td>
                    <td class="input">
                        <select
                            required
                            hint="Role"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}>
                            <option>Student</option>
                            <option>Faculty</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label style={{ fontWeight: 'bold' }}>{error}</label>
                    </td>
                </tr>
                <br />
                <tr>
                    <td colSpan="1">
                        <Button type="submit" variant="info" style={{ width: "130px", color: "white" }}>Sign Up</Button>
                    </td>

                </tr>
            </table>
        </Form>
    )
}

const Authentication = (props) => {
    return (
        <center>
            <Jumbotron className="jumbo">
                <Tabs className="nav nav-tabs nav-justified">
                    <Tab eventKey="signin" title="Sign In" style={{ color: "white" }}>
                        <Signin />
                    </Tab>
                    <Tab eventKey="signup" title="Sign Up" >
                        <Signup />
                    </Tab>
                </Tabs>
            </Jumbotron>
        </center>
    )

}

export default Authentication