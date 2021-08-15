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

    const paperStyle = { padding: "50px", width: "40%", maxWidth: "400px", minWidth: "300px", margin: "auto", marginTop: "10%" }
    const headerStyle = { margin: '10px' }
    const margin = { margin: "10px auto" }


    return (
        <div style={rootStyle}>

            <div >
                <Paper elevation={10} style={paperStyle}>
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        
                            <Avatar />
                            <h2 style={headerStyle}>Login</h2>
                        <form className="submit" onSubmit={formSubmissionHandler}>
                            <TextField
                                required
                                label="Username"
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
                                variant="outlined"
                                style={margin}
                                onChange={passwordInputChangeHandler}
                            />
                            <br /><br />
                            <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Button type='submit' variant='contained' color='primary' size="large">Login</Button>
                            </Grid>
                        </form>
                        <br />


                        <Link to="/register"> New here? Sign Up</Link>


                    </Grid>
                </Paper>
            </div>

        </div>
    );
};

export default Login;