import React from 'react';
import { View, Text } from 'react-native';
import YbCoreIcon from './yb-core-icon';

function App() {
  return (
    <div className="App" >
      <View style={{ alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <Text style={{ fontSize: 28 }}>Internal Icons</Text>
        <YbCoreIcon name="test_01.svg" width={50} height={50} color={'#555555'} />
        <YbCoreIcon name="test_02.svg" width={50} height={50} color={'#4267B2'} />
        <YbCoreIcon name="test_03.svg" width={50} height={50} color={'#0077b5'} />
        <YbCoreIcon name="test_04.svg" width={50} height={50} color={'#00A4EF'} />
        <YbCoreIcon name="alarm-minus.svg" width={50} height={50} color={'#555555'} />
        <YbCoreIcon name="alarm-plus.svg" width={50} height={50} color={'#4267B2'} />
        <YbCoreIcon name="alert-circle.svg" width={50} height={50} color={'#0077b5'} />
        <YbCoreIcon name="alert-triangle.svg" width={50} height={50} color={'#00A4EF'} />
        <YbCoreIcon name="arrow-left-right.svg" width={50} height={50} color={'#555555'} />
        <YbCoreIcon name="bookmark-minus.svg" width={50} height={50} color={'#4267B2'} />
        <YbCoreIcon name="bookmark-plus.svg" width={50} height={50} color={'#0077b5'} />
        <YbCoreIcon name="circle-slashed.svg" width={50} height={50} color={'#00A4EF'} />
        <YbCoreIcon name="circle.svg" width={50} height={50} color={'#0077b5'} />
        <YbCoreIcon name="mic-off.svg" width={50} height={50} color={'#00A4EF'} />
        <Text style={{ fontSize: 28 }}>Icons Fetched from server and cache</Text>
        <YbCoreIcon name="506383/apple.svg" width={50} height={50} color={'red'} />
        <YbCoreIcon name="505564/attachment.svg" forcedConversion={true} width={50} height={50} color={'blue'} />
        <YbCoreIcon name="505561/at-email.svg" forcedConversion={true} width={50} height={50} color={'gray'} />
        <YbCoreIcon customUrl="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/fsm.svg" forcedConversion={false} width={150} height={150} color={'blue'} />
      </View>
    </div>
  );
}

export default App;
