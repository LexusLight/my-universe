import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import Profile from "../Profile/Profile";
import World from "../World/World";
import Character from "../Character/Character";
import {AppBar, Box, Button, Container, IconButton,Toolbar, Typography, Grid} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/List';
import {makeStyles,createMuiTheme,ThemeProvider} from "@material-ui/core/styles";
import StateComponent from "../../StateComponentTest/StateComponent";

const cosmoTheme = createMuiTheme({
    palette:{
        primary: {
            main: '#FFAFFF',
            dark: '#FFAFFF',
            light: '#FFAFFF',
        },
        secondary: {
            main: '#AAAAAA',
        },
    }
})
const useStyles = makeStyles((theme) => ({
    paper:{
        flexGrow: 1,
    },
    menuButton:{
        marginRight: theme.spacing(1),
    },
    title:{
        flexGrow:1,
        color: 'white',
    },
    contentCenter:{
        textAlign: 'center',
        // marginTop: 70,
    },
}))

const PageWrapper = () =>    {
    const styles = useStyles();

    return (
        <ThemeProvider theme={cosmoTheme}>
            <BrowserRouter>
                <Box>
                    <AppBar position="fixed">
                        <Toolbar>
                            <IconButton edge="start" color="inherit" aria-label="menu" className={styles.menuButton}>
                                <MenuIcon/>
                            </IconButton>
                            <Typography variant="h6" className={styles.title}>My-Universe</Typography>
                            <Box mr={2}>
                                <Link to="/profile/auth">
                                    <Button color="primary" variant="contained"> Log In</Button>
                                </Link>
                            </Box>
                            <Link to="/profile/reg">
                                <Button color="secondary" variant="contained" >Sign Up</Button>
                            </Link>
                        </Toolbar>
                    </AppBar>
                    <Toolbar/>
                </Box>


                <Container className={styles.contentCenter} fixed>
                    <Switch>
                        <Route path={'/profile'}><Profile/></Route>
                        <Route path={'/world'}><World/></Route>
                        <Route path={'/character'}><Character/></Route>
                    </Switch>
                    {/*<StateComponent url={"http://localhost:1337/api/testList"}/>*/}
                </Container>
            </BrowserRouter>
        </ThemeProvider>

    );
}

export default PageWrapper;