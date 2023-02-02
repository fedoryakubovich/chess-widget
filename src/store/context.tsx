import React, { createContext, Dispatch, useContext, useReducer } from 'react';

import { IntlProvider } from 'react-intl';
import { QueryClient, QueryClientProvider } from 'react-query';

import AppReducer from './reducer';
import { IAppState, LocaleActions, TitleActions, UserActions } from './types';
import { TITLE } from '../constants';

import { DEFAULT_LOCALE, LANG_MESSAGES } from '~/src/intl';

import('dayjs/locale/de');

const queryClient = new QueryClient();

type AppProviderProps = {
  children: React.ReactNode;
};

const initialState = {
  user: undefined,
  locale: DEFAULT_LOCALE,
  title: TITLE.GM,
};
const AppContext = createContext<{
  state: IAppState;
  dispatch: Dispatch<UserActions | LocaleActions | TitleActions>;
}>({ state: initialState, dispatch: () => null });

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer(initialState), initialState);

  return (
    <QueryClientProvider client={queryClient}>
      <AppContext.Provider value={{ state, dispatch }}>
        <IntlProvider
          locale={state.locale}
          messages={LANG_MESSAGES[state.locale]}
          defaultLocale={DEFAULT_LOCALE}
        >
          {children}
        </IntlProvider>
      </AppContext.Provider>
    </QueryClientProvider>
  );
};

const useAppState = () => useContext(AppContext);

export { AppProvider, useAppState };
