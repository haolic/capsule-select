import React, { useEffect, useRef } from 'react';
import { Line } from '@antv/g2plot';
import { fetchVirusData } from '../../service/coronavirus';

const Coronavirus = () => {
  const chartDom = useRef(null);
  const fetch = async () => {
    const data = await fetchVirusData();
    const lineChart = new Line(chartDom.current, {
      data,
      padding: 'auto',
      xField: 'date',
      yField: 'value',
      forceFit: true,
      seriesField: 'type',
      xAxis: {
        type: 'category',
        formatter: t => {
          return t.substr(5);
        },
      },
      label: {
        visible: true,
        type: 'point',
      },
      point: {
        visible: true,
        size: 4,
        shape: 'circle',
        style: {
          fill: 'white',
          lineWidth: 2,
        },
      },
    });
    lineChart.render();
  };
  useEffect(() => {
    fetch();
  }, []);
  return (
    <div
      ref={r => (chartDom.current = r)}
      style={{
        height: '100%',
        width: '100%',
      }}
    ></div>
  );
};

export default Coronavirus;
