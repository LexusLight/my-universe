import {AppBar, Box, Button, Container, Grid, Toolbar, Typography} from "@material-ui/core";
import {Link, useHistory} from "react-router-dom";
import React, {useState, useEffect} from "react";
import {useStyles} from "./Styles";
import {observer} from "mobx-react-lite";
import {defaultProps} from "../../Props/Props";
import {render} from "react-dom";

const UserButtons = observer((props:defaultProps) => {
    const styles = useStyles();
    const history = useHistory();

    const logOut = () => {
        props.userStore?.resetUser();
        history.push('/profile/auth');
    }

    if (props.userStore?.username) {
        return(
            <Box>
                <Link to="/profile/page">
                    <Button className={styles.primaryLight} variant="contained"> Profile </Button>
                </Link>
                <Link to="#">
                    <Button className={styles.secondaryLight} onClick={logOut} variant="contained" > Log Out </Button>
                </Link>
            </Box>
        )
    }else {
        return(
            <Box>
                <Link to="/profile/auth">
                    <Button className={styles.primaryLight} variant="contained"> Log In</Button>
                </Link>
                <Link to="/profile/reg">
                    <Button className={styles.secondaryLight} variant="contained" >Sign Up</Button>
                </Link>
            </Box>
        )
    }
})

const PageWrapperToolbar = observer((props:defaultProps) =>{
    const styles = useStyles();
    return(
        <AppBar position="fixed">
            <Toolbar>
                <Container fixed>
                    <Grid container justify={"space-between"}>
                        <Grid item>
                            <Typography variant="h6">MyUniverse</Typography>
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