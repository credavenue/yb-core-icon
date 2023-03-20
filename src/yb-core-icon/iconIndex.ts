import React from "react";

const Icons: Record<string, { uri: any } | undefined> = {
    "test_01.svg": { uri: require('../svgr/test_01.js') }, // apple
    "test_02.svg": { uri: require('../svgr/test_02.js') }, // facebook 
    "test_03.svg": { uri: require('../svgr/test_03.js') }, // linkedIn 
    "test_04.svg": { uri: require('../svgr/test_04.js') }, // microsoft 
"alarm-minus.svg": { uri: require('../svgr/alarm-minus.js') },
"alarm-plus.svg": { uri: require('../svgr/alarm-plus.js') },
"alert-circle.svg": { uri: require('../svgr/alert-circle.js') },
"alert-triangle.svg": { uri: require('../svgr/alert-triangle.js') },
"arrow-left-right.svg": { uri: require('../svgr/arrow-left-right.js') },
"bookmark-minus.svg": { uri: require('../svgr/bookmark-minus.js') },
"bookmark-plus.svg": { uri: require('../svgr/bookmark-plus.js') },
"circle-slashed.svg": { uri: require('../svgr/circle-slashed.js') },
"circle.svg": { uri: require('../svgr/circle.js') },
"mic-off.svg": { uri: require('../svgr/mic-off.js') },
"ae.svg": { uri: require('../svgr/ae.js') },
"au.svg": { uri: require('../svgr/au.js') },
"br.svg": { uri: require('../svgr/br.js') },

    // (-----)
    /********** CAUTION *********/
    /* DO NOT REMOVE ABOVE LINE. USED FOR AUTOMATION */
}

export default Icons
/* DO NOT REMOVE THE EMPTY SPACE BELOW */
