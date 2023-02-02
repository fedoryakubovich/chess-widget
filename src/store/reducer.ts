import dayjs from 'dayjs';

import { ACTIONS } from './actions';
import { IAppState, LocaleActions, TitleActions, UserActions } from './types';

const AppReducer =
  (initialState: IAppState) =>
  (state: IAppState, { type, payload }: UserActions | LocaleActions | TitleActions) => {
    switch (type) {
      case ACTIONS.setUser:
        return { ...state, user: payload.user };

      case ACTIONS.resetUser:
        return { ...state, user: initialState.user };

      case ACTIONS.setLocale:
        dayjs.locale(payload.locale);
        return { ...state, locale: payload.locale };

      case ACTIONS.setTitle:
        return { ...state, title: payload.title };

      default:
        throw new Error("Action type doesn't exist");
    }
  };

export default AppReducer;
