import React from 'react';

import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { ROUTES } from './constants';
import HomeContainer from './containers/HomeContainer';
import StatsContainer from './containers/StatsContainer';
import UserContainer from './containers/UserContainer';
import { AppProvider } from '../store/context';
import { WebComponentProps } from '../types';

import WCWrapper from '~/src/components/WCWrapper';

const User: React.FC<WebComponentProps> = ({ username }) => {
  return (
    <AppProvider>
      <MemoryRouter initialEntries={[ROUTES.home]}>
        <Routes>
          <Route path={ROUTES.home} element={<HomeContainer />} />

          <Route path={ROUTES.user} element={<UserContainer username={username} />} />

          <Route path={ROUTES.stats} element={<StatsContainer />} />
        </Routes>
      </MemoryRouter>
    </AppProvider>
  );
};

customElements.define('chess-widget', WCWrapper(User));
