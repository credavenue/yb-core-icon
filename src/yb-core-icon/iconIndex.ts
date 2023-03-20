import React from "react";

const Icons: Record<string, { uri: any } | undefined> = {
    "test_01.svg": { uri: require('../svgr/test_01.js') }, // apple
    "test_02.svg": { uri: require('../svgr/test_02.js') }, // facebook 
    "test_03.svg": { uri: require('../svgr/test_03.js') }, // linkedIn 
    "test_04.svg": { uri: require('../svgr/test_04.js') }, // microsoft 

    // (-----)
    /********** CAUTION *********/
    /* DO NOT REMOVE ABOVE LINE. USED FOR AUTOMATION */
}

export default Icons
/* DO NOT REMOVE THE EMPTY SPACE BELOW */
