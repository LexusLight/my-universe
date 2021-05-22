import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import Profile from "../Profile/Profile";
import World from "../World/World";
import Character from "../Character/Character";
import {
    AppBar,
    Box,
    Button,
    Container,
    Grid,
    IconButton,
    Paper,
    TableFooter,
    Toolbar,
    Typography
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/List';
import {makeStyles,createMuiTheme,ThemeProvider} from "@material-ui/core/styles";
import StateComponent from "../../StateComponentTest/StateComponent";
import {cosmoTheme} from  "./Theme"
import {useStyles} from  "./Styles"


const PageWrapper = () =>    {
    const styles = useStyles();

    return (
        <ThemeProvider theme={cosmoTheme}>
            <BrowserRouter>
                <Paper className={styles.primaryDark}>
                    <Box minHeight={"100vh"}>
                        <AppBar position="fixed">
                            <Toolbar>
                                <Container fixed>
                                    <Grid container justify={"space-between"}>
                                        <Grid item>
                                            <Typography variant="h6">MyUniverse</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Link to="/profile/auth">
                                                <Button className={styles.primaryLight} variant="contained"> Log In</Button>
                                            </Link>
                                            <Link to="/profile/reg">
                                                <Button className={styles.secondaryLight} variant="contained" >Sign Up</Button>
                                            </Link>
                                        </Grid>

                                    </Grid>
                                </Container>
                            </Toolbar>
                        </AppBar>
                        <Toolbar/>

                        <Container className={styles.contentCenter} fixed>
                            <Switch>
                                <Route path={'/profile'}><Profile/></Route>
                                <Route path={'/world'}><World/></Route>
                                <Route path={'/character'}><Character/></Route>
                            </Switch>
                            {/*<StateComponent url={"http://localhost:1337/api/testList"}/>*/}
                        </Container>
                    </Box>
                </Paper>
            </BrowserRouter>
        </ThemeProvider>

    );
}

export default PageWrapper;