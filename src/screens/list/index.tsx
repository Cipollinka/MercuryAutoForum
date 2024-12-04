import {SlidersHorizontal, X, Star, Check} from 'lucide-react-native';
import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  XStack,
  Image,
  YStack,
  View,
  SizableText,
  Checkbox,
  Label,
} from 'tamagui';
import LinearGradient from 'react-native-linear-gradient';

import mock from 'app/assets/news';
import {togglefavorite, setShowFilter} from 'app/store/coreReducer';
import {useAppDispatch, useAppSelector} from 'app/store/hooks';
import {navigate} from 'app/navigationRef';

const List: React.FC = () => {
  const dispatch = useAppDispatch();
  const insets = useSafeAreaInsets();
  const [filtersData, setFiltersData] = React.useState<string[]>([]);
  const {favorites = [], showFilter = false} = useAppSelector(
    state => state.core,
  );

  const filters = Array.from(
    new Set(mock.data.map(item => [item.drive, item.gearbox]).flat()),
  );

  const data =
    filtersData.length > 0
      ? mock.data.filter(item => {
          return (
            filtersData.includes(item.drive) ||
            filtersData.includes(item.gearbox)
          );
        })
      : mock.data;

  return (
    <ImageBackground
      style={styles.root}
      source={require('app/assets/images/bg.png')}>
      <View
        style={styles.root}>
        <SafeAreaView style={styles.root}>
          <XStack p={16} ai="center">
            <View flex={1}>
              <TouchableOpacity
                onPress={() => dispatch(setShowFilter(!showFilter))}>
                <SlidersHorizontal size={24} color="#fff" />
              </TouchableOpacity>
            </View>
            <View>
              <SizableText col="#fff" fos={24} fow="800">
                Mercury Cars
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
                        <Star
                          size={28}
                          color={
                            favorites.includes(item.name)
                              ? '#FFC850'
                              : '#4C468A'
                          }
                          fill={
                            favorites.includes(item.name)
                              ? '#FFC850'
                              : '#4C468A'
                          }
                        />
                      </TouchableOpacity>
                    </XStack>
                  </YStack>
                </TouchableOpacity>
              )}
            />
          </YStack>

          {showFilter && (
            <YStack
              bg="#3C348A"
              w="80%"
              pos="absolute"
              left={0}
              top={0}
              animation={[
                'quick',
                {
                  opacity: {
                    overshootClamping: true,
                  },
                },
              ]}
              pt={insets.top + 10}
              bottom={0}>
              <View pos="absolute" top={insets.top + 10} right={-60}>
                <TouchableOpacity
                  onPress={() => dispatch(setShowFilter(false))}>
                  <X size={40} color="#fff" />
                </TouchableOpacity>
              </View>
              <Image
                source={require('app/assets/images/logo2.png')}
                objectFit="contain"
                mb={30}
                ml={20}
                h={40}
                w={160}
              />
              {filters.map(filter => (
                <XStack key={filter} ai="center" px={20} gap="$4" w="100%">
                  <Checkbox
                    w={24}
                    h={24}
                    checked={filtersData.includes(filter)}
                    id={filter}
                    borderRadius={8}
                    bg="transparent"
                    borderWidth={2}
                    onCheckedChange={() => {
                      if (filtersData.includes(filter)) {
                        setFiltersData(
                          filtersData.filter(item => item !== filter),
                        );
                      } else {
                        setFiltersData([...filtersData, filter]);
                      }
                    }}
                    borderColor="#4C468A">
                    <Checkbox.Indicator>
                      <Check size={16} color="#fff" />
                    </Checkbox.Indicator>
                  </Checkbox>

                  <Label
                    pr={10}
                    textTransform="capitalize"
                    htmlFor={filter}
                    color="#fff">
                    {filter}
                  </Label>
                </XStack>
              ))}
            </YStack>
          )}
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

export default List;
