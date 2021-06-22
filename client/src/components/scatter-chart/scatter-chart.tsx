/* eslint-disable func-names */
/* eslint-disable object-shorthand */
import React from 'react';
import ScatterChart from 'react-chartjs-2';
import { IApp } from 'constants/models';

const createOptions = (apps: IApp[]) => {
  return {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem: any) {
            return `${apps[tooltipItem.dataIndex].name} - ${
              tooltipItem.formattedValue
            } x ${tooltipItem.label}`;
          },
        },
      },
    },
    layout: {
      padding: 20,
    },
  };
};

const createData = (apps: IApp[]) => {
  return {
    datasets: [
      {
        data: apps.map((app) => ({ x: app.downloads, y: app.revenue })),
        backgroundColor: '#90C95C',
        pointRadius: 15,
        pointStyle: apps.map((app) => {
          const img = new Image();
          img.src = app.image;
          img.width = 25;
          img.height = 25;
          return img;
        }),
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
        options={createOptions(apps)}
        data={createData(apps)}
        type="scatter"
        height={350}
      />
    </div>
  );
};

export default Chart;
