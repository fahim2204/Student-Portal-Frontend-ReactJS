import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'
import LetteredAvatar from 'react-lettered-avatar';
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, makeStyles, Paper, Typography, TextField, Avatar } from '@material-ui/core';
// import HomeCarousel from './HomeCarousel';
// import { Helmet } from 'react-helmet'
import Fade from 'react-reveal/Fade';
import img from './img.png';
import card1 from './card1.jpg'
import card2 from './card2.jpg'
import Pulse from 'react-reveal/Pulse';
import { useHistory, useParams } from 'react-router-dom';
import AboutUs from './AboutUs';
import SinglePost from './posts/SinglePost';
import AllPosts from './posts/AllPosts';
import { Alert } from '@material-ui/lab';
import Flash from 'react-reveal/Flash';

import { css } from "@emotion/react";
import { ClipLoader, HashLoader } from "react-spinners";

const useStyles = makeStyles((theme) => ({
    createPost: {
        borderRadius: "15px",
        padding: "10px",
        margin: "6px",
        marginBottom: "16px",
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

const Home = () => {
    let [allPosts, setAllPosts] = useState([]);
    let [loading, setLoading] = useState(true);
    let history = new useHistory();


    const getAllPosts = () => {

        axios.get(`http://127.0.0.1:8000/api/post`)
            .then(res => {
                setAllPosts(res.data);
                setLoading(false);
            });

    }

    useEffect(() => {
        getAllPosts();
        document.title = "Student Portal - Home"
        console.log(allPosts);

        const search = window.location.search;
        const params = new URLSearchParams(search);
        const foo = params.get('msg');
        setRegMsg(foo)

    }, []);

    const handlePostCreate = () => {
        history.push('/posts/create');
    }


    const classes = useStyles();
    const [regMsg, setRegMsg] = useState("");



    return (
        <>

            <Header />
            <Container maxWidth="lg">
                <Grid container spacing={1}>
                    <Grid item sm={8} xs={12}>

                        <div style={LoadinAnimeStyle}>
                            <HashLoader loading={loading} color='#39E1FA' size={150} css={override} />
                        </div>
                        {!loading && <>
                            {sessionStorage.getItem('uname') !== null ? <>
                                <Grid container spacing={1}>
                                    <Grid item sm={8} xs={12}>
                                        <Paper elevation={4} className={classes.createPost}>
                                            <Grid container spacing={8}>
                                                <Grid item sm={1} xs={2}>
                                                    <LetteredAvatar
                                                        name={sessionStorage.getItem('uname')}
                                                    />
                                                </Grid>
                                                <Grid item sm={7} xs={10}>
                                                    <TextField
                                                        id="postcreate"
                                                        label=""
                                                        value={"Type you question here..."}
                                                        variant="outlined"
                                                        size="small"
                                                        onChange={handlePostCreate}
                                                        onClick={handlePostCreate}
                                                    />

                                                </Grid>
                                            </Grid>
                                        </Paper>
                                    </Grid>
                                </Grid>


                            </> : <></>}
                            {allPosts.map(post => {
                                return (
                                    <Fade left>
                                        <AllPosts
                                            title={post.title}
                                            category={post.category.name}
                                            postUser={post.user.uname}
                                            postTime={post.created_at}
                                            body={post.pbody}
                                            view={post.views}
                                            pid={post.id}
                                            votes={post.upvotes.length-post.downvotes.length}
                                            comment={post.comments.length}
                                        />
                                    </Fade>


                                )
                            })}

                        </>}

                    </Grid>
                    <Grid item sm={4} xs={12} >
                        <Fade right>
                            <AboutUs/>
                        </Fade>
                    </Grid>
                </Grid>
            </Container>

            <Footer />
        </>
    );
};
export default Home;