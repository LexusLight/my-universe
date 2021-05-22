import {makeStyles} from "@material-ui/core/styles";
import {cosmoTheme} from "./Theme";

export const useStyles = makeStyles((theme) => ({
    paper:{
        flexGrow: 1,
    },
    menuButton:{
        marginRight: theme.spacing(1),
    },
    contentCenter:{
        textAlign: 'center',
        // marginTop: 70,
    },
    primaryDark:{
        color: "white",
        backgroundColor: cosmoTheme.palette.primary.dark,
    },
    primaryLight:{
        color: "white",
        backgroundColor: cosmoTheme.palette.primary.light,
    },
    secondaryDark:{
        color: "white",
        backgroundColor: cosmoTheme.palette.secondary.dark,
    },
    secondaryLight:{
        color: "white",
        backgroundColor: cosmoTheme.palette.secondary.light,
    }

}))
