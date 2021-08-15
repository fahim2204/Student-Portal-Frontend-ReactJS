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
// import { makeStyles } from 'material-ui/core/styles';


import Login from '../Login'


import { Grid, TextField, Paper, Button } from '@material-ui/core';


// const useStyles = makeStyles((theme)=>({
//     root: {
//         backgroundColor: 'rgb(216, 219, 221)'
//     }
// }));

const StudentRegistration = (props) => {

  var rootStyle= {
    // position: 'absolute',
    top: '15px',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgb(216, 219, 221)'
  }

    const paperStyle = {padding:"55px", width: 600, margin: "auto"}
    const headerStyle = { margin: '10px' }
    const margin = { margin: "10px auto"}
    // const classes = useStyles();




    return (
        <div style={rootStyle}>
      
        <div >
        <Paper elevation={10} style={paperStyle}>
            <Grid >
                <Grid align='center'>
                    <SchoolOutlinedIcon />
                    <h2 style={headerStyle}>Student Registration</h2>
                </Grid>
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
                        style = {margin}
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
                        style = {margin}
                    />
                </Grid>
                </Grid>
                    <br/>
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
                        style = {margin}
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
                        style = {margin}
                    />
                    </Grid>
                </Grid>
                        <br/>
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
                        style = {margin}
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
                        style = {margin}
                    />
                    </Grid>
                </Grid>
                        <br/>
                        <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        // name="fullName"
                        required
                        // id="outlined-required"
                        label="Address"
                        variant="outlined"
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><ContactMailOutlinedIcon /></InputAdornment>,
                        }}
                        style = {margin}
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>

                    <TextField
                        // name="fullName"
                        required
                        // id="outlined-required"
                        label="Class"
                        variant="outlined"
                        placeholder=" eg. BSc. 3rd Year"
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><AccountBalanceOutlinedIcon /></InputAdornment>,
                        }}
                        style = {margin}
                    />
                    </Grid>
                </Grid>
                        <br/>
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
                        style = {margin}
                    />
                        <br/>
                        {/* <input type="file" required variant="contained" component="label" /> */}
                            {/* Image Upload */}
                        <br/><br/>
                    <Button type='submit' variant='contained' color='primary' size="large">Register</Button>

                </form>
                <br/>
                <Link to="/login" variant="body2">Already Have an account? Login</Link>
          
            </Grid>
            </Paper>
        </div>
        </div>
    );
};

export default StudentRegistration;
