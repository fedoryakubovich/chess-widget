import React, { useCallback, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import Home from '../components/Home';
import { ROUTES } from '../constants';
import { useGetUsersByTitle, useGetUsersInfo } from '../hooks';

const HomeContainer: React.FC = () => {
  const [state, setState] = useState({ page: 0, pageSize: 30, hasMore: true });
  const { data: usernames } = useGetUsersByTitle({ title: 'GM' });
  const users = useGetUsersInfo({
    usernames: usernames?.slice(0, (state.page + 1) * state.pageSize),
  });
  const navigate = useNavigate();

  const handleGoToInfo = useCallback(
    (user) => {
      navigate(ROUTES.user, { state: { username: user.data.username } });
    },
    [navigate]
  );

  const handleLoadMore = useCallback(() => {
    setState((currentState) => ({
      ...currentState,
      page: currentState.page + 1,
    }));
  }, []);

  return (
    <Home
      users={users}
      handleGoToInfo={handleGoToInfo}
      handleLoadMore={handleLoadMore}
      hasMore={usernames < users.length}
    />
  );
};

export default HomeContainer;
