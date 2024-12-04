import {ChevronLeft, ChevronRight} from 'lucide-react-native';
import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity, View,
} from 'react-native';
import {XStack, Image, YStack, SizableText} from 'tamagui';
import LinearGradient from 'react-native-linear-gradient';

import mock from 'app/assets/news';
import {navigate} from 'app/navigationRef';

const Lobby: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const activeData = mock.data[activeIndex];

  return (
    <ImageBackground
      style={styles.root}
      source={require('app/assets/images/bg.png')}>
      <View
        style={styles.root}>
        <SafeAreaView style={styles.root}>
          <YStack px={20} f={1}>
            <YStack h="100%">
              <XStack ai="center" jc="center" py={20}>
                <Image
                  w={60}
                  h={62}
                  source={require('app/assets/images/logo.png')}
                />
              </XStack>

              <XStack ai="center" jc="center" gap={16} f={1}>
                <TouchableOpacity
                  onPress={() => {
                    const nextIndex = activeIndex - 1;
                    if (nextIndex < 0) {
                      setActiveIndex(mock.data.length - 1);
                      return;
                    }
                    setActiveIndex(nextIndex);
                  }}>
                  <ChevronLeft size={30} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigate('Details', {item: activeData})}>
                  <YStack
                    h="80%"
                    jc="center"
                    p={14}
                    bg="#3E3977"
                    br={33}
                    borderWidth={1}
                    mb={120}
                    w={250 + 28}
                    ai="center"
                    bw={1}
                    borderColor="#534C98">
                    {activeData.image && (
                      <Image
                        source={activeData.image}
                        w={250}
                        h="85%"
                        br={16}
                      />
                    )}

                    <XStack jc="space-between" ai="center" mt={10}>
                      <SizableText fos={16} color="#fff">
                        {activeData.name}
                      </SizableText>
                    </XStack>
                  </YStack>
                </TouchableOpacity>

                <TouchableOpacity>
                  <ChevronRight
                    size={30}
                    color="#fff"
                    onPress={() => {
                      const nextIndex = activeIndex + 1;
                      if (nextIndex >= mock.data.length) {
                        setActiveIndex(0);
                        return;
                      }
                      setActiveIndex(nextIndex);
                    }}
                  />
                </TouchableOpacity>
              </XStack>
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
});

export default Lobby;
