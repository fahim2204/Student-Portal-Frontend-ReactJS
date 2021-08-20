import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Collapse, Grid, IconButton, makeStyles, Paper, Snackbar, Typography } from '@material-ui/core';
// import HomeCarousel from './HomeCarousel';
// import { Helmet } from 'react-helmet'
import Fade from 'react-reveal/Fade';
import img from './img.png';
import card1 from './card1.jpg'
import card2 from './card2.jpg'
import Pulse from 'react-reveal/Pulse';
import AboutUs from './AboutUs';
import SinglePost from './posts/SinglePost';
import AllPosts from './posts/AllPosts';

import { Alert } from '@material-ui/lab';
import Flash from 'react-reveal/Flash';
import CloseIcon from '@material-ui/icons/Close';

import { css } from "@emotion/react";
import { ClipLoader, HashLoader } from "react-spinners";

const useStyles = makeStyles({
    card: {
        width: "100%",
        marginTop: "40px",
        justifyContent: "center",
        marginBottom: "40px",

    },

});

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


    const getAllPosts = () => {

        axios.get(`http://127.0.0.1:8000/api/posts`)
            .then(res => {
                setAllPosts(res.data);
                setLoading(false);
            });

    }



    useEffect(() => {
        getAllPosts();
        document.title = "Student Portal - Home"
        console.log(allPosts);
    }, []);
    const classes = useStyles();
    const [regMsg, setRegMsg] = useState("");

    useEffect(() => {

        const search = window.location.search;
        const params = new URLSearchParams(search);
        const foo = params.get('msg');
        setRegMsg(foo)
        // console.log(regMsg)

    }, [])

    const [open, setOpen] = useState(true);

    // const handleClose = (event, reason) => {
    //     if (reason === 'clickaway') {
    //         return;
    //     }

    //     setOpen(false);
    // };

    return (
        <>

            <Header />
            <Container maxWidth="lg">
                <Grid container spacing={1}>
                {regMsg === null ?  null 
                    :<Grid item xs={12}>
                        <Collapse in={open}>
                            <Alert
                                action={
                                    <IconButton
                                        aria-label="close"
                                        color="inherit"
                                        size="small"
                                        onClick={() => {
                                            setOpen(false);
                                        }}
                                    >
                                        <CloseIcon fontSize="inherit" />
                                    </IconButton>
                                }
                            >
                                {regMsg}
                            </Alert>
                        </Collapse>
                    </Grid>}
                    <Grid item sm={8} xs={12}>
                        <div style={LoadinAnimeStyle}>
                            <HashLoader loading={loading} color='#39E1FA' size={200} css={override} />
                        </div>
                        {!loading && <>
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
                                            comment={post.comments}

                                        />
                                    </Fade>


                                )
                            })}

                        </>}

                    </Grid>
                    <Grid item sm={4} xs={12} >
                        <Fade right>
                            <AboutUs className={classes.card} />
                        </Fade>
                    </Grid>
                </Grid>
                {/* <Container maxWidth="lg">
                <Grid container justifyContent='center'>

                    <Grid item xs={12}>
                        <div>
                            <Pulse>
                                <Box style={{
                                    backgroundImage: `url(${img})`,
                                    backgroundSize: "cover",
                                    height: '500px',
                                    alignSelf: "center",
                        
                                }}>
                                   
                                </Box>
                            </Pulse>
                        </div>
                    </Grid>
                    <Grid item xs={5}>

                        <div>
                            <Fade left>
                                <Card className={classes.card}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="Contemplative Reptile"
                                            height="140"
                                            image={card1}
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Lizard
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                across all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            Share
                                        </Button>
                                        <Button size="small" color="primary">
                                            Learn More
                                        </Button>
                                    </CardActions>
                                </Card>

                            </Fade>
                        </div>
                    </Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={5} >

                        <div>
                            <Fade right>
                                <Card className={classes.card}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="Contemplative Reptile"
                                            height="140"
                                            image={card2}
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Lizard
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                across all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            Share
                                        </Button>
                                        <Button size="small" color="primary">
                                            Learn More
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Fade>
                        </div>
                    </Grid>


                    <Grid item xs={12} md={8}>
                        <Fade up>

                            {/* <AllPosts/> */}

                {/* <HashLoader loading={loading} color='#39E1FA' size={200} css={override} /> */}

                {/* {!loading && <>hello</>} */}
                {/* {loading?<>hello</>:<>hello</>} */}
                {/* {allPosts.map(post => {
                                return (
                                    // <AllPosts />
                                    <>hello</>
                                )

                            })} */}





                {/* </Fade>
                    </Grid>
                    {/* <Grid item md={1}/> */}
                {/* <Grid item xs={12} md={4}>
                        <Grid container justifyContent='flex-end'>

                            <Fade right>
                                <AboutUs className={classes.card} />
                            </Fade>
                        </Grid>
                    </Grid>



                </Grid>


            </Container> */}



            </Container>

            <Footer />
        </>
    );
};
export default Home;