import React from 'react';
import { View } from 'react-native';
import YbCoreIcon from './yb-core-icon';

function App() {
  return (
    <div className="App" >
      <View style={{ alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <YbCoreIcon name="506383/apple.svg" width={50} height={50} color={'red'} />
        <YbCoreIcon name="complex.svg" width={200} height={200} />
        <YbCoreIcon name="trash.svg" width={50} height={50} />
        <YbCoreIcon name="trending-up.svg" width={50} height={50} />
        <YbCoreIcon name="506113/attachment.svg" width={50} height={50} forcedConversion={true} color={'red'} />
        <YbCoreIcon name="505561/at-email.svg" forcedConversion={true} width={50} height={50} color={'gray'} />
        <YbCoreIcon customUrl="https://www.svgrepo.com/download/505573/bone-broken.svg" forcedConversion={true} width={50} height={50} color={'magenta'} />
        <YbCoreIcon customUrl="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/fsm.svg" forcedConversion={false} width={150} height={150} color={'blue'} />
      </View>
    </div>
  );
}

export default App;
