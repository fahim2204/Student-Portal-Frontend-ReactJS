
import { AppBar, Box, Grid, IconButton, Toolbar, Paper, TextField, Typography, Button, makeStyles, createTheme, ThemeProvider, MenuItem, Container } from '@material-ui/core';
import * as React from 'react';

import { Link, useHistory } from "react-router-dom";

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { blue, green } from '@material-ui/core/colors';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import Menu from '@material-ui/core/Menu';






const useStyles = makeStyles(() => ({

    toolbar: {
        textAlign: "center",
        height: "60px",
        padding: "5px",
        justifyContent: 'center'
    },
    btn: {
        textAlign: "center",
        margin: "1%",
        // marginTop: "3%",
        // padding: '5%'
        // justifyContent: 'end'


    },
    

}));

const theme = createTheme({
    palette: {
        primary: green,
        secondary: blue,
    },
});

const Header = () => {



    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleProfile = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };



    const classes = useStyles();

    return (
        <div>
            <Container maxWidth="xl">
                <AppBar color='transparent' position='static' alignItems='center' justifyContent='center'>
                    {/* <Paper elevation={1}> */}
                    <Toolbar className={classes.toolbar} >
                        <Grid container spacing={3} alignItems='center' justifyContent='center' >
                            <Grid item xs>
                                <Grid container alignItems='center' justify="flex-start">
                                    <Grid xs={3} md={1}  >
                                        <IconButton
                                            size="large"
                                            edge="start"
                                            color="inherit"
                                            aria-label="menu"
                                        >
                                            <MenuIcon />
                                        </IconButton>
                                    </Grid>
                                    <Grid xs={8} md={10} lg={8}>
                                        <TextField size= "small" style={{ width: '90%' }} type="search" variant="outlined" placeholder='Search' />
                                    </Grid>
                                    <Grid xs={1} md={1}>
                                        <IconButton><SearchIcon /></IconButton>
                                    </Grid>

                                </Grid>
                            </Grid>
                            <Grid item xs={5} lg={4}>

                                <Typography variant="h5" component="div">Student Potal</Typography>

                            </Grid>
                            <Grid item xs>
                                {sessionStorage.getItem('uname') === null &&
                                    <ThemeProvider theme={theme}>
                                        <Grid container justify="flex-end">
                                            <Grid style={{ marginRight: "4px" }}>
                                                <Link to="/login" style={{ textDecoration: 'none' }}>
                                                    <Button size='small' variant="outlined" color="secondary" className={classes.btn}>
                                                        Login
                                                    </Button>
                                                </Link>
                                            </Grid >
                                            <Grid style={{ marginLeft: "4px" }}>
                                                <Link to="/register" style={{ textDecoration: 'none' }}>
                                                    <Button size='small' variant="outlined" color="primary" className={classes.btn}>
                                                        Register
                                                    </Button>
                                                </Link>
                                            </Grid>
                                        </Grid>
                                    </ThemeProvider>

                                }
                                {sessionStorage.getItem('uname') !== null &&

                                        <Grid container justify="flex-end" alignItems='center'>
                                            <Grid style={{ marginRight: "4px" }} item xs={4} sm={3} md={2} lg={1}>
                                                <IconButton >
                                                    <NotificationsNoneOutlinedIcon />
                                                </IconButton>
                                            </Grid >
                                            <Grid style={{ marginLeft: "4px" }} item xs={6} sm={4} md={3} lg={2}>

                                                    <IconButton aria-haspopup="true" onClick={handleProfile}>
                                                        <PersonOutlineOutlinedIcon />

                                                    </IconButton>
                                                    <Menu
                                                        id="simple-menu"
                                                        anchorEl={anchorEl}
                                                        keepMounted
                                                        open={Boolean(anchorEl)}
                                                        onClose={handleClose}
                                                    >
                                                        <Link to="/profile/:uname" style={{ textDecoration: 'none' }}>
                                                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                                                        </Link>
                                                        <Link to="#" style={{ textDecoration: 'none' }}>
                                                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                                                        </Link>


                                                    </Menu>
                                               

                                            </Grid>
                                        </Grid>

                                    
                                }

                            </Grid>



                        </Grid>


                    </Toolbar>
                    {/* </Paper> */}
                </AppBar>
            </Container>



        </div >


    );
};
export default Header;