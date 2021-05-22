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

export default useStyles;