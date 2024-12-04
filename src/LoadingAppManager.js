import React from "react";
import {Text, View} from "react-native";

export default function LoadingAppManager() {

  const [dots, setDots] = React.useState('');

  React.useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots.length < 3 ? prevDots + '.' : ''));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return <View style={{flex: 1, width: '100%', height: '100%', backgroundColor:'#0a0424', justifyContent:'center', alignItems:'center', position: 'absolute'}} >
    <Text style={{color:'white', fontSize:25}}>Loading{dots}</Text>
  </View>;
}
