import { useQueries, useQuery, UseQueryResult } from 'react-query';

import { UseGetUsersByTitleProps, UseUserProps } from '../types';

import { IUser } from '~/src/types';
import { apiInstance } from '~/src/utils';

export const useGetUsersByTitle = ({ title }: UseGetUsersByTitleProps) => {
  return useQuery(
    [title],
    async () => {
      const result = await apiInstance({ url: `/titled/${title}` });

      return result.data.players;
    },
    { refetchOnWindowFocus: false, refetchOnMount: false, retry: false }
  );
};

export const useGetUsersInfo = ({ usernames }: { usernames: string[] }) => {
  return useQueries(
    usernames?.map((username: string) => {
      return {
        queryKey: ['user', username],
        queryFn: async () => {
          const result = await apiInstance({ url: `/player/${username}` });

          return result.data;
        },
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        retry: false,
        staleTime: Infinity,
      };
    }) ?? []
  );
};

export const useUser = ({
  username,
  enabled,
}: {
  username: string;
  enabled: boolean;
}): UseQueryResult<IUser> => {
  return useQuery(
    ['user', username],
    async () => {
      const result = await apiInstance({ url: `/player/${username}` });

      return result.data;
    },
    { refetchOnWindowFocus: false, refetchOnMount: false, retry: false, enabled }
  );
};

export const useUserStats = ({ username }: UseUserProps): UseQueryResult<IUser> => {
  return useQuery(
    [`${username}-stats`],
    async () => {
      const result = await apiInstance({ url: `/player/${username}/stats` });

      return result.data;
    },
    { refetchOnWindowFocus: false, refetchOnMount: false, retry: false }
  );
};
