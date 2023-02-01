import React from 'react';

import { useLocation } from 'react-router-dom';

import Stats from '../components/Stats';
import { useUserStats } from '../hooks';

const prepareData = ({ stats }) => {
  if (!stats) return {};

  return {
    labels: ['Rapid', 'Bullet', 'Blitz'],
    datasets: [
      {
        label: 'Best',
        data: [
          stats['chess_rapid'].best.rating,
          stats['chess_bullet'].best.rating,
          stats['chess_blitz'].best.rating,
        ],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'Last',
        data: [
          stats['chess_rapid'].last.rating,
          stats['chess_bullet'].last.rating,
          stats['chess_blitz'].last.rating,
        ],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)',
      },
    ],
  };
};

const StatsContainer: React.FC = () => {
  const { state } = useLocation();

  const { data: stats, isLoading } = useUserStats({ username: state.username });

  return !isLoading && <Stats stats={prepareData({ stats })} />;
};

export default StatsContainer;
