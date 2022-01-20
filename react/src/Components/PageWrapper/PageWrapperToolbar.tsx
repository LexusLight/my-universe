import {AppBar, Box, Button, Container, Grid, Toolbar, Typography} from "@material-ui/core";
import {Link, useHistory} from "react-router-dom";
import React, {useState, useEffect} from "react";
import {wrapperStyles} from "../Style/Styles";
import {observer} from "mobx-react-lite";
import {defaultProps} from "../../Props/Props";
import {PersonRounded, MeetingRoom, PersonAdd, VpnKey} from "@material-ui/icons";
import NightsStayIcon from '@mui/icons-material/NightsStay';
import userStore from "../../Stores/UserStore";

const UserButtons = observer((props:defaultProps) => {
    const styles = wrapperStyles();
    const history = useHistory();

    const logOut = () => {
        props.userStore?.resetUser();
        history.push('/profile/auth');
    }

    if (props.userStore?.username) {
        return(
            <Box>
                <Link to={`/profile/page/${userStore.username}`}>
                    <Button className={styles.primaryLight} variant="contained"><PersonRounded/> Page </Button>
                </Link>
                <Link to="#">
                    <Button className={styles.secondaryLight} onClick={logOut} variant="contained" ><MeetingRoom/> Log Out </Button>
                </Link>
            </Box>
        )
    }else {
        return(
            <Box>
                <Link to="/profile/auth">
                    <Button className={styles.primaryLight} variant="contained"><VpnKey/> Log In</Button>
                </Link>
                <Link to="/profile/reg">
                    <Button className={styles.secondaryLight} variant="contained"><PersonAdd/>Sign Up</Button>
                </Link>
            </Box>
        )
    }
})

const PageWrapperToolbar = observer((props:defaultProps) =>{
    const styles = wrapperStyles();
    const history = useHistory();
    const goFaceSite = () => {
        history.push('/');
    }

    return(
        <AppBar position="fixed">
            <Toolbar>
                <Container fixed>
                    <Grid container justify={"space-between"}>
                        <Grid item>
                            <Typography variant="h5" onClick={goFaceSite}>
                                MyUniverse
                                <NightsStayIcon className={styles.secondaryLightText} fontSize={"large"} />
                            </Typography>
                        </Grid>
                        <Grid item>
                            <UserButtons userStore={props.userStore}/>
                        </Grid>
                    </Grid>
                </Container>
            </Toolbar>
        </AppBar>
    )
})

export default PageWrapperToolbar;