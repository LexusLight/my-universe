import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import Profile from "../Profile/Profile";
import World from "../World/World";
import Character from "../Character/Character";
import {
    AppBar,
    BottomNavigation,
    BottomNavigationAction,
    Box,
    Button,
    Container,
    Grid,
    Paper,
    Toolbar,
    Typography
} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/core/styles";
import {cosmoTheme} from "../Style/Theme"
import {wrapperStyles} from "../Style/Styles"
import PageWrapperToolbar from "./PageWrapperToolbar";

import userStore from "../../Stores/UserStore";
import {Android} from "@material-ui/icons";


const PageWrapper = () =>    {
    const styles = wrapperStyles();

    return (
        <ThemeProvider theme={cosmoTheme}>
            <BrowserRouter>
                <Paper className={styles.primaryDark}>
                    <Box minHeight={"100vh"}>
                        <PageWrapperToolbar userStore={userStore}/>
                        <Toolbar/>
                        <Container className={styles.contentCenter} fixed>
                            <Switch>
                                <Route path={'/profile'}><Profile userStore={userStore}/></Route>
                            </Switch>
                            {/*<StateComponent url={"http://localhost:1337/api/testList"}/>*/}
                        </Container>
                        <BottomNavigation className={styles.primaryDark}>
                            <BottomNavigationAction label="Google" icon={<Android className={styles.primaryDark} />}/>
                            <BottomNavigationAction label="Google" icon={<Android className={styles.primaryDark}/>}/>
                            <BottomNavigationAction label="Google" icon={<Android className={styles.primaryDark}/>}/>
                            <BottomNavigationAction label="Google" icon={<Android className={styles.primaryDark}/>}/>
                            <BottomNavigationAction label="Google" icon={<Android className={styles.primaryDark}/>}/>
                        </BottomNavigation>
                    </Box>
                </Paper>
            </BrowserRouter>
        </ThemeProvider>

    );
}

export default PageWrapper;