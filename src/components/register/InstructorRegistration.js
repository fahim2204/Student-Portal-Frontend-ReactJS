import React from 'react'
import { Link } from "react-router-dom";


import Login from '../Login'



import { Grid, TextField, Paper, Avatar, Button } from '@material-ui/core';

const InstructorRegistration = (props) => {

  var rootStyle= {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgb(216, 219, 221)'
  }
   
    const paperStyle = {padding:"50px", width: 300, margin: "253px auto" }
    const headerStyle = { margin: '10px' }
    const margin = { margin: "10px auto"}

    return (
        <div style={rootStyle}>
        <div >
        <Paper elevation={10} style={paperStyle}>
            <Grid>
                <Grid align='center'>
                    <Avatar />     
                    <h2 style={headerStyle}>InstructorRegistration</h2>
                </Grid>
                <form className="submit" noValidate autoComplete="off">
                    <TextField
                        required
                        id="outlined-required"
                        label="Username"
                        variant="outlined"
                        style = {margin}
                    />
                    <br/>
                    <TextField
                        required
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        variant="outlined"
                        style = {margin}
                    />
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

export default InstructorRegistration;