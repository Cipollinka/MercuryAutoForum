import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Alert,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import RNLinearGradient from 'react-native-linear-gradient';
import ContextMenu from 'react-native-context-menu-view';
import {XStack, Input, View, Dialog, Image, YStack, SizableText} from 'tamagui';
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from 'react-native-svg';

import mock from 'app/assets/news';
import {useAppDispatch, useAppSelector} from 'app/store/hooks';
import {
  setChat,
  setBlockedUsers,
  removeChatMessage,
} from 'app/store/coreReducer';
import {ChevronLeft, X} from 'lucide-react-native';
import {goBack} from 'app/navigationRef';
import {nanoid} from '@reduxjs/toolkit';

interface IProps {
  route?: {
    params?: {
      item: (typeof mock.data)[0];
    };
  };
}

const Chat: React.FC<IProps> = ({route}) => {
  const activeData = route?.params?.item;
  const dispatch = useAppDispatch();
  const [message, setMessage] = React.useState('');
  const [reportMessage, setReportMessage] = React.useState('');
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const {chat = {}, blockedUsers = []} = useAppSelector(state => state.core);

  if (!activeData) {
    return null;
  }

  const addMessage = () => {
    if (message) {
      dispatch(
        setChat({
          chatId: activeData.id,
          message: {
            id: nanoid(),
            message,
            isOwnMessage: true,
          },
        }),
      );
      Keyboard.dismiss();
      setMessage('');
    }
  };

  const chatList = chat?.[activeData.id] || [];
  const title = activeData.name?.split(',')[0];

  const toogleBlockUser = () => {
    if (blockedUsers?.includes(activeData.id)) {
      dispatch(
        setBlockedUsers(blockedUsers?.filter(item => item !== activeData.id)),
      );
      return;
    }

    dispatch(setBlockedUsers([...(blockedUsers || []), activeData.id]));
  };

  return (
    <ImageBackground
      style={styles.root}
      source={require('app/assets/images/bg.png')}>
      <View
        style={styles.root}>
        <SafeAreaView style={styles.root}>
          <>
            <KeyboardAvoidingView
              behavior="padding"
              enabled
              style={styles.root}>
              <YStack px={20} f={1}>
                <YStack h="100%">
                  <XStack px={20} py={10} ai="center" mb={20}>
                    <View flex={1}>
                      <TouchableOpacity onPress={goBack}>
                        <ChevronLeft color="#fff" size={30} />
                      </TouchableOpacity>
                    </View>
                    <View>
                      <SizableText col="#fff" fos={24} fow="800">
                        {title}
                      </SizableText>
                    </View>
                    <View flex={1} />
                  </XStack>

                  <YStack jc="space-between" f={1}>
                    <YStack
                      p={14}
                      bg="#3E3977"
                      br={33}
                      borderWidth={1}
                      mb={30}
                      f={1}
                      ai="center"
                      jc="space-between"
                      borderColor="#534C98">
                      <View>
                        {activeData.image && (
                          <Image
                            source={activeData.image}
                            w={300}
                            h={150}
                            br={16}
                          />
                        )}

                        <SizableText fos={16} color="#fff" mt={20} ta="center">
                          {activeData.name}
                        </SizableText>

                        <XStack jc="center" mt={10}>
                          <TouchableOpacity onPress={toogleBlockUser}>
                            <SizableText
                              col="#fff"
                              fos={16}
                              fow={600}
                              ta="center">
                              {blockedUsers?.includes(activeData.id)
                                ? 'Unblock'
                                : 'Block'}
                              &nbsp;user
                            </SizableText>
                          </TouchableOpacity>
                        </XStack>
                      </View>

                      <YStack w="100%" mt={20} jc="flex-end">
                        {!blockedUsers?.includes(activeData.id) && (
                          <FlatList
                            data={chatList}
                            renderItem={({item}) => {
                              return (
                                <ContextMenu
                                  actions={[
                                    {
                                      title: 'Delete message',
                                      systemIcon: 'trash',
                                    },
                                    {
                                      title: 'Report user',
                                      systemIcon:
                                        'person.crop.circle.badge.xmark',
                                    },
                                  ]}
                                  onPress={({nativeEvent: {index}}) => {
                                    if (index === 0 && item.isOwnMessage) {
                                      dispatch(
                                        removeChatMessage({
                                          chatId: activeData.id,
                                          messageId: item.id,
                                        }),
                                      );
                                      return;
                                    }

                                    if (index === 1) {
                                      setIsDialogOpen(true);
                                    }
                                  }}>
                                  <XStack
                                    mb={10}
                                    jc={
                                      item.isOwnMessage
                                        ? 'flex-end'
                                        : 'flex-start'
                                    }>
                                    <XStack
                                      w="90%"
                                      px={12}
                                      py={6}
                                      br={18}
                                      bg="#3F46D7">
                                      <SizableText fos={17}>
                                        {item.message}
                                      </SizableText>
                                    </XStack>
                                    <View pos="absolute" bottom={-5} right={0}>
                                      <Svg width={18} height={21} fill="none">
                                        <Path
                                          fill="#3F46D7"
                                          d="M16.955 20.185c-5.2.8-10.333-2.064-12-3.897C6.673 12.19-3.933 2.242 3.067 2.24c1.619 0 3.001-4.24 8.888-1.056.021 1.286 0 5.74 0 6.5 0 10.5 6 11.896 5 12.5Z"
                                        />
                                      </Svg>
                                    </View>
                                  </XStack>
                                </ContextMenu>
                              );
                            }}
                            ListEmptyComponent={
                              <XStack ai="center" jc="center" mt={20}>
                                <SizableText col="#fff" fos={16} ta="center">
                                  No messages yet
                                </SizableText>
                              </XStack>
                            }
                            keyExtractor={(_, index) => `${index}_kyb`}
                          />
                        )}
                      </YStack>
                    </YStack>

                    <XStack jc="space-between" ai="center" mb={10}>
                      <Input
                        h={56}
                        bw={1}
                        f={1}
                        borderColor="#3C376C"
                        value={message}
                        br={100}
                        bg="#19172F"
                        color="#fff"
                        placeholderTextColor="#fff"
                        placeholder="Write message..."
                        onChangeText={setMessage}
                      />
                      <TouchableOpacity onPress={addMessage}>
                        <View
                          w={56}
                          h={56}
                          bg="#22203F"
                          br={28}
                          ml={15}
                          ai="center"
                          jc="center">
                          <Svg width={24} height={24} fill="none">
                            <G clipPath="url(#a)">
                              <Path
                                fill="url(#b)"
                                d="M8.75 17.612v4.638a.751.751 0 0 0 1.354.444l2.713-3.692-4.067-1.39Z"
                              />
                              <Path
                                fill="url(#c)"
                                d="M23.685.14a.75.75 0 0 0-.782-.055l-22.5 11.75a.752.752 0 0 0 .104 1.375l6.255 2.138 13.321-11.39-10.308 12.42 10.483 3.582a.753.753 0 0 0 .984-.599l2.75-18.5a.751.751 0 0 0-.307-.722Z"
                              />
                            </G>
                            <Defs>
                              <LinearGradient
                                id="b"
                                x1={10.784}
                                x2={10.784}
                                y1={17.612}
                                y2={23}
                                gradientUnits="userSpaceOnUse">
                                <Stop offset={0.37} stopColor="#FFC850" />
                                <Stop offset={0.54} stopColor="#FFDC64" />
                              </LinearGradient>
                              <LinearGradient
                                id="c"
                                x1={12}
                                x2={12}
                                y1={0}
                                y2={20}
                                gradientUnits="userSpaceOnUse">
                                <Stop offset={0.37} stopColor="#FFC850" />
                                <Stop offset={0.54} stopColor="#FFDC64" />
                              </LinearGradient>
                              <ClipPath id="a">
                                <Path fill="#fff" d="M0 0h24v24H0z" />
                              </ClipPath>
                            </Defs>
                          </Svg>
                        </View>
                      </TouchableOpacity>
                    </XStack>
                  </YStack>
                </YStack>
              </YStack>
            </KeyboardAvoidingView>
          </>
        </SafeAreaView>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <Dialog.Portal>
            <Dialog.Overlay opacity={0.7} />
            <Dialog.Content w="96%" h={400} bg="#19172F">
              <XStack ai="center" jc="space-between">
                <Dialog.Title mb={10} fos={24} fow={600}>
                  Send Report
                </Dialog.Title>
                <TouchableOpacity onPress={() => setIsDialogOpen(false)}>
                  <X size={30} color="#fff" />
                </TouchableOpacity>
              </XStack>

              <Input
                h={56}
                bw={1}
                borderColor="#3C376C"
                value={reportMessage}
                br={14}
                bg="#19172F"
                color="#fff"
                multiline
                mih={180}
                placeholder="Description..."
                placeholderTextColor="#fff"
                onChangeText={setReportMessage}
              />
              <SizableText mt={6} mb={20}>
                minimum 10 characters
              </SizableText>

              <TouchableOpacity
                disabled={reportMessage.length < 10}
                onPress={() => {
                  setIsDialogOpen(false);
                  Alert.alert('Report sent');
                }}>
                <ImageBackground
                  style={[
                    styles.button,
                    reportMessage.length > 10 ? styles.active : null,
                  ]}
                  resizeMode="contain"
                  source={require('app/assets/images/btn.png')}>
                  <SizableText
                    fow="800"
                    fos={20}
                    lineHeight={106}
                    color="#2E2766"
                    style={styles.textWithShadow}
                    mt={-25}>
                    Send
                  </SizableText>
                </ImageBackground>
              </TouchableOpacity>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  button: {
    opacity: 0.5,
    minWidth: '70%',
    height: 106,
    alignItems: 'center',
    justifyContent: 'center',
  },
  active: {
    opacity: 1,
  },
  textWithShadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 0, height: 4},
    textShadowRadius: 1,
  },
});

export default Chat;
