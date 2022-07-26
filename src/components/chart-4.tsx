import * as echarts from "echarts";
import React, { useRef, useEffect } from "react";
import { px } from "../shared/px";

export const Chart4 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    let myChart = echarts.init(divRef.current);
    myChart.setOption({
      textStyle: {
        fontSize: px(14),
        color: "#79839E",
      },
      grid: [
        {
          left: px(20),
          right: px(20),
          top: px(40),
          bottom: px(40),
          containLabel: true,
        },
      ],
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
        axisLabel: { fontSize: px(12) },
        splitLine: { show: true, lineStyle: { color: "#073E78" } },
        axisTick: { show: false },
        axisLine: { show: false },
      },
      yAxis: {
        type: "value",
        splitLine: { show: true, lineStyle: { color: "#073E78" } },
        axisLabel: {
          fontSize: px(12),
          formatter(val) {
            return val * 100 + "%";
          },
        },
      },
      series: [
        {
          name: "抢劫",
          type: "line",
          data: [
            0.15, 0.13, 0.11, 0.13, 0.14, 0.15, 0.16, 0.18, 0.21, 0.19, 0.17,
            0.16, 0.15,
          ],
          symbol: "circle",
          symbolSize: px(12),
          lineStyle: { width: px(2) },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#414a9f",
              },
              {
                offset: 1,
                color: "#1b1d52",
              },
            ]),
          },
        },
      ],
    });
  }, []);
  return (
    <div className="bordered 案发时段">
      <h2>案发时段分析</h2>
      <div ref={divRef} className="chart" />
    </div>
  );
};
