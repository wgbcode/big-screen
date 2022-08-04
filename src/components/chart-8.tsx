import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { px } from "../shared/px";

export const Chart8 = () => {
  const divRef = useRef(null);
  const colors = ["#856BED", "#F46064", "#F38E1C", "#1CDB7C", "#33A4FA"];
  useEffect(() => {
    let myChart = echarts.init(divRef.current);
    myChart.setOption({
      color: colors,
      xAxis: { show: false },
      yAxis: { show: false },
      legend: { show: false },
      series: [
        {
          type: "pie",
          radius: ["75%", "60%"],
          avoidLabelOverlap: false,
          label: {
            show: true,
            position: "outside",
            textStyle: { color: "#7b9bb9", fontSize: px(20) },
            formatter(options) {
              return options.value * 100 + "%";
            },
          },
          labelLine: { show: false },
          itemStyle: {
            borderColor: "#0F113A",
            borderWidth: px(4),
          },
          data: [
            { value: 0.3, name: "10-20" },
            { value: 0.1, name: "20-30" },
            { value: 0.1, name: "30-40" },
            { value: 0.2, name: "40-50" },
            { value: 0.3, name: "50-60" },
          ],
        },
      ],
    });
  }, []);

  return (
    <div className="年龄段-图2">
      <div className="chart">
        <div className="main" ref={divRef} />
        <div className="text">年龄段</div>
      </div>
      <div className="legend">
        <div className="wrapper">
          <span style={{ background: colors[0] }} />
          <span className="text">10-20</span>
        </div>
        <div className="wrapper">
          <span style={{ background: colors[1] }} />
          <span className="text">20-30</span>
        </div>
        <div className="wrapper">
          <span style={{ background: colors[2] }} />
          <span className="text">30-40</span>
        </div>
        <div className="wrapper">
          <span style={{ background: colors[3] }} />
          <span className="text">40-50</span>
        </div>
        <div className="wrapper">
          <span style={{ background: colors[4] }} />
          <span className="text">50-60</span>
        </div>
      </div>
    </div>
  );
};
