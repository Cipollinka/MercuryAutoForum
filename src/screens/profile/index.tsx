import {Check} from 'lucide-react-native';
import React from 'react';
import {
  Linking,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity, View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {XStack, Image, YStack, Label, Checkbox, SizableText} from 'tamagui';

import {setUserInfo} from 'app/store/coreReducer';
import {useAppDispatch, useAppSelector} from 'app/store/hooks';

const openUrl = (isMusic: boolean) => {
  Linking.openURL(
    isMusic ? 'https://music.apple.com/ua/album/cars-original-motion-picture-soundtrack/1440667439' : 'mailto:rosabruzual78@gmail.com'
  );
};
const ProfileScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const {userInfo} = useAppSelector(state => state.core);

  return (
    <ImageBackground
      style={styles.root}
      source={require('app/assets/images/bg.png')}>
      <View
        style={styles.root}>
        <SafeAreaView style={styles.root}>
          <YStack px={20} f={1} jc="space-between" pb={80}>
            <YStack>
              <XStack ai="center" jc="center" py={20}>
                <Image
                  w={134}
                  h={138}
                  source={require('app/assets/images/logo.png')}
                />
              </XStack>

              <YStack jc="center" ai="center" gap="$4">
                <Checkbox
                  w={48}
                  h={48}
                  checked={userInfo?.notifications}
                  id="notifications"
                  borderRadius={8}
                  bg="transparent"
                  borderWidth={4}
                  onCheckedChange={() =>
                    dispatch(
                      setUserInfo({notifications: !userInfo?.notifications}),
                    )
                  }
                  borderColor="#A7A2DF">
                  <Checkbox.Indicator>
                    <Check size={30} color="#fff" />
                  </Checkbox.Indicator>
                </Checkbox>

                <Label htmlFor="notifications" fos={30} color="#fff">
                  Notifications
                </Label>
              </YStack>
            </YStack>

            <YStack>
              <TouchableOpacity onPress={() => openUrl(false)}>
                <ImageBackground
                  style={styles.button}
                  resizeMode="contain"
                  source={require('app/assets/images/btn.png')}>
                  <SizableText
                    fow="800"
                    style={styles.textWithShadow}
                    fos={36}
                    color="#2E2766"
                    lineHeight={106}
                    mt={-30}>
                    Support
                  </SizableText>
                </ImageBackground>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => openUrl(true)}>
                <ImageBackground
                  style={styles.button}
                  resizeMode="contain"
                  source={require('app/assets/images/btn.png')}>
                  <SizableText
                    fow="800"
                    fos={36}
                    color="#2E2766"
                    style={styles.textWithShadow}
                    lineHeight={106}
                    mt={-30}>
                    Music
                  </SizableText>
                </ImageBackground>
              </TouchableOpacity>
            </YStack>
          </YStack>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  button: {
    width: '100%',
    height: 106,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWithShadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 0, height: 4},
    textShadowRadius: 1,
  },
});

export default ProfileScreen;
