import React from 'react'
import { Link } from "react-router-dom";

import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import InputAdornment from '@material-ui/core/InputAdornment';
import PersonIcon from '@material-ui/icons/Person';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import PhoneIcon from '@material-ui/icons/Phone';
import ContactMailOutlinedIcon from '@material-ui/icons/ContactMailOutlined';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';

import { Grid, TextField, Paper, Button } from '@material-ui/core';


const StudentRegistration = (props) => {

    const paperStyle = { padding: "50px", width: "60%", maxWidth: "600px", minWidth: "400px", margin: "auto", marginTop: "5%", marginBottom: "5%" }
    const txtField = { width: "100%" }
    const headerStyle = { margin: '10px' }
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

                        <SchoolOutlinedIcon />
                        <h2 style={headerStyle}>Moderator Registration</h2>
                        <br />
                        <form className="submit" >
                            <Grid container spacing={3}>
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
                                        id="outlined-required"
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
                                        id="outlined-password-input"
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
                                        id="outlined-password-input"
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
                                        // name="fullName"
                                        required
                                        // id="outlined-required"
                                        label="Email"
                                        variant="outlined"
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start"><EmailOutlinedIcon /></InputAdornment>,
                                        }}
                                        style={margin}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        // name="fullName"
                                        required
                                        // id="outlined-required"
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
                            {/* <Grid
                                container
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <TextField
                                    // name="fullName"
                                    required
                                    // id="outlined-required"
                                    label="Address"
                                    variant="outlined"
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"><ContactMailOutlinedIcon /></InputAdornment>,
                                    }}
                                    style={margin}
                                />


                            </Grid> */}
                            
                            <Grid
                                container
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                                container spacing={3}
                            >
                                <Grid item xs={12}>
                                <TextField
                                    // name="fullName"
                                    required
                                    // id="outlined-required"
                                    label="Address"
                                    variant="outlined"
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"><ContactMailOutlinedIcon /></InputAdornment>,
                                    }}
                                    style={margin, txtField }
                                />
                            </Grid>
                            <br/>
                            <br/>
                            <Grid item xs={12}>
                                <TextField
                                    // name="fullName"
                                    required
                                    type="file"
                                    // id="outlined-required"
                                    label="Profile Picture"
                                    variant="outlined"
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"><ImageOutlinedIcon /></InputAdornment>,
                                    }}
                                    style={margin, txtField}
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
