import { Box, Chip, Container, Fab, Grid, IconButton, makeStyles, Paper, TextField } from '@material-ui/core';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import SendIcon from '@material-ui/icons/Send';
import FaceIcon from '@material-ui/icons/Face';


import Comments from './Comments';


const useStyles = makeStyles((theme) => ({

    paper: {
        padding: theme.spacing(2),
        // textAlign: 'center',
        color: theme.palette.text.secondary,
        margin: theme.spacing(5),
    },

}));



const SinglePost = () => {



    const classes = useStyles();

    const [vote, setVote] = React.useState('');

    const handleVote = (event, status) => {
        event.preventDefault();
        setVote(status);
    };

    const [comment, setcomment] = useState(
        [{

            body: "body from db",
            username: "username from db",
            time: "time from db",
        },
        {
            body: "body from db",
            username: "username from db",
            time: "time from db",
        }
        ]
    );


    let allComments = (
        <div>
            {comment.map(comment => {

                return (
                    <Comments
                        body={comment.body}
                        username={comment.username}
                        time={comment.time} />
                )

            })}

        </div>
    );


    return (
        <div>
            {/* <Container maxWidth="lg"> */}
                <Grid container spacing={2} justifyContent="center" >
                    <Grid item xs={12} sm={8}>
                        <Paper className={classes.paper} elevation={5}>



                            <Grid container spacing={1}>

                                <Grid item xs={4} md={3} lg={2}>
                                    <b>Post category</b>
                                </Grid>

                                <Grid item xs={4} md={3} lg={2}>
                                    <Link to="#" style={{ textDecoration: 'none' }}>
                                        <Chip
                                            size="small"
                                            icon={<FaceIcon />}
                                            label="username"
                                            clickable
                                            color="primary"
                                            variant="outlined"
                                        />
                                    </Link>
                                </Grid>

                                <Grid item xs={4} md={3} lg={2}>
                                    <Box color="success.main"><b>post date</b></Box>
                                </Grid>
                                <Grid item xs={1} md={1} lg={4} />
                                <Grid item xs={12} md={2} lg={2}>
                                    <IconButton size="small" aria-label="delete" className={classes.margin}>
                                        <EditIcon />
                                    </IconButton>

                                    <IconButton size="small" aria-label="delete" className={classes.margin}>
                                        <DeleteIcon />
                                    </IconButton>
                                </Grid>
                                <br /><br />

                            </Grid>
                            <hr />
                            <Grid item xs={12}>
                                <h2>Post title here</h2>
                            </Grid>
                            <Grid item xs={12}>
                                post Content
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Grid>
                            <br /><hr />

                            <Grid container spacing={1}>
                                <Grid item xs={6} sm={5} md={4} lg={2}>

                                    <ToggleButtonGroup value={vote} exclusive onChange={handleVote}>
                                        <ToggleButton value="upvote" aria-label="upvote">
                                            <ArrowUpwardOutlinedIcon />100
                                        </ToggleButton>
                                        <ToggleButton value="downvote" aria-label="downvote">
                                            <ArrowDownwardOutlinedIcon />
                                        </ToggleButton>
                                    </ToggleButtonGroup>


                                </Grid>
                                <Grid item xs={2} sm={2} lg={1}>

                                    <div>
                                        <CommentOutlinedIcon />
                                    </div>
                                    <div>
                                        num
                                    </div>

                                </Grid>
                                <Grid item xs={2} sm={2} lg={1}>

                                    <div>
                                        <VisibilityOutlinedIcon />
                                    </div>
                                    <div>
                                        num
                                    </div>

                                </Grid>




                            </Grid>


                        </Paper>



                        {/* comment section */}



                        <Paper className={classes.paper} elevation={3}>
                            <Grid container spacing={3}>
                                <Grid item xs={9} md={10} lg={11}>
                                    <TextField
                                        style={{ width: "100%" }}
                                        id="outlined-multiline-static"
                                        label="Add Comment"
                                        multiline
                                        // rows={2}
                                        // defaultValue="Default Value"
                                        variant="outlined"
                                    />

                                </Grid>
                                <Grid item xs={3} md={2} lg={1}>
                                    <Fab color="primary" aria-label="add" className={classes.margin}>
                                        <SendIcon />
                                    </Fab>

                                </Grid>
                                {/* <Grid item xs={1} /> */}


                                <Grid item xs={12}>
                                    <h3>Comments</h3>
                                </Grid>

                                <Grid item xs={12}>
                                    {allComments}
                                </Grid>

                            </Grid>

                        </Paper>

                    </Grid>
                </Grid>
            {/* </Container> */}
        </div >
    )
}

export default SinglePost
