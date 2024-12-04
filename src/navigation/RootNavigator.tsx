import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Menu from 'app/components/menu';
import Home from 'app/screens/home';
import List from 'app/screens/list';
import Chat from 'app/screens/chat';
import Profile from 'app/screens/profile';
import Lobby from 'app/screens/preview';
import Details from 'app/screens/details';
import Onboarding from 'app/screens/onboarding';

import {useAppSelector} from 'app/store/hooks';

const Stack = createNativeStackNavigator();

const hideMenuForRoutes = ['Onboarding', 'Chat'];

function RootNavigator() {
  const {currentRouteName, hideWelcomeScreen, showFilter} = useAppSelector(
    state => state.core,
  );

  return (
    <>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={hideWelcomeScreen ? 'Lobby' : 'Onboarding'}>
        <Stack.Screen name="Lobby" component={Lobby} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
      </Stack.Navigator>

      {!currentRouteName ||
        (!hideMenuForRoutes.includes(currentRouteName) && !showFilter && (
          <Menu />
        ))}
    </>
  );
}

export default RootNavigator;
