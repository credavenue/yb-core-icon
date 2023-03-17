import React, { LazyExoticComponent } from "react";

let Icons: Record<string, LazyExoticComponent<any>> = {}

Icons['test_01.svg'] = require('../svgr/test_01.js').default; // apple
Icons['test_02.svg'] = require('../svgr/test_02.js').default; // facebook
Icons['test_03.svg'] = require('../svgr/test_03.js').default; // linkedIn
Icons['test_04.svg'] = require('../svgr/test_04.js').default; // microsoft

export default Icons