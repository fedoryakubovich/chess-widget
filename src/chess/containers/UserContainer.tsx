import React, { useCallback } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import User from '../components/User';
import { ROUTES } from '../constants';
import { useUser } from '../hooks';

import { IUser } from '~/src/types';

type UserContainerProps = {
  username: string;
};

const UserContainer: React.FC<UserContainerProps> = ({ username }) => {
  const { state } = useLocation();
  const { data: user, isLoading } = useUser({ username: state.username });
  const navigate = useNavigate();

  const handleGoToStats = useCallback(() => {
    navigate(ROUTES.stats, { state: { username } });
  }, [navigate, username]);

  return <User user={user as IUser} isLoading={isLoading} handleGoToStats={handleGoToStats} />;
};

export default UserContainer;
