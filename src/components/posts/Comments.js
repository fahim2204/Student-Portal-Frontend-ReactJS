import { Box, Divider, Grid, makeStyles, Paper } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: 16,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    paper: {
        padding: theme.spacing(1),
        // textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const Comments = (props) => {
    const classes = useStyles();
    return (
        <div>
            <Paper className={classes.paper} elevation={2}>
                <Grid container spacing={2} >
                    <Grid item xs={6}>
                        <Link to="#" style={{ textDecoration: 'none' }}>
                            <b>
                                <Box color="success.main">@{props.username}
                                </Box>
                            </b>
                        </Link>
                    </Grid>

                    <Grid item xs={6} >

                        <Box color="info.main">
                            <b>
                            @{props.time}
                            </b>
                        </Box>
                    </Grid>
                    <Grid item xs={12} >
                        {props.body}
                    </Grid>


                </Grid>
            </Paper>
        </div>
    )
}

export default Comments
