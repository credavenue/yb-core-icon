import React, { LazyExoticComponent } from "react";

let Icons: Record<string, LazyExoticComponent<any>> = {}

Icons['complex.svg'] = require('../svgr/complex.js').default;
Icons['trash.svg'] = require('../svgr/trash.js').default;
Icons['trending-up.svg'] = require('../svgr/trending-up.js').default;

export default Icons