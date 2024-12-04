import {createSlice} from '@reduxjs/toolkit';

export interface UserInfo {
  name: string;
  notifications: boolean;
  email: string;
}

export interface CoreState {
  favorites: string[];
  userInfo?: UserInfo | null;
  currentRouteName?: string;
  hideWelcomeScreen: boolean;
  chat: {
    [key: string]: {
      id: string;
      message: string;
      isOwnMessage: boolean;
    }[];
  };
  showFilter: boolean;
  blockedUsers: string[];
}

const initialState: CoreState = {
  favorites: [],
  userInfo: null,
  hideWelcomeScreen: false,
  currentRouteName: 'Home',
  chat: {},
  showFilter: false,
  blockedUsers: [],
};

export const coreSlice = createSlice({
  name: 'core',
  initialState,
  reducers: {
    reset(state) {
      state.favorites = [];
      state.userInfo = null;
      state.currentRouteName = 'Home';
      state.hideWelcomeScreen = false;
    },
    togglefavorite(state, action) {
      const index = (state.favorites || []).indexOf(action.payload);
      if (index === -1) {
        state.favorites = [...(state.favorites || []), action.payload];
      } else {
        state.favorites = state.favorites.filter(
          item => item !== action.payload,
        );
      }
    },
    setUserInfo: (state, action) => {
      state.userInfo = {...(state.userInfo || {}), ...action.payload};
    },
    setBlockedUsers: (state, action) => {
      state.blockedUsers = action.payload;
    },
    setChat: (state, action) => {
      state.chat = {
        ...(state.chat || {}),
        [action.payload.chatId]: [
          ...(state.chat?.[action.payload.chatId] || []),
          action.payload.message,
        ],
      };
    },
    removeChatMessage: (state, action) => {
      const messages = state.chat?.[action.payload.chatId] || [];

      state.chat = {
        ...(state.chat || {}),
        [action.payload.chatId]: [
          ...messages.filter(item => item.id !== action.payload.messageId),
        ],
      };
    },
    setCurrentRouteName(state, action) {
      state.currentRouteName = action.payload;
    },
    setHideWelcomeScreen(state, action) {
      state.hideWelcomeScreen = action.payload;
    },
    setShowFilter(state, action) {
      state.showFilter = action.payload;
    },
  },
});

export const {
  reset,
  setChat,
  setShowFilter,
  togglefavorite,
  setUserInfo,
  setBlockedUsers,
  removeChatMessage,
  setCurrentRouteName,
  setHideWelcomeScreen,
} = coreSlice.actions;
