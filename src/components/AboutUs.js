import React from 'react'
import { Card, CardContent, Container, makeStyles, Paper } from '@material-ui/core'

// const useStyles = makeStyles({
//     card: {
//         width: "100%",
//         marginTop: "40px",
//         justifyContent: "center",
//         marginBottom: "40px",

//     },
// });

const AboutUs = () => {
    
    // const classes = useStyles();
    return (
        
        <div>
            
                <Container justifyContent="center">
                    <Paper>
                    <Card >
                        <CardContent>
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-12 col-md-6">
                                        <h6>About</h6>
                                        <p className="text-justifyContent">Student Portal is an initiative to help Students with the answer.Biggest online
                                            learning platform in Bangladesh! Post questions about anything, get help from experts and share
                                            expertise with others.</p>
                                    </div>
                                    <div className="col-xs-6 col-md-3">
                                        <h6>Categories</h6>
                                        <ul className="footer-links">
                                            <li><a href="{{ route('posts.view.cat', 'math') }}">Math</a></li>
                                            <li><a href="{{ route('posts.view.cat', 'physics') }}">Physics</a></li>
                                            <li><a href="{{ route('posts.view.cat', 'chemistry') }}">Chemistry</a></li>
                                            <li><a href="{{ route('posts.view.cat', 'biology') }}">Biology</a></li>
                                            <li><a href="{{ route('posts.view.cat', 'progamming') }}">Progamming</a></li>
                                            <li><a href="{{ route('posts.view.cat', 'gk') }}">General Knowledge</a></li>
                                            <li><a href="{{ route('posts.view.cat', 'economics') }}">Economics</a></li>
                                            <li><a href="{{ route('posts.view.cat', 'exam-prep') }}">Exam Preperation</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-xs-6 col-md-3">
                                        <h6>Quick Links</h6>
                                        <ul className="footer-links">
                                            <li><a href="http://scanfcode.com/about/">About Us</a></li>
                                            <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
                                            <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
                                            <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
                                            <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
                                            @if (session()-&gt;get('type')==='admin')
                                            <li><a href="{{ route('admin.dashboard') }}"><b>Admin Panel</b></a></li>
                                            @elseif (session()-&gt;get('type')==='moderator')
                                            <li><a href="{{ route('moderator.dashboard') }}"><b>Moderator Panel</b></a></li>
                                            @endif
                                        </ul>
                                    </div>

                                </div>
                            </div>

                        </CardContent>

                    </Card>
                    </Paper>
                </Container>
            

        </div>
    )
}

export default AboutUs
