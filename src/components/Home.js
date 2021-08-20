import Header from './Header';
import Footer from './Footer';
import Container from '@material-ui/core/Container'
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
// import HomeCarousel from './HomeCarousel';
import Fade from 'react-reveal/Fade';
import img from './img.png';
import card1 from './card1.jpg'
import card2 from './card2.jpg'

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

    return (
        <>
            <Header />
            <Container maxWidth="lg">

                {sessionStorage.getItem('uname')}
                {sessionStorage.getItem('type')}
                {sessionStorage.getItem('token')}
                {sessionStorage.getItem('id')}

                <Grid container justify='center'>
                    <Grid item xs={12}>

                        <div>
                            <Fade up>
                                <Box style={{
                                    backgroundImage: `url(${img})`,
                                    backgroundSize: "cover",
                                    height: '500px',
                                    // alignSelf: "center",
                                    // justify: 'center'
                                    // width: 150,
                                }}>
                                    {/* <Typography variant="h5" gutterBottom color="text.primary">
                                        <Box color="text.primary">text.secondary</Box>
                                    </Typography> */}
                                </Box>
                            </Fade>
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
                            All Posts
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        </Fade>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Fade right>
                            <Footer />
                        </Fade>
                    </Grid>



                </Grid>


            </Container>


            {/* <Footer/> */}
        </>
    );
};
export default Home;