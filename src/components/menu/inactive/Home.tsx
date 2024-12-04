import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg width={35} height={34} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#35325F"
        d="m33.583 14.788-.002-.002L19.71.917A3.109 3.109 0 0 0 17.498 0a3.11 3.11 0 0 0-2.213.917L1.423 14.779l-.014.014a3.134 3.134 0 0 0 .006 4.42 3.112 3.112 0 0 0 2.173.917h.553v10.207A3.667 3.667 0 0 0 7.804 34h5.427c.55 0 .996-.446.996-.996v-8.002c0-.922.75-1.671 1.671-1.671h3.2c.922 0 1.672.75 1.672 1.671v8.002c0 .55.446.996.996.996h5.426a3.667 3.667 0 0 0 3.663-3.663V20.13h.513a3.11 3.11 0 0 0 2.213-.916 3.135 3.135 0 0 0 .002-4.426Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.5 0h34v34H.5z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgComponent;
