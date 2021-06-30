import {Grid} from "@material-ui/core";
import React, {useEffect, useState} from "react";

const EditLinks = () => {

    const obj:string[] = []
    const [links,setLinks] = useState();

    useEffect(()=>{
        //
        // for (let i=0; i<8; i++) {
        //     links[i] = "Link "+ i;
        // }
        // console.log(links)
    },[])

    return(
        <Grid container>
            {/*{links.map((item:string,index)=>{ //!!! кей*/}
            {/*    return(*/}
            {/*        <Grid item xl={3} lg={3} md={3} sm={3} xs={3} key={index} >*/}
            {/*            {item}*/}
            {/*        </Grid>*/}
            {/*    )*/}
            {/*})}*/}
        </Grid>
    )
}

export default EditLinks;