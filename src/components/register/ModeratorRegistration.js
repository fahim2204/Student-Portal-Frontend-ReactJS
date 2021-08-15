import React from 'react'
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

                        <SupervisedUserCircleOutlinedIcon />
                        <h2 style={headerStyle}>Moderator Registration</h2>
                        <br />
                        <form className="submit" >
                            <Grid container spacing={3} justifyContent="center">
                                <Grid item xs={12} sm={6}>
                                    
                                    <TextField
                                        // name="fullName"
                                        required
                                        // id="outlined-required"
                                        label="Full Name"
                                        variant="outlined"
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start"><PersonIcon /></InputAdornment>,
                                        }}
                                        style={margin}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        label="Username"
                                        variant="outlined"
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start"><b>@</b></InputAdornment>,
                                        }}
                                        style={margin}
                                    />
                                </Grid>
                            </Grid>
                            <br />
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        label="Password"
                                        type="password"
                                        variant="outlined"
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start"><VpnKeyOutlinedIcon /></InputAdornment>,
                                        }}
                                        style={margin}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        label="Confirm Password"
                                        type="password"
                                        variant="outlined"
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start"><VpnKeyOutlinedIcon /></InputAdornment>,
                                        }}
                                        style={margin}
                                    />
                                </Grid>
                            </Grid>
                            <br />
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        label="Email"
                                        variant="outlined"
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start"><EmailOutlinedIcon /></InputAdornment>,
                                        }}
                                        style={margin}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} >
                                    <TextField
                                        required
                                        label="Phone No."
                                        variant="outlined"
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start"><PhoneIcon /></InputAdornment>,
                                        }}
                                        style={margin}
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
                                        required
                                        label="Address"
                                        variant="outlined"
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start"><ContactMailOutlinedIcon /></InputAdornment>,
                                        }}
                                        style={txtField}
                                    />
                                </Grid>
                                <br />
                                <br />
                                <Grid item xs={12}
                                    container
                                    direction="row"
                                    // justifyContent="center"
                                    alignItems="center">
                                    <TextField
                                        required
                                        type="file"
                                        label="Profile Picture"
                                        variant="outlined"
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start"><ImageOutlinedIcon /></InputAdornment>
                                        }}
                                        style={txtField}
                            

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
