import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {XStack, Image, YStack, SizableText, View, ScrollView} from 'tamagui';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

import mock from 'app/assets/news';
import {navigate} from 'app/navigationRef';

interface IProps {
  route?: {
    params?: {
      item: (typeof mock.data)[0];
    };
  };
}

const Lobby: React.FC<IProps> = ({route}) => {
  const activeData = route?.params?.item;
  const [isOpen, setIsOpen] = React.useState(false);

  if (!activeData) {
    return null;
  }

  const title = activeData.name?.split(',')[0];

  return (
    <ImageBackground
      style={styles.root}
      source={require('app/assets/images/bg.png')}>
      <View
        style={styles.root}>
        <SafeAreaView style={styles.root}>
          <ScrollView>
            <XStack px={20} py={10} ai="center" mb={20}>
              <View flex={1} pr={20}>
                <Svg width={32} height={32} fill="none">
                  <G fill="#fff" clipPath="url(#a)">
                    <Path d="M24 16c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Zm3 9h-2v2c0 .6-.4 1-1 1s-1-.4-1-1v-2h-2c-.6 0-1-.4-1-1s.4-1 1-1h2v-2c0-.6.4-1 1-1s1 .4 1 1v2h2c.6 0 1 .4 1 1s-.4 1-1 1Z" />
                    <Path d="m8.4 22 1.2-2.3c.5-1 1.5-1.7 2.7-1.7H16c1.8-2.4 4.7-4 8-4 1.2 0 2.3.2 3.4.6-.4-.6-.9-1.2-1.4-1.6h1c.6 0 1-.4 1-1s-.4-1-1-1h-2.8L23 8c-.8-1.8-2.6-3-4.6-3H9.6C7.6 5 5.8 6.2 5 8l-1.3 3H1c-.6 0-1 .4-1 1s.4 1 1 1h1c-1.2.9-2 2.4-2 4v4c0 .9.4 1.7 1 2.2V25c0 1.7 1.3 3 3 3h2c1.7 0 3-1.3 3-3v-1h5c0-.7.1-1.4.2-2H8.4ZM7 19H4c-.6 0-1-.4-1-1s.4-1 1-1h3c.6 0 1 .4 1 1s-.4 1-1 1Zm-1.5-7 1.4-3.2C7.4 7.7 8.4 7 9.6 7h8.7c1.2 0 2.3.7 2.8 1.8l1.4 3.2h-17Z" />
                  </G>
                  <Defs>
                    <ClipPath id="a">
                      <Path fill="#fff" d="M0 0h32v32H0z" />
                    </ClipPath>
                  </Defs>
                </Svg>
              </View>
              <View>
                <SizableText col="#fff" fos={24} fow="800">
                  {title}
                </SizableText>
              </View>
              <View flex={1} />
            </XStack>
            <YStack px={20} ai="center">
              <YStack
                jc="center"
                p={14}
                bg="#3E3977"
                br={33}
                borderWidth={1}
                mb={30}
                ai="center"
                borderColor="#534C98">
                {activeData.image && (
                  <Image source={activeData.image} w={300} h={150} br={16} />
                )}

                <XStack jc="space-between" ai="center" mt={10}>
                  <SizableText fos={16} color="#fff">
                    {activeData.name}
                  </SizableText>
                </XStack>
              </YStack>
            </YStack>

            <YStack mt={26} px={20} gap={12}>
              <XStack ai="center">
                <SizableText fow="600">{activeData.name}</SizableText>
              </XStack>
              <XStack ai="center">
                <SizableText fow="600">Actuator: </SizableText>
                <SizableText fow="400">{activeData.drive}</SizableText>
              </XStack>
              <XStack ai="center">
                <SizableText fow="600">Maximum number of seats: </SizableText>
                <SizableText fow="400">
                  {activeData.maximum_number_of_seats}
                </SizableText>
              </XStack>
              <XStack ai="center">
                <SizableText fow="600">Transmission: </SizableText>
                <SizableText fow="400">{activeData.gearbox}</SizableText>
              </XStack>

              <XStack ai="center" jc="center" mt={10}>
                <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
                  <SizableText fow="600">
                    {isOpen ? 'Less' : 'More'} details
                  </SizableText>
                </TouchableOpacity>
              </XStack>

              {isOpen && (
                <YStack ai="center" pb={120}>
                  <SizableText fow="600" mb={6}>
                    General information:{' '}
                  </SizableText>
                  <SizableText fow="400">{activeData.description}</SizableText>

                  <XStack ai="center" jc="center" mt={10}>
                    <TouchableOpacity
                      onPress={() => navigate('Chat', {item: activeData})}>
                      <ImageBackground
                        style={styles.button}
                        resizeMode="contain"
                        source={require('app/assets/images/btn.png')}>
                        <SizableText
                          fow="800"
                          fos={20}
                          lineHeight={106}
                          color="#2E2766"
                          style={styles.textWithShadow}
                          mt={-25}>
                          Chat
                        </SizableText>
                      </ImageBackground>
                    </TouchableOpacity>
                  </XStack>
                </YStack>
              )}
            </YStack>
          </ScrollView>
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
    minWidth: '70%',
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

export default Lobby;
