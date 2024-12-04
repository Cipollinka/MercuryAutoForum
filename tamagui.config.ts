import {themes, tokens} from '@tamagui/themes';
import {config} from '@tamagui/config/v3';
import {shorthands} from '@tamagui/shorthands';
import {createFont, createTamagui, TamaguiCustomConfig} from 'tamagui';
import {createAnimations} from '@tamagui/animations-react-native';

const archivoFace = {
  normal: {normal: 'Archivo-Regular', italic: 'Archivo-Regular'},
  600: {normal: 'Archivo-SemiBold', italic: 'Archivo-SemiBold'},
  800: {normal: 'Archivo-ExtraBold', italic: 'Archivo-ExtraBold'},
  900: {normal: 'Archivo-ExtraBold', italic: 'Archivo-ExtraBold'},
};

const headingFont = createFont({
  size: config.fonts.heading.size,
  lineHeight: config.fonts.heading.lineHeight,
  weight: config.fonts.heading.weight,
  letterSpacing: config.fonts.heading.letterSpacing,
  face: archivoFace,
});

const bodyFont = createFont({
  size: config.fonts.body.size,
  lineHeight: config.fonts.body.lineHeight,
  weight: config.fonts.body.weight,
  letterSpacing: config.fonts.body.letterSpacing,
  face: archivoFace,
});

const animations = createAnimations({
  quick: {
    type: 'spring',
    damping: 20,
    mass: 1.2,
    stiffness: 250,
  },
});

const appConfig = createTamagui({
  themes,
  tokens,
  shorthands,
  fonts: {
    heading: headingFont,
    body: bodyFont,
  },
  animations,
});

export type AppConfig = typeof appConfig;

declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default appConfig as any as TamaguiCustomConfig;
