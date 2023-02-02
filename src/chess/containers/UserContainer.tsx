import React, { useCallback, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import User from '../components/User';
import { ROUTES } from '../constants';
import { useUser } from '../hooks';

import { ACTIONS } from '~/src/store/actions';
import { useAppState } from '~/src/store/context';
import { IUser } from '~/src/types';

type UserContainerProps = {
  username?: string;
};

const UserContainer: React.FC<UserContainerProps> = ({ username }) => {
  const { state: appState, dispatch } = useAppState();
  const { data: user, isLoading, isSuccess } = useUser({ username, enabled: Boolean(username) });
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      dispatch({ type: ACTIONS.setUser, payload: { user } });
    }
  }, [dispatch, isSuccess, user]);

  const handleGoToStats = useCallback(() => {
    navigate(ROUTES.stats);
  }, [navigate]);

  return (
    <User
      user={(user as IUser) || appState.user}
      isLoading={isLoading}
      handleGoToStats={handleGoToStats}
    />
  );
};

export default UserContainer;
