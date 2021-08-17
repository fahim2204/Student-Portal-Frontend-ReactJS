import { Button, FormControl, Grid, InputLabel, makeStyles, NativeSelect, Paper, Select, TextField } from '@material-ui/core'
import React, { useState } from 'react'

import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: "75%",
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },

}));


const CreatePosts = () => {


    const classes = useStyles();
    const [state, setState] = useState({
        category: '',
        // name: 'hai',
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };



    return (
        <div>
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={10}>
                    <form>
                        <Paper className={classes.paper}>
                            <h2>Create Post</h2>
                            {/* <Grid item xs={12}> */}
                            <FormControl required variant="outlined" className={classes.formControl}>
                                {/* <Grid item xs={9}> */}
                                <InputLabel >Category</InputLabel>
                                <Select
                                    native
                                    value={state.category}
                                    onChange={handleChange}
                                    label="category"
                                    inputProps={{
                                        name: 'category',
                                        // id: 'outlined-category-native-simple',
                                    }}
                                >
                                    <option aria-label="None" value="" />
                                    <option value={10}>Ten</option>
                                    <option value={20}>Twenty</option>
                                    <option value={30}>Thirty</option>
                                </Select>
                                {/* </Grid> */}
                            </FormControl>
                            {/* </Grid> */}

                            {/* <Grid item xs={12}> */}
                            <TextField required label="Title" variant="outlined" className={classes.formControl} />
                            {/* </Grid> */}
                            {/* <Grid item xs={12}> */}
                            {/* <TextField label="Multiline" id="outlined-multiline-static" required variant="outlined" rows={4} className={classes.formControl} /> */}
                            <TextField
                                required
                                label="Post Content"
                                multiline
                                rows={4}
                                variant="outlined"
                                className={classes.formControl}
                            />
                            {/* </Grid> */}
                            <Grid container spacing={5} justifyContent="center">
                                {/* <Grid item xs={12}> */}
                                <Grid item xs={3}>
                                    <Link to="#" style={{ textDecoration: 'none' }}>
                                        <Button variant="contained" size="large" color="primary">
                                            Post
                                        </Button>
                                    </Link>
                                </Grid>
                                <Grid item xs={5}>
                                    <Link to="/" style={{ textDecoration: 'none' }} >
                                        <Button variant="outlined" size="large" color="secondary">
                                            Cancel
                                        </Button>
                                    </Link>
                                </Grid>
                            </Grid>
                            {/* </Grid> */}


                        </Paper>
                    </form>
                </Grid>
            </Grid>
        </div>
    )
}




export default CreatePosts
