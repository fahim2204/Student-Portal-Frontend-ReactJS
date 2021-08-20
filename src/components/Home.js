import Header from './Header';
import Footer from './Footer';
import Container from '@material-ui/core/Container'
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
// import HomeCarousel from './HomeCarousel';
import Fade from 'react-reveal/Fade';
import img from './img.png';
import card1 from './card1.jpg'
import card2 from './card2.jpg'
import Pulse from 'react-reveal/Pulse';
import AboutUs from './AboutUs';
import SinglePost from './posts/SinglePost';
import AllPosts from './posts/AllPosts';
import { useEffect, useState } from 'react';
import { Alert } from '@material-ui/lab';
import Flash from 'react-reveal/Flash';

const useStyles = makeStyles({
    card: {
        width: "100%",
        marginTop: "40px",
        justify: "center",
        marginBottom: "40px",

    },

});

const Home = () => {

    const classes = useStyles();
    const [regMsg, setRegMsg] = useState("");

    useEffect(() => {

        const search = window.location.search;
        const params = new URLSearchParams(search);
        const foo = params.get('msg');
        setRegMsg(foo)
        // console.log(regMsg)

    }, [])

    return (
        <>
            <Header />
            <Container maxWidth="lg">

                {sessionStorage.getItem('uname')}
                {sessionStorage.getItem('type')}
                {sessionStorage.getItem('token')}
                {sessionStorage.getItem('id')}

                <Grid container justify='center'>
                    {regMsg === null ?
                        null
                        :
                        <Grid item xs={12}>
                            <Flash>
                                <Alert severity="success">{regMsg}</Alert>
                            </Flash>
                        </Grid>

                    }
                    <Grid item xs={12}>

                        <div>
                            <Pulse>
                                <Box style={{
                                    backgroundImage: `url(${img})`,
                                    backgroundSize: "cover",
                                    height: '500px',
                                    alignSelf: "center",
                                    // position: 'fixed',
                                    // justify: 'center'
                                    // width: 150,
                                }}>
                                    {/* <Typography variant="h5" gutterBottom color="text.primary">
                                        <Box color="text.primary">text.secondary</Box>
                                    </Typography> */}
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
                            <AllPosts />
                        </Fade>
                    </Grid>
                    {/* <Grid item md={1}/> */}
                    <Grid item xs={12} md={4}>
                        <Grid container justify='flex-end'>
                            <Fade right>
                                <AboutUs className={classes.card} />
                            </Fade>
                        </Grid>
                    </Grid>



                </Grid>


            </Container>


            <Footer />
        </>
    );
};
export default Home;