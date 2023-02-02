import React, { useCallback, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import Home from '../components/Home';
import { ROUTES } from '../constants';
import { useGetUsersByTitle, useGetUsersInfo } from '../hooks';

import { TITLE } from '~/src/constants';
import { ACTIONS } from '~/src/store/actions';
import { useAppState } from '~/src/store/context';
import { IUser } from '~/src/types';

const HomeContainer: React.FC = () => {
  const [state, setState] = useState({ page: 0, pageSize: 30, hasMore: true });
  const { state: appState, dispatch } = useAppState();
  const { data: usernames } = useGetUsersByTitle({ title: appState.title });
  const users = useGetUsersInfo({
    usernames: usernames?.slice(0, (state.page + 1) * state.pageSize),
  });
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: ACTIONS.resetUser, payload: {} });
  }, [dispatch]);

  const handleGoToInfo = useCallback(
    (user: IUser) => {
      dispatch({ type: ACTIONS.setUser, payload: { user } });
      navigate(ROUTES.user);
    },
    [dispatch, navigate]
  );

  const handleChangeTitle = useCallback(
    (title: TITLE) => {
      dispatch({ type: ACTIONS.setTitle, payload: { title } });
    },
    [dispatch]
  );

  const handleLoadMore = useCallback(() => {
    setState((currentState) => ({ ...currentState, page: currentState.page + 1 }));
  }, []);

  return (
    <Home
      users={users}
      handleGoToInfo={handleGoToInfo}
      handleLoadMore={handleLoadMore}
      hasMore={usernames < users.length}
      handleChangeTitle={handleChangeTitle}
      title={appState.title}
    />
  );
};

export default HomeContainer;
