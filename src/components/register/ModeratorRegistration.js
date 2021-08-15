import React, { useState } from 'react'
import { Link } from "react-router-dom";

import InputAdornment from '@material-ui/core/InputAdornment';
import PersonIcon from '@material-ui/icons/Person';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import PhoneIcon from '@material-ui/icons/Phone';
import ContactMailOutlinedIcon from '@material-ui/icons/ContactMailOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined';

import { Grid, TextField, Paper, Button } from '@material-ui/core';


const StudentRegistration = (props) => {

    const paperStyle = { padding: "50px", width: "60%", maxWidth: "600px", minWidth: "300px", margin: "auto", marginTop: "5%", marginBottom: "5%" }
    const txtField = { width: "80%" , margin: "10px auto"}
    const headerStyle = { margin: '10px'}
    const margin = { margin: "10px auto" }

    const [name,setname] = useState("");
    const [uname,setuname] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [email,setEmail] = useState("");
    const [contact,setContact] = useState("");
    const [address,setAddress] = useState("");
    const [image,setImage] = useState("");

    const nameInputChangeHandler = event => {
        setname(event.target.value);
    };
    const unamelInputChangeHandler = event => {
        setuname(event.target.value);
    };
    const passwordInputChangeHandler = event => {
        setPassword(event.target.value);
    };
    const confirmPasswordInputChangeHandler = event => {
        setConfirmPassword(event.target.value);
    };
    const emailInputChangeHandler = event => {
        setEmail(event.target.value);
    };
    const ContactInputChangeHandler = event => {
        setContact(event.target.value);
    };
    const addressInputChangeHandler = event => {
        setAddress(event.target.value);
    };
    const imageUploadHandler = event => {
        console.log("TEST");
    };
    const formSubmissionHandler = async (event) => {
        
    };

    let userData = {name,email,password,confirmPassword, address,contact,uname}

    return (
        <div>
                    {console.log(userData)}
            <div >
                <Paper elevation={10} style={paperStyle}>
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >

                        <SupervisedUserCircleOutlinedIcon />
                        <h2 style={headerStyle}>Moderator Registration</h2>
                        <br />
                        <form className="submit" onSubmit={formSubmissionHandler} >
                            <Grid container spacing={3} justifyContent="center">
                                <Grid item xs={12} sm={6}>
                                    
                                    <TextField
                                        // required
                                        label="Full Name"
                                        variant="outlined"
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start"><PersonIcon /></InputAdornment>,
                                        }}
                                        style={margin}
                                        onChange = {nameInputChangeHandler}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        // required
                                        label="Username"
                                        variant="outlined"
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start"><b>@</b></InputAdornment>,
                                        }}
                                        style={margin}
                                        onChange = {unamelInputChangeHandler}
                                    />
                                </Grid>
                            </Grid>
                            <br />
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        // required
                                        label="Password"
                                        type="password"
                                        variant="outlined"
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start"><VpnKeyOutlinedIcon /></InputAdornment>,
                                        }}
                                        style={margin}
                                        onChange = {passwordInputChangeHandler}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        // required
                                        label="Confirm Password"
                                        type="password"
                                        variant="outlined"
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start"><VpnKeyOutlinedIcon /></InputAdornment>,
                                        }}
                                        style={margin}
                                        onChange = {confirmPasswordInputChangeHandler}
                                    />
                                </Grid>
                            </Grid>
                            <br />
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        // required
                                        label="Email"
                                        variant="outlined"
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start"><EmailOutlinedIcon /></InputAdornment>,
                                        }}
                                        style={margin}
                                        onChange = {emailInputChangeHandler}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} >
                                    <TextField
                                        // required
                                        label="Contact No."
                                        variant="outlined"
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start"><PhoneIcon /></InputAdornment>,
                                        }}
                                        style={margin}
                                        onChange = {ContactInputChangeHandler}
                                    />
                                </Grid>
                            </Grid>
                            <br />
                            

                            <Grid
                                
                                container spacing={3}
                            >
                                <Grid item xs={12}
                                    container
                                    direction="row"
                                    // justifyContent="center"
                                    alignItems="center">
                                    <TextField
                                        // required
                                        label="Address"
                                        variant="outlined"
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start"><ContactMailOutlinedIcon /></InputAdornment>,
                                        }}
                                        style={txtField}
                                        onChange = {addressInputChangeHandler}
                                    />
                                </Grid>
                                <br />
                                <br />
                                <Grid item xs={12}
                                    container
                                    direction="row"
                                    // justifyContent="center"
                                    alignItems="center"
                                    >
                                    <TextField
                                        // required
                                        type="file"
                                        label="Profile Picture"
                                        variant="outlined"
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start"><ImageOutlinedIcon /></InputAdornment>
                                        }}
                                        style={txtField}
                                        onChange = {imageUploadHandler}
                            

                                    />
                                </Grid>
                            </Grid>
                            <br />
                            <Grid
                                container
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Button type='submit' variant='contained' color='primary' size="large">Register</Button>
                            </Grid>
                        </form>
                        <br />
                        <Link to="/login" variant="body2">Already Have an account? Login</Link>

                    </Grid>
                </Paper>
            </div>
        </div>
    );
};

export default StudentRegistration;
