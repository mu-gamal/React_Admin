import React from 'react';
import {getColor} from '@coreui/utils/src';
import {CChartBar} from '@coreui/react-chartjs';

const ChartBarSimple = (props) => {
  const {backgroundColor, pointHoverBackgroundColor, dataPoints, label, pointed, ...attributes} = props;

  const defaultDatasets = (() => {
    return [
      {
        data: dataPoints,
        backgroundColor: getColor(backgroundColor),
        pointHoverBackgroundColor: getColor(pointHoverBackgroundColor),
        label,
        barPercentage: 0.5,
        categoryPercentage: 1
      }
    ];
  })();

  const defaultOptions = (() => {
    return {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        xAxes: [
          {
            display: false
          }
        ],
        yAxes: [
          {
            display: false
          }
        ]
      }
    };
  })();

  // render
  return <CChartBar {...attributes} type="bar" datasets={defaultDatasets} options={defaultOptions} labels={label} />;
};

ChartBarSimple.defaultProps = {
  backgroundColor: 'rgba(0,0,0,.2)',
  dataPoints: [10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12],
  label: 'Sales'
};

export default ChartBarSimple;
