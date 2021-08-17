
import React, { useEffect, useState } from 'react'
import {
    Link
} from "react-router-dom"

import { Breadcrumbs, CssBaseline, Typography, Container, makeStyles, Paper, Card, CardContent, Grid, Box, Button, Fab } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';
import OwnPost from './OwnPost';

// import Container from '@material-ui/core/Container';


// import "./img.jpg"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        // textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    username: {
        // padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        alignItems: "center",
    },
    // imgBorder: {
    //     bgcolor: 'background.paper',
    //     borderColor: 'text.primary',
    //     m: 1,
    //     border: 1,
    //     style: { width: '5rem', height: '5rem' },
    //     alignItems: "center",
    // },

    margin: {
        margin: "20px auto",
    },

}));



const View = () => {

    const regMsgColor = { color: "green", padding: "10px" }
    const [regMsg, setRegMsg] = useState("");
    useEffect(() => {

        const search = window.location.search;
        const params = new URLSearchParams(search);
        const foo = params.get('msg');
        setRegMsg(foo)
        // console.log(regMsg)

    }, [])


    const classes = useStyles();
    // const grid = { margin: "10px auto", padding: "10px", weight: "90%"  }
    // const paperStyle = { padding: "10px", margin: "auto" }
    // const headerStyle = { margin: '10px' }
    // const margin = { margin: "10px auto" }
    // const imgStyle = {
    //     bgcolor: 'background.paper',
    //     borderColor: 'text.primary',
    //     m: 1,
    //     border: 1,
    //     style: { width: '5rem', height: '5rem' },
    // }



    const [showOwnPost, setShowOwnPost] = useState(false);
    const [ownPosts, setownPosts] = useState(
        [{
            title: "title from db",
            body: "body from db",
            view: "viewCount from db",
            comment: "comment from db",
        },
        {
            title: "title from db",
            body: "body from db",
            view: "viewCount from db",
            comment: "comment from db",
        }
        ]
    );

    let imageName = require('./img.jpg')



    const toggleOwnPostHandler = () => {

        const doesShow = showOwnPost;
        setShowOwnPost(!doesShow);
    }

    let posts = null;

    if (showOwnPost) {
        posts = (
            <div>
                {ownPosts.map(ownPosts => {

                    return (
                        <OwnPost title={ownPosts.title}
                            body={ownPosts.body}
                            view={ownPosts.view}
                            comment={ownPosts.comment} />
                    )

                })}

            </div>
        );
    }


    return (
        <div>
            <Breadcrumbs aria-label="breadcrumb" className={classes.margin}>
                <Link color="inherit" to="/">
                    Home
                </Link>
                <Typography color="textPrimary">Profile</Typography>
                <Typography color="textPrimary">Username</Typography>
            </Breadcrumbs>
            <CssBaseline />
            <Grid item xs={12}>
                <Container>
                

                    {/* <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                > */}
                    <div className={classes.root}>

                        <Grid container spacing={3} >
                            <Grid item xs={12} sm={4} md={4}>
                                <Card >
                                    <CardContent >
                                        <Grid container spacing={3} >
                                            <Grid item xs={12}>
                                                <Box display="flex" justifyContent="center">
                                                    <Box borderRadius="50%" className={classes.imgBorder} >
                                                        <img src={imageName.default} style={{
                                                            alignSelf: 'center',
                                                            height: 150,
                                                            width: 150,
                                                            borderWidth: 1,
                                                            borderRadius: 75
                                                        }} />
                                                    </Box>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} >
                                                <h2 className={classes.username}>@Username</h2>
                                                <h4 className={classes.username}>Account Type</h4>
                                            </Grid>

                                            <Grid item xs={12} className={classes.username}>
                                                <Link to="/profile/edit">
                                                    <Fab >

                                                        <EditIcon />

                                                    </Fab>
                                                </Link>
                                                
                                            </Grid>
                                            <Grid item xs={12} className={classes.username}>
                                            <span style={regMsgColor} ><b>{regMsg}</b></span>
                                            </Grid>

                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={8} md={8}>
                                <Card >
                                    <CardContent >
                                        <Grid container spacing={3}>
                                            <Grid item xs={4} sm={3} lg={2}>
                                                <Paper className={classes.paper}><b>Full Name:</b></Paper>
                                            </Grid>
                                            <Grid item xs={8} sm={9} lg={10}>
                                                <Paper className={classes.paper}>Full name here</Paper>
                                            </Grid>
                                            <Grid item xs={4} sm={3} lg={2}>
                                                <Paper className={classes.paper}><b>Email:</b></Paper>
                                            </Grid>
                                            <Grid item xs={8} sm={9} lg={10}>
                                                <Paper className={classes.paper}>Email here</Paper>
                                            </Grid>
                                            <Grid item xs={4} sm={3} lg={2}>
                                                <Paper className={classes.paper}><b>Phone:</b></Paper>
                                            </Grid>
                                            <Grid item xs={8} sm={9} lg={10}>
                                                <Paper className={classes.paper}>Phone no here</Paper>
                                            </Grid>
                                            <Grid item xs={4} sm={3} lg={2}>
                                                <Paper className={classes.paper}><b>Address:</b></Paper>
                                            </Grid>
                                            <Grid item xs={8} sm={9} lg={10}>
                                                <Paper className={classes.paper}>Address here</Paper>
                                            </Grid>
                                        </Grid>

                                    </CardContent>
                                </Card>
                                <Grid>

                                    <Card className={classes.margin} color="primary">

                                        <CardContent >
                                            <Grid container spacing={3}>
                                                <Button className={classes.margin} onClick={toggleOwnPostHandler} variant="contained" color="primary">
                                                    Toggle Own Post
                                                </Button>
                                            </Grid>
                                            {
                                                posts
                                            }
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>

                        </Grid>
                    </div>
                </Container>
            </Grid>

        </div>

    )
}

export default View
