import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg width={34} height={33} fill="none" {...props}>
    <G fill="#35325F" clipPath="url(#a)">
      <Path d="m32.971 12.134-10.688-.991-4.246-9.86a.856.856 0 0 0-1.574 0l-4.246 9.86-10.688.99a.857.857 0 0 0-.487 1.497l8.065 7.085-2.36 10.472a.857.857 0 0 0 1.273.925l9.23-5.48 9.23 5.48a.857.857 0 0 0 1.273-.925l-2.36-10.472 8.065-7.085a.857.857 0 0 0-.487-1.496Z" />
      <Path d="M18.037 1.283a.856.856 0 0 0-1.574 0l-4.246 9.86-10.688.99a.857.857 0 0 0-.487 1.497l8.065 7.085-2.36 10.472a.857.857 0 0 0 1.273.925l2.06-1.223c.285-11.737 5.739-20.003 10.056-24.73l-2.1-4.876Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.75 0h33v33h-33z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgComponent;
