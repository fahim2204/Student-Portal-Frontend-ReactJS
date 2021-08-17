import { Button, FormControl, Grid, InputLabel, makeStyles, NativeSelect, Paper, Select, TextField } from '@material-ui/core'
import React, { useState } from 'react'

import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: "75%",
    },

    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin: theme.spacing(5),
    },

}));


const CreatePosts = () => {


    const classes = useStyles();
    const [state, setState] = useState({
        category: '',
        name: '',
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
                <Grid item xs={12}>
                    <form>
                        <Paper className={classes.paper}>
                            <h1>Create Post</h1>
                            <FormControl required variant="outlined" className={classes.formControl}>
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
                            </FormControl>

                            <TextField required label="Title" variant="outlined" className={classes.formControl} />

                            <TextField
                                required
                                label="Post Content"
                                multiline
                                rows={4}
                                variant="outlined"
                                className={classes.formControl}
                            />
                            <Grid container spacing={5} justifyContent="center">
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
                        </Paper>
                    </form>
                </Grid>
            </Grid>
        </div>
    )
}




export default CreatePosts
