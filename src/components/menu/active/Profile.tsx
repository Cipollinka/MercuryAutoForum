import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath, SvgProps} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg width={38} height={37} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#35325F"
        d="M18.875.001c-10.216 0-18.5 8.282-18.5 18.5 0 10.216 8.283 18.498 18.5 18.498 10.218 0 18.5-8.282 18.5-18.499 0-10.217-8.282-18.499-18.5-18.499Zm0 5.531a6.12 6.12 0 1 1 0 12.24 6.12 6.12 0 0 1 0-12.24Zm-.004 26.63c-3.372 0-6.46-1.227-8.841-3.26a2.608 2.608 0 0 1-.915-1.982c0-3.426 2.773-6.169 6.2-6.169h7.12a6.162 6.162 0 0 1 6.192 6.17c0 .762-.333 1.486-.914 1.98a13.572 13.572 0 0 1-8.842 3.262Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.375 0h37v37h-37z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgComponent;
