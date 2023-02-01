import dayjs from 'dayjs';

import { ACTIONS } from './actions';
import { IAppState, LocaleActions, UserActions } from './types';

const AppReducer =
  (initialState: IAppState) =>
  (state: IAppState, { type, payload }: UserActions | LocaleActions) => {
    switch (type) {
      case ACTIONS.setUser:
        return { ...state, user: payload.user };

      case ACTIONS.resetUser:
        return { ...state, user: initialState.user };

      case ACTIONS.setLocale:
        dayjs.locale(payload.locale);
        return { ...state, locale: payload.locale };

      default:
        throw new Error("Action type doesn't exist");
    }
  };

export default AppReducer;
