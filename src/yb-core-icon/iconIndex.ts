import React, { LazyExoticComponent } from "react";

let Icons: Record<string, LazyExoticComponent<any>> = {}

Icons['test_01.svg'] = require('../svgr/test_01.js').default; // apple
Icons['test_02.svg'] = require('../svgr/test_02.js').default; // facebook
Icons['test_03.svg'] = require('../svgr/test_03.js').default; // linkedIn
Icons['test_04.svg'] = require('../svgr/test_04.js').default; // microsoft
Icons['alarm-minus.svg'] = require('../svgr/alarm-minus.js').default;
Icons['alarm-plus.svg'] = require('../svgr/alarm-plus.js').default;
Icons['alert-circle.svg'] = require('../svgr/alert-circle.js').default;
Icons['alert-triangle.svg'] = require('../svgr/alert-triangle.js').default;
Icons['arrow-left-right.svg'] = require('../svgr/arrow-left-right.js').default;
Icons['bookmark-minus.svg'] = require('../svgr/bookmark-minus.js').default;
Icons['bookmark-plus.svg'] = require('../svgr/bookmark-plus.js').default;
Icons['circle-slashed.svg'] = require('../svgr/circle-slashed.js').default;
Icons['circle.svg'] = require('../svgr/circle.js').default;
Icons['mic-off.svg'] = require('../svgr/mic-off.js').default;
Icons['test-05.svg'] = require('../svgr/test-05.js').default;
Icons['test-06.svg'] = require('../svgr/test-06.js').default;
Icons['test-07.svg'] = require('../svgr/test-07.js').default;

// (-----)
/********** CAUTION *********/
/* DO NOT REMOVE ABOVE LINE. USED FOR AUTOMATION */

export default Icons
/* DO NOT REMOVE THE EMPTY SPACE BELOW */
