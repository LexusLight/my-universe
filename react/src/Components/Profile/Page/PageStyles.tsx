import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    avatarCircle:{
        height:300,
        width:300,
        marginLeft:"auto",
        marginRight:"auto",
        //marginTop:10,
        borderRadius:180,
        backgroundImage:`url(https://picsum.photos/300/300)`,
    },
    characterCircle:{
        height:100,
        width:100,
        marginLeft:"auto",
        marginRight:"auto",
        borderRadius:90,
        backgroundImage:`url(https://picsum.photos/100/100)`,
    },
    page_block:{

    },
    page_image:{
        height:200,
        width: 200,
    },
    characters_block:{
        height: 200,
    },
    art_block:{
        height: 100,
    },
    content_padding:{
        paddingTop:50,
    }

})

export default useStyles;