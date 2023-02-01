import { ACTIONS } from './actions';

import { LOCALES } from '~/src/intl';
import { IUser } from '~/src/types';

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined ? { type: Key } : { type: Key; payload: M[Key] };
};

export type IAppState = { user?: IUser; locale: LOCALES };

type UserPayload = { [ACTIONS.setUser]: { user: IUser }; [ACTIONS.resetUser]: {} };
type LocalePayload = { [ACTIONS.setLocale]: { locale: LOCALES } };

export type UserActions = ActionMap<UserPayload>[keyof ActionMap<UserPayload>];
export type LocaleActions = ActionMap<LocalePayload>[keyof ActionMap<LocalePayload>];
