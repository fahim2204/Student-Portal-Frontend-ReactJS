import { AppBar, Box, Grid, IconButton, Toolbar, Paper, TextField, Typography, Button, makeStyles, createTheme, ThemeProvider, MenuItem } from '@material-ui/core';
import * as React from 'react';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { blue, green } from '@material-ui/core/colors';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import { Link } from 'react-router-dom';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import Menu from '@material-ui/core/Menu';





const useStyles = makeStyles(() => ({



    toolbar: {
        textAlign: "center",


    },
    btn: {
        textAlign: "center",
        margin: "1%",
        marginTop: "3%",


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
            <Box sx={{ flexGrow: 1 }}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Grid container spacing={3} alignItems='center' justifyContent='center' flexGrow='1'>
                        <Grid item xs>
                            <TextField style={{ width: '50%' }} type="search" variant="outlined" placeholder='Search' />
                            <IconButton><SearchIcon /></IconButton>
                        </Grid>
                        <Grid item xs={5} lg={8}>

                            <Typography variant="h4" component="div">Student Potal</Typography>

                        </Grid>
                        <Grid item xs>


                            {/* if not logged in then this part from*/}


                            {/* <ThemeProvider theme={theme}>
                                <Link to="/login" style={{ textDecoration: 'none' }}>
                                    <Button variant="outlined" color="secondary" className={classes.btn}>
                                        Login
                                    </Button>
                                </Link>
                                <Link to="/register" style={{ textDecoration: 'none' }}>
                                    <Button variant="outlined" color="primary" className={classes.btn}>
                                        Register
                                    </Button>
                                </Link>
                            </ThemeProvider> */}


                            {/* if not logged in then this part to this*/}


                            {/* if logged in then this part from this*/}



                            <Grid container spacing={0} alignItems='center' justifyContent='center'>
                                <Grid item xs>
                                    <IconButton >
                                        <NotificationsNoneOutlinedIcon />
                                    </IconButton>
                                </Grid>
                                <div>
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
                                        <Link to="/profile/view" style={{ textDecoration: 'none' }}>
                                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                                        </Link>
                                        <Link to="#" style={{ textDecoration: 'none' }}>
                                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                                        </Link>


                                    </Menu>
                                    <div>
                                        <Typography variant="body2">
                                            username
                                        </Typography>
                                    </div>
                                    <div>
                                        <Typography variant="caption">
                                            usertype
                                        </Typography>
                                    </div>
                                </div>

                            </Grid>

                            {/* if logged in then this part to this*/}


                        </Grid>



                    </Grid>


                </Toolbar>
                <hr />
            </Box>

        </div >

    );
};
export default Header;