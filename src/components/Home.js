import Header from './Header';
import Footer from './Footer';
import Container from '@material-ui/core/Container'
import { Box, Grid, Paper, Typography } from '@material-ui/core';
// import HomeCarousel from './HomeCarousel';
import Fade from 'react-reveal/Fade';
import img from './image.jpg';

const Home = () => {
    return (
        <>
            <Header />
            <Container maxWidth="xl">

                {sessionStorage.getItem('uname')}
                {sessionStorage.getItem('type')}
                {sessionStorage.getItem('token')}
                {sessionStorage.getItem('id')}

                <Grid container justify='center'>
                    <Grid item xs={12}>

                        <div>
                            <Fade up>
                                <Paper style={{
                                    backgroundImage: `url(${img})`,
                                    height: '500px',
                                    alignSelf: 'center',
                                    height: 550,
                                    // width: 150,
                                }}>
                                    <Typography variant="h5" gutterBottom color="text.primary">
                                        <Box color="text.primary">text.secondary</Box>
                                    </Typography>
                                </Paper>
                            </Fade>
                        </div>
                    </Grid>
                    <Grid item xs={6}>

                        <div>
                            <Fade left>

                            </Fade>
                        </div>
                    </Grid>
                    <Grid item xs={6}>

                        <div>
                            <Fade right>
                                <h1>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</h1>
                                {/* <img src={img} alt="img"></img> */}
                                {/* import img here */}
                            </Fade>
                        </div>
                    </Grid>

                </Grid>

            </Container>


            {/* <Footer/> */}
        </>
    );
};
export default Home;