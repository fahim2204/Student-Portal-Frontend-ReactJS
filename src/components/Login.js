import React, { useState } from 'react'
import axios from 'axios';

// import Registration from './Registration/Registration'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"

import { Grid, TextField, Paper, Avatar, Button } from '@material-ui/core';
// import { FormControl } from '@material-ui/core';


const Login = (props) => {

    const [uname, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const usernamelInputChangeHandler = event => {
        setUsername(event.target.value);
        // console.log(uname);
    };
    const passwordInputChangeHandler = event => {
        setPassword(event.target.value);
        // console.log(password)
    };

    const formSubmissionHandler = async (event) => {
        event.preventDefault();

        let result = { uname, password }
        console.log(result);
        try {
            await axios.post(`http://127.0.0.1:8000/api/login`, result)
        } catch (error) {
            console.log(error);
        }
    };

    var rootStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgb(216, 219, 221)'
    }

    // const backGround = { backgroundColor: 'rgb(216, 219, 221)' }
    const paperStyle = { padding: "50px", width: 500, margin: "253px auto" }
    const headerStyle = { margin: '10px' }
    // const avatarStyle = { backgroundColor: '#1bbd7e' }
    const margin = { margin: "10px auto" }


    return (
        <div style={rootStyle}>
            <Router >
                <div >
                    <Paper elevation={10} style={paperStyle}>
                        <Grid align='center'>
                            <Grid align='center'>
                                <Avatar />
                                <h2 style={headerStyle}>Login</h2>
                            </Grid>
                            <form className="submit" onSubmit={formSubmissionHandler}>
                                <TextField
                                    required
                                    // id="outlined-required"
                                    label="Username"
                                    // defaultValue=""
                                    variant="outlined"
                                    style={margin}
                                    onChange={usernamelInputChangeHandler}
                                />
                                <br />
                                <TextField
                                    required
                                    id="outlined-password-input"
                                    label="Password"
                                    type="password"
                                    // autoComplete="current-password"
                                    variant="outlined"
                                    style={margin}
                                    onChange={passwordInputChangeHandler}
                                />
                                <br /><br />
                                <Button type='submit' variant='contained' color='primary' size="large">Login</Button>

                            </form>
                            <br />
                            <Link to="/registration"> New here? Sign Up</Link>
                        </Grid>
                    </Paper>
                </div>
            </Router>
        </div>
    );
};

export default Login;