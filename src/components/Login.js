import React, { useState } from 'react'
import axios from 'axios';


import {
    Link
} from "react-router-dom"

import { Grid, TextField, Paper, Avatar, Button } from '@material-ui/core';



const Login = (props) => {

    const [uname, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [errorText, setErrorText] = useState(false);


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
            const res = await axios.post(`http://127.0.0.1:8000/api/login`, result);
            console.log(res.data);
            //    const error = '';
            if (res.data.id == null) {
                setErrorMsg('Username or Password Invalid')
                setErrorText(true);
                console.log(errorText)
            }

        } catch (errorMsg) {
            console.log(errorMsg);

        }
    };


    const paperStyle = { padding: "50px", width: "30%", maxWidth: "300px", margin: "auto", marginTop: "150px" }
    const headerStyle = { margin: '10px' }
    const margin = { margin: "10px auto" }
    const errorMessageColor = { color: "red", padding: "10px" }


    return (
        <div>

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
                            {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
                            <TextField
                                required
                                error={errorText}
                                label="Username"
                                variant="outlined"
                                style={margin}
                                onChange={usernamelInputChangeHandler}
                            />
                            <br />
                            <TextField
                                required
                                error={errorText}
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

                        <span style={errorMessageColor}>{errorMsg}</span>


                        <Link to="/register"> New here? Sign Up</Link>


                    </Grid>
                </Paper>
            </div>

        </div>
    );
};

export default Login;