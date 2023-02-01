import React from 'react';

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  registerables,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import colors from 'tailwindcss/colors';

import { STATS_BREADCRUMBS } from '../constants';

import Card from '~/src/components/Card';
import { isDark } from '~/src/utils';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, ...registerables);

const Stats: React.FC = ({ stats }) => {
  const color = isDark ? colors.gray[400] : colors.gray[500];

  return (
    <Card breadcrumbs={STATS_BREADCRUMBS}>
      <Radar
        data={stats}
        options={{
          elements: { line: { borderWidth: 3 } },
          scales: {
            r: {
              angleLines: { color },
              grid: { color },
              pointLabels: { color, font: { size: 12 } },
            },
          },
        }}
      />
    </Card>
  );
};

export default Stats;
