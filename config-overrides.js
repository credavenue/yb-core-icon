const path = require("path");

const {
    override,
    addBabelPlugins,
    babelInclude,
    addWebpackResolve,
} = require("customize-cra");

module.exports = override(
    ...addBabelPlugins([
        "@babel/plugin-proposal-class-properties",
        { loose: true },
    ]),
    babelInclude([path.resolve("src"), path.resolve("./")]),
    addWebpackResolve({
        alias: {
            "react-native": "react-native-web",
            "react-native-svg": "react-native-svg-web",
        },
    })
);
