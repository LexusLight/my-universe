import {makeStyles} from "@material-ui/core/styles";
import {cosmoTheme} from "../PageWrapper/Theme";

const wrapperStyles = makeStyles((theme) => ({
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

const authStyles = makeStyles({
    formInput:{
        width: '51%',
        maxWidth: 400,
    },
    formError:{
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: 400,
    }
})

const regStyles = makeStyles({
    avatarCircle:{
        height:100,
        width:100,
        //marginTop:10,
        borderRadius:50,
    },
    formInput:{
        width: '51%',
        maxWidth: 400,
    },
    formError:{
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: 400,
    }
},)

const editStyles = makeStyles({
    avatarCircle:{
        height:300,
        width:300,
        marginLeft:"auto",
        marginRight:"auto",
        //marginTop:10,
        borderRadius:180,
        backgroundSize: "cover",
    },
    characterCircle:{
        height:100,
        width:100,
        marginLeft:"auto",
        marginRight:"auto",
        borderRadius:90,
        backgroundImage:`url(https://picsum.photos/100/100)`,
    },
    artImage:{
        marginLeft:"auto",
        marginRight:"auto",
        height:200,
        backgroundImage:`url(https://picsum.photos/1000)`,
    },
    page_block:{

    },
    page_image:{
        height:200,
        width: 200,
    },
    characters_block:{
    },
    align_links:{
        top: "50%",
    }

})

const pageStyles = makeStyles({
    avatarCircle:{
        height:300,
        width:300,
        marginLeft:"auto",
        marginRight:"auto",
        //marginTop:10,
        borderRadius:180,
        backgroundSize: "cover",
    },
    characterCircle:{
        height:100,
        width:100,
        marginLeft:"auto",
        marginRight:"auto",
        borderRadius:90,
        backgroundImage:`url(https://picsum.photos/100/100)`,
    },
    artImage:{
        marginLeft:"auto",
        marginRight:"auto",
        height:200,
        backgroundImage:`url(https://picsum.photos/1000)`,
    },
    page_block:{

    },
    page_image:{
        height:200,
        width: 200,
    },
    characters_block:{
    },
    align_links:{
        top: "50%",
    }

})

export{
    wrapperStyles,
    regStyles,
    authStyles,
    pageStyles,
    editStyles,
}

