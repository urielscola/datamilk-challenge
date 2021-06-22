import React from 'react';
import ScatterChart from 'react-chartjs-2';
import { IApp } from 'constants/models';

const options = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  layout: {
    padding: 20,
  },
};

const createData = (apps: IApp[]) => {
  return {
    datasets: [
      {
        data: apps.map((app) => ({ x: app.downloads, y: app.revenue })),
        backgroundColor: '#90C95C',
        pointRadius: 15,
      },
    ],
  };
};

interface Props {
  apps: IApp[];
}

const Chart: React.FC<Props> = ({ apps }) => {
  return (
    <div id="chart">
      <ScatterChart
        options={options as any}
        data={createData(apps)}
        type="scatter"
        height={350}
      />
    </div>
  );
};

export default Chart;
