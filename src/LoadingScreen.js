import React from 'react';
import {Image} from 'react-native';

export default function LoadingScreen() {
  const imageList = [
    <Image source={require('./assets/images/loader1.png')} style={{flex:1, width: '100%', height:'100%'}} />,
    <Image source={require('./assets/images/loader2.png')} style={{flex:1, width: '100%', height:'100%'}} />,
  ];
  const [isChangeImage, setChangeImage] = React.useState(false);
  setTimeout(() => {
    setChangeImage(true);
  }, 1000);
  return imageList[isChangeImage ? 1 : 0];
}
