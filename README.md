# **\*\***\*\***\*\*** TEST BUILD **\*\***\***\*\***

# **\*\*** DO NOT USE IN PRODUCTION **\*\*\***

# Yubi Core Icon

Yubi Core Icon is a component built to support the iconography of Yubi Design System. All icons in Yubi Design System will be available in our Icon component. If any icon is missing in the components project it will fetch it from the server and cache it. Once a new icon is uploaded to the design system this component will be updated in project level automatically and will be published by Jenkins. So it is recommended that you use the 'latest' version in you project. It is designed to render icons in SVG format and also internally supports dynamic colorization of svg.

### Versioning

Since new icon upload will cause the components project to be automated it is wise to know how the versions are decided and how to know if it is a user generated version or Jenkins generated version.

1.0.x - versions generated by Jenkins (i.e) 1.0.1, 1.0.8, 1.0.105

1.x.8 - minor updates done by devs. (i.e) 1.1.1, 1.3.1, 1.45.1

x.0.12 - major changes done by devs. (i.e) 2.0.1, 3.0.1, 10.0.1

Please note that the last version (system generated version) will not reset with any minor or major update. It will keep on increasing indicating that there are newer icons updated and available.

(i.e):- Assume there is a version 2.1.45.

minor updates done by dev. new version:- 2.2.45

major updates done by dev. new version:- 3.0.45

The minor update will be reset once a major version is released. So the first two numbers in the version will indicate a dev release.

(i.e):- Assume there is a version 2.1.45.

major updates done by dev. new version:- 3.0.45

### Platforms supported

- Android
- iOS
- Web

## Installation

Install from the command line

```shell
npm install @yubi/yb-core-icon@latest
```

or

Install via package.json

```shell
"@yubi/yb-core-icon": "latest"
```

### Usage

```js
<YbCoreIcon name="test_01.svg" width={50} height={50} color={'red'} />
```

### Component Props Description

**name:-** a string representing the name of the YbCore icon to be rendered. You can find the supported names constructed by versions below.

**width:-** a string or number representing the width of the icon.

**height:-** a string or number representing the height of the icon.

**color:-** a ColorValue type representing the color of the icon.

**customUrl:-** a string representing a custom URL for the icon. Please note that the presense of the customUrl will override the name given in the icon.

**forcedConversion:-** a boolean flag that indicates whether to force color conversion for YbCore icons. Default is **true**. If no custom color is required will recommend changing it to **false**.

**disableCache:-** a boolean flag that indicates whether to disable caching for YbCore icons.

**disableFetching:-** a boolean flag that indicates whether to disable fetching of YbCore icons. This will not fire any api requests from the component. Instead it will check for only internal icons and cached icons. If none are present then the Placeholder will be shown.

**placeholder:-** a React element to be rendered while the YbCore icon is being loaded.

**loadingPlaceholder:-** a React element to be rendered if an error occurs while loading the YbCore icon.

**invalidateCacheInDays:-** a number representing the number of days after which the cache for the YbCore icon should be invalidated.

Please note that all the props are optional.
**placeholder:** will be taken instead of **loadingPlaceholder:** if no loading placeholder is given. If both are given then during the loading the **loadingPlaceholder:** will be shown. If the load fails then the **placeholder:** will be shown.

## Available Icons in the Component

# version 1.0.0-beta1

| Icon Name            | Icons                                                                                     |
| -------------------- | ----------------------------------------------------------------------------------------- |
| test_01.svg          | <img src="https://www.svgrepo.com/show/506383/apple.svg" width='50' height='50' >         |
| test_02.svg          | <img src="https://www.svgrepo.com/download/506477/facebook.svg" width='50' height='50' >  |
| test_03.svg          | <img src="https://www.svgrepo.com/download/506517/linkedin.svg" width='50' height='50' >  |
| test_04.svg          | <img src="https://www.svgrepo.com/download/506522/microsoft.svg" width='50' height='50' > |
| alarm-minus.svg      | <img src="https://baseUrl/alarm-minus.svg" width='50' height='50' >                       |
| alarm-plus.svg       | <img src="https://baseUrl/alarm-plus.svg" width='50' height='50' >                        |
| alert-circle.svg     | <img src="https://baseUrl/alert-circle.svg" width='50' height='50' >                      |
| alert-triangle.svg   | <img src="https://baseUrl/alert-triangle.svg" width='50' height='50' >                    |
| arrow-left-right.svg | <img src="https://baseUrl/arrow-left-right.svg" width='50' height='50' >                  |
| bookmark-minus.svg   | <img src="https://baseUrl/bookmark-minus.svg" width='50' height='50' >                    |
| bookmark-plus.svg    | <img src="https://baseUrl/bookmark-plus.svg" width='50' height='50' >                     |
| circle-slashed.svg   | <img src="https://baseUrl/circle-slashed.svg" width='50' height='50' >                    |
| circle.svg           | <img src="https://baseUrl/circle.svg" width='50' height='50' >                            |
| mic-off.svg          | <img src="https://baseUrl/mic-off.svg" width='50' height='50' >                           |

(-----)

/\***\*\*\*\*\*** CAUTION \***\*\*\*\***/
/_ DO NOT REMOVE ABOVE LINE. USED FOR AUTOMATION _/

## Contact

For any queries or suggestions in this component, please contact **Phoenix Team** 😄

## License

Yubi
