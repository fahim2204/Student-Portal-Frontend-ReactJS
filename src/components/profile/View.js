
import React, { useEffect, useState } from 'react'
import {
    Link,
    useParams
} from "react-router-dom"
import axios from 'axios';

import { Breadcrumbs, CssBaseline, Typography, Container, makeStyles, Paper, Card, CardContent, Grid, Box, Button, Fab } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';
import OwnPost from './OwnPost';
import { css } from "@emotion/react";
import { ClipLoader, HashLoader } from "react-spinners";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        color: theme.palette.text.secondary,
    },
    username: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
        alignItems: "center",
    },
    margin: {
        margin: "20px auto",
    },

}));


//! For Loading animation -> Start
const override = css`
display: block;
margin: 0 auto;
border-color: green;
`;
const LoadinAnimeStyle = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
//! For Loading animation -> End


const View = (props) => {

    let { uname } = useParams();

    let [profile, setProfile] = useState([]);
    let [loading, setLoading] = useState(true);


    const [ownPosts, setownPosts] = useState([]);

    const regMsgColor = { color: "green", padding: "10px" }
    const [regMsg, setRegMsg] = useState("");



    const getProfileData = () => {

        axios.get(`http://127.0.0.1:8000/api/profile/${uname}`)
            .then(res => {
                setProfile(res.data);
                setownPosts(res.data.posts)
                setLoading(false);
            });

    }

    useEffect(() => {
        getProfileData();

    }, [])

    console.log(profile.posts);


    const classes = useStyles();
    

    const [showOwnPost, setShowOwnPost] = useState(false);
   

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
                            body={ownPosts.pbody}
                            view={ownPosts.views}
                            comment={ownPosts.comments.length} />
                        // <>Hello</>
                    )

                })}

            </div>
        );
    }


    return (
        <>
            <div style={LoadinAnimeStyle}>
                <HashLoader loading={loading} color='#39E1FA' size={200} css={override} />
            </div>
            {!loading && <>
                <div>
                    <Breadcrumbs aria-label="breadcrumb" className={classes.margin}>
                        <Link color="inherit" to="/">
                            Home
                        </Link>
                        <Typography color="textPrimary">Profile</Typography>
                        <Typography color="textPrimary">{uname}</Typography>
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
                                                                    borderRadius: 75,
                                                                }} />
                                                            </Box>
                                                        </Box>
                                                    </Grid>
                                                    <Grid item xs={12} >
                                                        <h2 className={classes.username}>@{profile.user.uname}</h2>
                                                        <h4 className={classes.username}>{profile.user.type}</h4>
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
                                                        <Paper className={classes.paper}>
                                                            {profile.user.type === 'moderator' ? profile.user.moderator.name : ""}
                                                            {profile.user.type === 'studuent' ? profile.user.studuent.name : ""}
                                                            {profile.user.type === 'admin' ? profile.user.admin.name : ""}
                                                            {profile.user.type === 'instructor' ? profile.user.instructor.name : ""}
                                                        </Paper>
                                                    </Grid>
                                                    <Grid item xs={4} sm={3} lg={2}>
                                                        <Paper className={classes.paper}><b>Email:</b></Paper>
                                                    </Grid>
                                                    <Grid item xs={8} sm={9} lg={10}>
                                                        <Paper className={classes.paper}>
                                                            {profile.user.type === 'moderator' ? profile.user.moderator.email : ""}
                                                            {profile.user.type === 'studuent' ? profile.user.studuent.email : ""}
                                                            {profile.user.type === 'admin' ? profile.user.admin.email : ""}
                                                            {profile.user.type === 'instructor' ? profile.user.instructor.email : ""}
                                                        </Paper>
                                                    </Grid>
                                                    <Grid item xs={4} sm={3} lg={2}>
                                                        <Paper className={classes.paper}><b>Phone:</b></Paper>
                                                    </Grid>
                                                    <Grid item xs={8} sm={9} lg={10}>
                                                        <Paper className={classes.paper}>
                                                            {profile.user.type==='moderator' ? profile.user.moderator.contact:""}
                                                        {profile.user.type==='studuent' ? profile.user.studuent.contact:""}
                                                        {profile.user.type==='admin' ? profile.user.admin.contact:""}
                                                        {profile.user.type==='instructor' ? profile.user.instructor.contact:""}
                                                        </Paper>
                                                    </Grid>
                                                    <Grid item xs={4} sm={3} lg={2}>
                                                        <Paper className={classes.paper}><b>Address:</b></Paper>
                                                    </Grid>
                                                    <Grid item xs={8} sm={9} lg={10}>
                                                        <Paper className={classes.paper}>
                                                        {profile.user.type==='moderator' ? profile.user.moderator.address:""}
                                                        {profile.user.type==='studuent' ? profile.user.studuent.address:""}
                                                        {profile.user.type==='admin' ? profile.user.admin.address:""}
                                                        {profile.user.type==='instructor' ? profile.user.instructor.address:""}
                                                        </Paper>
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




            </>}

        </>

    )
}

export default View
