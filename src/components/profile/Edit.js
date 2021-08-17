import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Button, Grid, InputAdornment, TextField } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';


import axios from 'axios';


// import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
// import InputAdornment from '@material-ui/core/InputAdornment';
import PersonIcon from '@material-ui/icons/Person';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import PhoneIcon from '@material-ui/icons/Phone';
import ContactMailOutlinedIcon from '@material-ui/icons/ContactMailOutlined';
import { useHistory } from 'react-router-dom';
// import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
// import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';


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


    const [name, setname] = useState("");

    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [address, setAddress] = useState("");



    const [nameValidation, setNameValidation] = useState("");
    // const [unameValidation, setUnameValidation] = useState("");
    const [passwordValidation, setPasswordValidation] = useState("");
    const [cpasswordValidation, setCpasswordValidation] = useState("");
    const [emailValidation, setEmailValidation] = useState("");
    const [contactValidation, setContactValidation] = useState("");
    const [addressValidation, setAddressValidation] = useState("");
    // const [levelValidation, setLevelValidation] = useState("");
    // const [imageValidation, setImageValidation] = useState("");
    const [nameValidationText, setNameValidationText] = useState(false);
    // const [unameValidationText, setUnameValidationText] = useState(false);
    const [passwordValidationText, setPasswordValidationText] = useState(false);
    const [cpasswordValidationText, setCpasswordValidationText] = useState(false);
    const [emailValidationText, setEmailValidationText] = useState(false);
    const [contactValidationText, setContactValidationText] = useState(false);
    const [addressValidationText, setAddressValidationText] = useState(false);
    // const [levelValidationText, setLevelValidationText] = useState(false);
    // const [imageValidationText, setImageValidationText] = useState(false);



    const [regMsg, setRegMsg] = useState("");
    const regMsgColor = { color: "green", padding: "10px" }



    useEffect(() => {

        const search = window.location.search;
        const params = new URLSearchParams(search);
        const foo = params.get('msg');
        setRegMsg(foo)
        // console.log(regMsg)

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
        // formData.append('uname', uname)
        // formData.append('password', password)
        // formData.append('cpassword', cpassword)
        formData.append('email', email)
        formData.append('contact', contact)
        formData.append('address', address)
        // formData.append('level', level)
        // formData.append('image', image)


        if (name === "" || email === "" || contact === "" || address === "") {
            if (name.length < 3) {
                setNameValidation("Full Name is not Valid")
                setNameValidationText(true)
            } else {
                setNameValidation("")
                setNameValidationText(false)
            }
            // if(uname.length<6){
            //     setUnameValidation("Username Name is not Valid")
            //     setUnameValidationText(true)
            //     console.log("TEST")
            // }else{
            //     setUnameValidation("")
            //     setUnameValidationText(false)
            // }
            // if(!/^.*(?=.{3,})(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\d\x])(?=.*[!$#%]).*$/.test(password)){
            //     setPasswordValidation("Password is not Valid")
            //     setPasswordValidationText(true)
            // }else{
            //     setPasswordValidation("")
            //     setPasswordValidationText(false)
            // }
            // if(password !== cpassword || !cpassword){
            //     setCpasswordValidation("Password Does Not Matched")
            //     setCpasswordValidationText(true)
            // }else{
            //     setCpasswordValidation("")
            //     setCpasswordValidationText(false)
            // }
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
            // if(level.length<2){
            //     setLevelValidation("Class is not Valid")
            //     setLevelValidationText(true)
            // }else{
            //     setLevelValidation("")
            //     setLevelValidationText(false)
            // }
            // if(image === ""){
            //     setImageValidation("Please Upload Your Profile Picture")
            //     setImageValidationText(true)
            // }else{
            //     setImageValidation("")
            //     setImageValidationText(false)
            // }
        }
        else {
            // try {
                setEmailValidationText(false)
                setEmailValidation("")
            //     // setUnameValidation("")
            //     // setUnameValidationText(false)
            //     // setImageValidation("")
            //     // setImageValidationText(false)
                setAddressValidation("")
                setAddressValidationText(false)
            //     // setLevelValidation("")
            //     // setLevelValidationText(false)
                setContactValidation("")
                setContactValidationText(false)
            //     // setCpasswordValidation("")
            //     // setCpasswordValidationText(false)
            //     // setPasswordValidation("")
            //     // setPasswordValidationText(false)
                setNameValidation("")
                setNameValidationText(false)
            //     const res = await axios.post(`http://127.0.0.1:8000/api/student/registration`, formData);
            //     console.log(res) 
            //     const serverMsg = res.data
            //     setEmailServerError(res.data.email[0])

            //     console.log(res.status)
            //     if(res.data !== true){

            //         if(typeof(res.data.email) !== 'undefined'){
            //             setEmailValidation("Email Has Already Been Taken")
            //             setEmailValidationText(true)
            //         }
            //         if(typeof(res.data.uname) !== 'undefined'){
            //             setUnameValidation("Username Has Already Been Taken")
            //             setUnameValidationText(true)
            //         }
            //         if(typeof(res.data.image) !== 'undefined'){
            //             setImageValidation("The image must be a file of type: jpeg, jpg, png.")
            //             setImageValidationText(true)
            //         }
            //     }
            //     else{

            history.push("/profile/view?msg=Update%20Success")
            // }


            // } catch (errorMsg) {

            //     console.log(errorMsg);
            // }

        }

    };




    const formSubmissionHandlerPassword = (event) => {
        event.preventDefault();

        let formData = new FormData()
        // formData.append('name', name)
        // formData.append('uname', uname)
        formData.append('password', password)
        formData.append('cpassword', cpassword)
        // formData.append('email', email)
        // formData.append('contact', contact)
        // formData.append('address', address)
        // formData.append('level', level)
        // formData.append('image', image)


        if (password === "" || cpassword === "" || password !== cpassword) {
            // if (name.length < 3) {
            //     setNameValidation("Full Name is not Valid")
            //     setNameValidationText(true)
            // } else {
            //     setNameValidation("")
            //     setNameValidationText(false)
            // }
            // if(uname.length<6){
            //     setUnameValidation("Username Name is not Valid")
            //     setUnameValidationText(true)
            //     console.log("TEST")
            // }else{
            //     setUnameValidation("")
            //     setUnameValidationText(false)
            // }
            if(!/^.*(?=.{3,})(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\d\x])(?=.*[!$#%]).*$/.test(password)){
                setPasswordValidation("Password is not Valid")
                setPasswordValidationText(true)
            }else{
                setPasswordValidation("")
                setPasswordValidationText(false)
            }
            if(password !== cpassword || !cpassword){
                setCpasswordValidation("Password Does Not Matched")
                setCpasswordValidationText(true)
            }else{
                setCpasswordValidation("")
                setCpasswordValidationText(false)
            }
            // if (!/\S+@\S+\.\S+/.test(email)) {
            //     setEmailValidation("Email is not Valid")
            //     setEmailValidationText(true)
            // } else {
            //     setEmailValidation("")
            //     setEmailValidationText(false)
            // }
            // if (!/(^([+]{1}[8]{2}|0088)?(01){1}[3-9]{1}\d{8})$/.test(contact)) {
            //     setContactValidation("Phone Number is not Valid")
            //     setContactValidationText(true)
            // } else {
            //     setContactValidation("")
            //     setContactValidationText(false)
            // }
            // if (address.length < 3) {
            //     setAddressValidation("Address is not Valid")
            //     setAddressValidationText(true)
            // } else {
            //     setAddressValidation("")
            //     setAddressValidationText(false)
            // }
            // if(level.length<2){
            //     setLevelValidation("Class is not Valid")
            //     setLevelValidationText(true)
            // }else{
            //     setLevelValidation("")
            //     setLevelValidationText(false)
            // }
            // if(image === ""){
            //     setImageValidation("Please Upload Your Profile Picture")
            //     setImageValidationText(true)
            // }else{
            //     setImageValidation("")
            //     setImageValidationText(false)
            // }
        }
        else {
            // try {
                // setEmailValidationText(false)
                // setEmailValidation("")
            //     // setUnameValidation("")
            //     // setUnameValidationText(false)
            //     // setImageValidation("")
            //     // setImageValidationText(false)
                // setAddressValidation("")
                // setAddressValidationText(false)
            //     // setLevelValidation("")
            //     // setLevelValidationText(false)
                // setContactValidation("")
                // setContactValidationText(false)
                setCpasswordValidation("")
                setCpasswordValidationText(false)
                setPasswordValidation("")
                setPasswordValidationText(false)
                // setNameValidation("")
                // setNameValidationText(false)
            //     const res = await axios.post(`http://127.0.0.1:8000/api/student/registration`, formData);
            //     console.log(res) 
            //     const serverMsg = res.data
            //     setEmailServerError(res.data.email[0])

            //     console.log(res.status)
            //     if(res.data !== true){

            //         if(typeof(res.data.email) !== 'undefined'){
            //             setEmailValidation("Email Has Already Been Taken")
            //             setEmailValidationText(true)
            //         }
            //         if(typeof(res.data.uname) !== 'undefined'){
            //             setUnameValidation("Username Has Already Been Taken")
            //             setUnameValidationText(true)
            //         }
            //         if(typeof(res.data.image) !== 'undefined'){
            //             setImageValidation("The image must be a file of type: jpeg, jpg, png.")
            //             setImageValidationText(true)
            //         }
            //     }
            //     else{

            history.push("/profile/view?msg=Password%20Changed")
            // }


            // } catch (errorMsg) {

            //     console.log(errorMsg);
            // }

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
                        // container spacing={1}
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <form className="submit" onSubmit={formSubmissionHandlerBasic}>

                            {/* <Grid container spacing={3}> */}
                            <Grid item xs={12}>
                                <TextField
                                    // required
                                    error={nameValidationText}
                                    label="Full Name"
                                    variant="outlined"
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"><PersonIcon /></InputAdornment>,
                                    }}
                                    // style={margin}
                                    onChange={nameInputChangeHandler}
                                    helperText={nameValidation}
                                />
                            </Grid>
                            <br />
                            <Grid item xs={12}>
                                <TextField
                                    // name="fullName"
                                    // required
                                    // id="outlined-required"
                                    error={emailValidationText}
                                    label="Email"
                                    variant="outlined"
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"><EmailOutlinedIcon /></InputAdornment>,
                                    }}
                                    // style={margin}
                                    onChange={emailInputChangeHandler}
                                    helperText={emailValidation}
                                />
                            </Grid>
                            <br />
                            <Grid item xs={12}>
                                <TextField
                                    // name="fullName"
                                    // required
                                    // id="outlined-required"
                                    error={contactValidationText}
                                    label="Contact No."
                                    variant="outlined"
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"><PhoneIcon /></InputAdornment>,
                                    }}
                                    // style={margin}
                                    onChange={contactInputChangeHandler}
                                    helperText={contactValidation}
                                />
                            </Grid>

                            <br />

                            <Grid item xs={12}>
                                <TextField
                                    // name="fullName"
                                    // required
                                    // id="outlined-required"
                                    error={addressValidationText}
                                    label="Address"
                                    variant="outlined"
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"><ContactMailOutlinedIcon /></InputAdornment>,
                                    }}
                                    // style={margin}
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
                        // container spacing={1}
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <form className="submit" onSubmit={formSubmissionHandlerPassword}>

                            <Grid item xs={12}>
                                <TextField
                                    // required
                                    // error={}
                                    label="Old Password"
                                    type="password"
                                    variant="outlined"
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"><VpnKeyOutlinedIcon /></InputAdornment>,
                                    }}
                                // style={margin}
                                // onChange={}
                                // helperText={passwordValidation}
                                />
                            </Grid>
                            <br />
                            <Grid item xs={12}>
                                <TextField
                                    // required
                                    error={passwordValidationText}
                                    // id="outlined-password-input"
                                    label="New Password"
                                    type="password"
                                    variant="outlined"
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"><VpnKeyOutlinedIcon /></InputAdornment>,
                                    }}
                                // style={margin}
                                onChange={passwordInputChangeHandler}
                                helperText={passwordValidation}
                                />
                            </Grid>
                            <br />
                            <Grid item xs={12}>
                                <TextField
                                    // required
                                    error={cpasswordValidationText}
                                    // id="outlined-password-input"
                                    label="Confirm New Password"
                                    type="password"
                                    variant="outlined"
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"><VpnKeyOutlinedIcon /></InputAdornment>,
                                    }}
                                // style={margin}
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
                        // container spacing={1}
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <form className="submit">
                            <Grid item xs={12}>
                                <TextField
                                    // required
                                    // error={cpasswordValidationText}
                                    // id="outlined-password-input"
                                    label="Confirm Password"
                                    type="password"
                                    variant="outlined"
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"><VpnKeyOutlinedIcon /></InputAdornment>,
                                    }}
                                // style={margin}
                                // onChange={confirmPasswordInputChangeHandler}
                                // helperText={cpasswordValidation}
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
