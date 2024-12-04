import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Share} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {navigate} from 'app/navigationRef';
import StarActive from './active/Star';
import StarInactive from './inactive/Star';
import HomeActive from './active/Home';
import HomeInactive from './inactive/Home';
import SettingsActive from './active/Settings';
import SettingsInactive from './inactive/Settings';
import TireActive from './active/Tire';
import TireInactive from './inactive/Tire';
import ProfileActive from './active/Profile';
import ProfileInactive from './inactive/Profile';

const icons: any = {
  Lobby: {
    active: StarActive,
    inactive: StarInactive,
  },
  List: {
    active: TireActive,
    inactive: TireInactive,
  },
  Home: {
    active: HomeActive,
    inactive: HomeInactive,
  },
  Share: {
    active: ProfileActive,
    inactive: ProfileInactive,
  },
  Profile: {
    active: SettingsActive,
    inactive: SettingsInactive,
  },
};

const menuItems = Object.keys(icons);

const Menu = () => {
  const insets = useSafeAreaInsets();
  const [activeRoute, setActiveRoute] = useState(menuItems[0]);

  const shareApp = () => {
    Share.share({
      message: 'Check out this app!',
      url: 'https://apps.apple.com/us/app/id6737687953',
      title: 'Mercury Auto Forum',
    });
  };

  return (
    <View style={styles.overlay}>
      <View style={[styles.container, {marginBottom: insets.bottom + 5}]}>
        {menuItems.map((item, index) => {
          const isActive = activeRoute === item;
          const Icon = isActive ? icons[item].active : icons[item].inactive;
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                if (item === 'Share') {
                  shareApp();
                  return;
                }
                navigate(item);
                setActiveRoute(item);
              }}
              style={[styles.item, isActive ? styles.active : null]}>
              {Icon && <Icon />}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    backgroundColor: '#201E3A',
    height: 75,
    margin: 20,
    borderRadius: 14,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  active: {},
});

export default Menu;
