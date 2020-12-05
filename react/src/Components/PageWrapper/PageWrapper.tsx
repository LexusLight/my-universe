import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import style from './PageWrapper.module.css'
import Profile from "../Profile/Profile";
import World from "../World/World";
import Character from "../Character/Character";
import {AppBar, Box, Button, Container, IconButton,Toolbar, Typography} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/List';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root:{
        flexGrow: 1,
    },
    menuButton:{
        marginRight: theme.spacing(1),
    },
    title:{
        flexGrow:1,
        color: 'white',
    }
}))

const PageWrapper = () => {
    const classes = useStyles();

    return (
        <BrowserRouter>
            <AppBar position="fixed">
                <Container fixed>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>My-Universe </Typography>
                        <Box mr={2}>
                            <Link to="/profile/auth">
                                <Button color="primary" variant="contained"> Log In</Button>
                            </Link>
                        </Box>
                        <Link to="/profile/reg">
                            <Button color="secondary" variant="contained" >Sign Up</Button>
                        </Link>
                    </Toolbar>
                </Container>
            </AppBar>
            <br/>
            <Switch>
                <Route path={'/profile'}><Profile/></Route>
                <Route path={'/world'}><World/></Route>
                <Route path={'/character'}><Character/></Route>
            </Switch>
        </BrowserRouter>

    );
}

export default PageWrapper;