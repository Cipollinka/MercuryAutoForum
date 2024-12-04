import {SlidersHorizontal, Sparkle} from 'lucide-react-native';
import React, {useCallback} from 'react';
import {
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {XStack, Image, YStack, View, SizableText} from 'tamagui';
import {useFocusEffect} from '@react-navigation/native';

import mock from 'app/assets/news';
import {setCurrentRouteName, togglefavorite} from 'app/store/coreReducer';
import {useAppDispatch, useAppSelector} from 'app/store/hooks';
import {navigate} from 'app/navigationRef';

const List: React.FC = () => {
  const dispatch = useAppDispatch();
  const {favorites = []} = useAppSelector(state => state.core);

  const data = mock.data.filter(item => favorites.includes(item.name));

  useFocusEffect(
    useCallback(() => {
      dispatch(setCurrentRouteName('Lobby'));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );

  return (
    <ImageBackground
      style={styles.root}
      source={require('app/assets/images/bg.png')}>
      <SafeAreaView style={styles.root}>
        <XStack p={16} ai="center">
          <View flex={1}>
            <TouchableOpacity>
              <SlidersHorizontal size={24} color="#fff" />
            </TouchableOpacity>
          </View>
          <View>
            <SizableText col="#fff" fos={24} fow="800">
              Mercury Capri
            </SizableText>
          </View>
          <View flex={1} />
        </XStack>
        <YStack ai="center" mb={120}>
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => navigate('Details', {item})}>
                <YStack
                  key={item.name}
                  jc="center"
                  p={14}
                  bg="#3E3977"
                  br={33}
                  borderWidth={1}
                  mb={30}
                  w={250 + 28}
                  borderColor="#534C98">
                  <Image source={item.image} w={250} h={190} br={16} />

                  <XStack jc="space-between" ai="center" mt={10}>
                    <SizableText fos={16} color="#fff" w="80%">
                      {item.name}
                    </SizableText>
                    <TouchableOpacity
                      onPress={() => dispatch(togglefavorite(item.name))}>
                      <Sparkle size={28} color="#FFC850" fill="#FFC850" />
                    </TouchableOpacity>
                  </XStack>
                </YStack>
              </TouchableOpacity>
            )}
            ListEmptyComponent={
              <YStack ai="center" jc="center" mt={100}>
                <SizableText col="#fff" fos={18} fow="600">
                  No favorites
                </SizableText>
              </YStack>
            }
          />
        </YStack>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'rgba(24, 22, 45, 0.7)',
  },
});

export default List;
