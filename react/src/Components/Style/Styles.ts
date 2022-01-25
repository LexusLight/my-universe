import {makeStyles} from "@material-ui/core/styles";
import {cosmoTheme} from "./Theme";

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
    },
    secondaryLightText:{
        color: cosmoTheme.palette.secondary.light,
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

const charStyles = makeStyles({
    avatarCircle:{
        height:100,
        width:100,
        //marginTop:10,
        borderRadius:50,
    },
    imagePortrait:{
        height:300,
        width:200,
        //marginTop:10,
        borderRadius:1,
    },
    imageReference:{
        width: '70%',
        maxWidth: 600,
        height: 200,
        //marginTop:10,
        borderRadius:1,
    },
    picIcon:{
        transform:"scale(4,4)",
    },
    formInput:{
        width: '70%',
        maxWidth: 400,
    },
    formInputLong:{
        width: '70%',
        maxWidth: 600,
    },
    formError:{
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: 400,
    }
},)

const artStyles = makeStyles({
    imageArt:{
        height: "300px",
        width: "50%",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        //marginTop:10,
        borderRadius:1,
    },
    formInputLong:{
        width: '70%',
        maxWidth: 600,
    },
    picIcon:{
        transform:"scale(4,4)",
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
        backgroundColor: cosmoTheme.palette.secondary.light,
        color: 'white',
        backgroundSize: 'cover',
    },
    artImage:{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height:200,
        backgroundColor: cosmoTheme.palette.secondary.light,
        color: 'white',

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
    charStyles,
    pageStyles,
    editStyles,
    artStyles,
}

