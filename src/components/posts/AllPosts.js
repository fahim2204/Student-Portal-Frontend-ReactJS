import { Box, Chip, Fab, Grid, IconButton, makeStyles, Paper, TextField, Typography, Button, ButtonGroup } from '@material-ui/core';
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
//? Time Format Change
import TimeAgo from 'javascript-time-ago'
import ReactTimeAgo from 'react-time-ago'
import en from 'javascript-time-ago/locale/en'
//? Read More
import ReadMoreReact from 'read-more-react';


const useStyles = makeStyles((theme) => ({

    paper: {
        padding: theme.spacing(2),
        borderRadius: "10px",
        color: theme.palette.text.secondary,
        marginBottom: theme.spacing(3),
        // margin: theme.spacing(5),
    },
    postsHeader: {
        marginTop: "-10px",
        marginBottom: "5px",
        borderBottom: "1px solid gray"
    },
    postsFooter: {
        marginTop: "8px",
    }

}));

TimeAgo.addDefaultLocale(en)

const AllPosts = (props) => {
    const classes = useStyles();

    const [vote, setVote] = React.useState('');

    const handleVote = (event, status) => {
        event.preventDefault();
        setVote(status);
    };


    return (
        <>
            <Paper className={classes.paper} elevation={5}>
                <Grid container spacing={1} className={classes.postsHeader}>
                    <Grid item>
                        {props.category}
                    </Grid>
                    <Grid item>
                        Posted By
                    </Grid>
                    <Grid item>
                        <Link to={`/profile/${props.postUser}`} style={{ textDecoration: 'none' }}>
                            <Chip
                                size="small"
                                icon={<FaceIcon />}
                                label={props.postUser}
                                clickable
                                color="primary"
                                variant="outlined"
                            />
                        </Link>
                    </Grid>
                    <Grid item>
                        <ReactTimeAgo date={props.postTime} locale="en-US" />
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <h2>{props.title}</h2>
                </Grid>
                <Grid container spacing={1}>
                    <Typography variant="body1" color="initial">
                        <ReadMoreReact text={props.body} />
                    </Typography>
                </Grid>
                <Grid container spacing={1} className={classes.postsFooter}>
                    <ButtonGroup size="small" variant="contained" color="default" aria-label="">
                        <Button>u</Button>
                        <Button>d</Button>

                    </ButtonGroup>
                </Grid>
            </Paper>

        </>

    )
}

export default AllPosts
