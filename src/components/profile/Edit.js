import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { Button, Grid, InputAdornment, TextField } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import axios from 'axios';
import PersonIcon from '@material-ui/icons/Person';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import PhoneIcon from '@material-ui/icons/Phone';
import ContactMailOutlinedIcon from '@material-ui/icons/ContactMailOutlined';
import { useHistory, useParams } from 'react-router-dom';

function TabPanel(props) {


    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`nav-tabpanel-${index}`}
            aria-labelledby={`nav-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    };
}

function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    button: {
        margin: theme.spacing(1),
    },
}));
const Edit = () => {

    let { uname } = useParams();
    const [name, setname] = useState("");

    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [address, setAddress] = useState("");



    const [nameValidation, setNameValidation] = useState("");
    const [passwordValidation, setPasswordValidation] = useState("");
    const [cpasswordValidation, setCpasswordValidation] = useState("");
    const [emailValidation, setEmailValidation] = useState("");
    const [contactValidation, setContactValidation] = useState("");
    const [addressValidation, setAddressValidation] = useState("");
    const [nameValidationText, setNameValidationText] = useState(false);
    const [passwordValidationText, setPasswordValidationText] = useState(false);
    const [cpasswordValidationText, setCpasswordValidationText] = useState(false);
    const [emailValidationText, setEmailValidationText] = useState(false);
    const [contactValidationText, setContactValidationText] = useState(false);
    const [addressValidationText, setAddressValidationText] = useState(false);
    const [regMsg, setRegMsg] = useState("");
    const regMsgColor = { color: "green", padding: "10px" }


    useEffect(() => {
        const search = window.location.search;
        const params = new URLSearchParams(search);
        const foo = params.get('msg');
        setRegMsg(foo)



        axios.get(`http://127.0.0.1:8000/api/profile/${uname}`)
        .then(res => {
            setname(res.data.profileInfo.name)
            setEmail(res.data.profileInfo.email)
            setContact(res.data.profileInfo.contact)
            setAddress(res.data.profileInfo.address)
            setPassword()
        });

    }, [])


    const nameInputChangeHandler = event => {
        setname(event.target.value);
    };
    const passwordInputChangeHandler = event => {
        setPassword(event.target.value);
    };
    const confirmPasswordInputChangeHandler = event => {
        setCpassword(event.target.value);
    };
    const emailInputChangeHandler = (event) => {
        setEmail(event.target.value);
    };
    const contactInputChangeHandler = event => {
        setContact(event.target.value);
    };
    const addressInputChangeHandler = event => {
        setAddress(event.target.value);
    };

    let history = useHistory();


    const formSubmissionHandlerBasic = (event) => {
        event.preventDefault();

        let formData = new FormData()
        formData.append('name', name)
        formData.append('email', email)
        formData.append('contact', contact)
        formData.append('address', address)


        if (name === "" || email === "" || contact === "" || address === "") {
            if (name.length < 3) {
                setNameValidation("Full Name is not Valid")
                setNameValidationText(true)
            } else {
                setNameValidation("")
                setNameValidationText(false)
            }
            if (!/\S+@\S+\.\S+/.test(email)) {
                setEmailValidation("Email is not Valid")
                setEmailValidationText(true)
            } else {
                setEmailValidation("")
                setEmailValidationText(false)
            }
            if (!/(^([+]{1}[8]{2}|0088)?(01){1}[3-9]{1}\d{8})$/.test(contact)) {
                setContactValidation("Phone Number is not Valid")
                setContactValidationText(true)
            } else {
                setContactValidation("")
                setContactValidationText(false)
            }
            if (address.length < 3) {
                setAddressValidation("Address is not Valid")
                setAddressValidationText(true)
            } else {
                setAddressValidation("")
                setAddressValidationText(false)
            }
        }
        else {

            setEmailValidationText(false)
            setEmailValidation("")

            setAddressValidation("")
            setAddressValidationText(false)
            setContactValidation("")
            setContactValidationText(false)

            setNameValidation("")
            setNameValidationText(false)


            history.push("/profile/view?msg=Update%20Success")
        }

    };




    const formSubmissionHandlerPassword = (event) => {
        event.preventDefault();

        let formData = new FormData()

        formData.append('password', password)
        formData.append('cpassword', cpassword)


        if (password === "" || cpassword === "" || password !== cpassword) {

            if (!/^.*(?=.{3,})(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\d\x])(?=.*[!$#%]).*$/.test(password)) {
                setPasswordValidation("Password is not Valid")
                setPasswordValidationText(true)
            } else {
                setPasswordValidation("")
                setPasswordValidationText(false)
            }
            if (password !== cpassword || !cpassword) {
                setCpasswordValidation("Password Does Not Matched")
                setCpasswordValidationText(true)
            } else {
                setCpasswordValidation("")
                setCpasswordValidationText(false)
            }
        }
        else {

            setCpasswordValidation("")
            setCpasswordValidationText(false)
            setPasswordValidation("")
            setPasswordValidationText(false)
            history.push("/profile/view?msg=Password%20Changed")
        }

    };



    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <div className={classes.root}>
                <AppBar position="static">
                    <Tabs
                        variant="fullWidth"
                        value={value}
                        onChange={handleChange}
                        aria-label="nav tabs example"
                    >
                        <LinkTab label="Basic Info" href="/drafts" {...a11yProps(0)} />
                        <LinkTab label="Password" href="/trash" {...a11yProps(1)} />
                        <LinkTab label="Delete Account" href="/spam" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>

                <TabPanel value={value} index={0}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <form className="submit" onSubmit={formSubmissionHandlerBasic}>

                            <Grid item xs={12}>
                                <TextField
                                    error={nameValidationText}
                                    value={name}
                                    label="Full Name"
                                    variant="outlined"
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"><PersonIcon /></InputAdornment>,
                                    }}
                                    onChange={nameInputChangeHandler}
                                    helperText={nameValidation}
                                />
                            </Grid>
                            <br />
                            <Grid item xs={12}>
                                <TextField

                                    error={emailValidationText}
                                    value={email}
                                    label="Email"
                                    variant="outlined"
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"><EmailOutlinedIcon /></InputAdornment>,
                                    }}
                                    onChange={emailInputChangeHandler}
                                    helperText={emailValidation}
                                />
                            </Grid>
                            <br />
                            <Grid item xs={12}>
                                <TextField
                                    error={contactValidationText}
                                    value={contact}
                                    label="Contact No."
                                    variant="outlined"
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"><PhoneIcon /></InputAdornment>,
                                    }}
                                    onChange={contactInputChangeHandler}
                                    helperText={contactValidation}
                                />
                            </Grid>

                            <br />

                            <Grid item xs={12}>
                                <TextField
                                    error={addressValidationText}
                                    value={address}
                                    label="Address"
                                    variant="outlined"
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"><ContactMailOutlinedIcon /></InputAdornment>,
                                    }}
                                    onChange={addressInputChangeHandler}
                                    helperText={addressValidation}
                                />
                            </Grid>


                            <br />

                            <Grid
                                container
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Button type='submit' variant='contained' color='primary' size="large">Update</Button>
                            </Grid>


                        </form>
{/* <span style={regMsgColor}><b>{regMsg}</b></span> */}

                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <form className="submit" onSubmit={formSubmissionHandlerPassword}>

                            <Grid item xs={12}>
                                <TextField
                                    label="Old Password"
                                    type="password"
                                    variant="outlined"
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"><VpnKeyOutlinedIcon /></InputAdornment>,
                                    }}
                                />
                            </Grid>
                            <br />
                            <Grid item xs={12}>
                                <TextField
                                    error={passwordValidationText}
                                    label="New Password"
                                    type="password"
                                    variant="outlined"
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"><VpnKeyOutlinedIcon /></InputAdornment>,
                                    }}
                                    onChange={passwordInputChangeHandler}
                                    helperText={passwordValidation}
                                />
                            </Grid>
                            <br />
                            <Grid item xs={12}>
                                <TextField
                                    error={cpasswordValidationText}
                                    label="Confirm New Password"
                                    type="password"
                                    variant="outlined"
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"><VpnKeyOutlinedIcon /></InputAdornment>,
                                    }}
                                    onChange={confirmPasswordInputChangeHandler}
                                    helperText={cpasswordValidation}
                                />
                            </Grid>
                            <br />
                            <Grid
                                container
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Button type='submit' variant='contained' color='primary' size="large">Update</Button>
                            </Grid>



                        </form>
                    </Grid>
                </TabPanel>

                {/* panel 3 */}

                <TabPanel value={value} index={2}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <form className="submit">
                            <Grid item xs={12}>
                                <TextField
                                    label="Confirm Password"
                                    type="password"
                                    variant="outlined"
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"><VpnKeyOutlinedIcon /></InputAdornment>,
                                    }}
                                />
                            </Grid>
                            <br />
                            <Grid
                                container
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Button type='submit' variant="contained"
                                    color="secondary"
                                    className={classes.button}
                                    startIcon={<DeleteIcon />} size="large">Delete</Button>
                            </Grid>
                        </form>
 {/* <span style={regMsgColor}><b>{regMsg}</b></span> */}
                    </Grid>
                </TabPanel>

            </div>
        </div>
    )
}

export default Edit
