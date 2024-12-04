import * as React from 'react';
import Svg, {
  SvgProps,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg width={36} height={35} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="url(#b)"
        d="M20.695 15.788c-.944 0-1.712.768-1.712 1.712s.768 1.712 1.712 1.712 1.712-.768 1.712-1.712-.768-1.712-1.712-1.712Z"
      />
      <Path
        fill="url(#c)"
        d="M21.83 10.598v3.088c.879.261 1.631.82 2.141 1.557l2.937-.954a7.013 7.013 0 0 0-5.079-3.69Z"
      />
      <Path
        fill="url(#d)"
        d="m27.61 16.445-2.937.955.002.1a3.96 3.96 0 0 1-.821 2.418l1.813 2.496a6.971 6.971 0 0 0 1.943-5.969Z"
      />
      <Path
        fill="url(#e)"
        d="M20.695 2.57H6.9a1.134 1.134 0 0 0 0 2.268h5.894a15.04 15.04 0 0 0-3.328 2.834H1.76a1.134 1.134 0 0 0 0 2.268h6.067a14.838 14.838 0 0 0-2.06 7.56c0 3.208 1.017 6.182 2.745 8.619H5.294a1.134 1.134 0 0 0 0 2.267h5.196a15.024 15.024 0 0 0 2.304 1.776H1.876a1.134 1.134 0 0 0 0 2.267h18.82c8.232 0 14.929-6.697 14.929-14.93 0-8.231-6.697-14.929-14.93-14.929Zm5.509 22.372c-.021.017-.042.035-.064.051a1.154 1.154 0 0 1-.078.052 9.211 9.211 0 0 1-5.367 1.717 9.212 9.212 0 0 1-5.367-1.717 1.154 1.154 0 0 1-.077-.052c-.022-.016-.043-.034-.064-.051a9.254 9.254 0 0 1-3.754-7.442c0-5.107 4.155-9.262 9.262-9.262 5.108 0 9.263 4.155 9.263 9.262a9.254 9.254 0 0 1-3.754 7.442Z"
      />
      <Path
        fill="url(#f)"
        d="m14.483 14.29 2.936.953a3.995 3.995 0 0 1 2.142-1.558v-3.087a7.014 7.014 0 0 0-5.078 3.691Z"
      />
      <Path
        fill="url(#g)"
        d="M22.02 21.253a3.962 3.962 0 0 1-2.65 0l-1.813 2.496c.944.476 2.01.745 3.138.745a6.951 6.951 0 0 0 3.14-.745l-1.815-2.496Z"
      />
      <Path
        fill="url(#h)"
        d="M16.715 17.5c0-.034.002-.067.003-.1l-2.938-.954a6.972 6.972 0 0 0 1.943 5.969l1.814-2.497a3.96 3.96 0 0 1-.822-2.418Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={20.695}
        x2={20.695}
        y1={15.788}
        y2={19.212}
        gradientUnits="userSpaceOnUse">
        <Stop offset={0.37} stopColor="#FFC850" />
        <Stop offset={0.54} stopColor="#FFDC64" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={24.369}
        x2={24.369}
        y1={10.598}
        y2={15.243}
        gradientUnits="userSpaceOnUse">
        <Stop offset={0.37} stopColor="#FFC850" />
        <Stop offset={0.54} stopColor="#FFDC64" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={25.772}
        x2={25.772}
        y1={16.445}
        y2={22.414}
        gradientUnits="userSpaceOnUse">
        <Stop offset={0.37} stopColor="#FFC850" />
        <Stop offset={0.54} stopColor="#FFDC64" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={18.125}
        x2={18.125}
        y1={2.57}
        y2={32.429}
        gradientUnits="userSpaceOnUse">
        <Stop offset={0.37} stopColor="#FFC850" />
        <Stop offset={0.54} stopColor="#FFDC64" />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={17.022}
        x2={17.022}
        y1={10.598}
        y2={15.243}
        gradientUnits="userSpaceOnUse">
        <Stop offset={0.37} stopColor="#FFC850" />
        <Stop offset={0.54} stopColor="#FFDC64" />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={20.695}
        x2={20.695}
        y1={21.253}
        y2={24.494}
        gradientUnits="userSpaceOnUse">
        <Stop offset={0.37} stopColor="#FFC850" />
        <Stop offset={0.54} stopColor="#FFDC64" />
      </LinearGradient>
      <LinearGradient
        id="h"
        x1={15.619}
        x2={15.619}
        y1={16.445}
        y2={22.414}
        gradientUnits="userSpaceOnUse">
        <Stop offset={0.37} stopColor="#FFC850" />
        <Stop offset={0.54} stopColor="#FFDC64" />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M.625 0h35v35h-35z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgComponent;
