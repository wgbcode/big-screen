import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { px } from "../shared/px";

export const Chart9 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    let myChart = echarts.init(divRef.current);
    myChart.setOption({
      grid: [
        {
          left: px(20),
          right: px(20),
          top: px(40),
          bottom: px(20),
          containLabel: true,
        },
      ],
      color: "#F7A110",
      xAxis: {
        type: "category",
        boundaryGap: true,
        data: [0, 18, 28, 38, 48, 58, 68, 78],
        splitLine: { show: true, lineStyle: { color: "#073E78" } },
        axisTick: { show: false },
        axisLine: { show: false },
        axisLabel: { fontSize: px(15), color: "#7b9bb9" },
      },
      yAxis: {
        type: "value",
        boundaryGap: ["20%", "10%"],
        splitLine: { lineStyle: { color: "#073E78" } },
        axisLabel: {
          fontSize: px(15),
          color: "#7b9bb9",
          formatter(val) {
            return val * 100 + "%";
          },
        },
      },
      series: [
        {
          type: "line",
          data: [0.19, 0.2, 0.26, 0.35, 0.26, 0.2, 0.08, 0.06],
          symbol: "circle",
          symbolSize: px(12),
          lineStyle: { width: px(2) },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#F7A110",
              },
              {
                offset: 1,
                color: "#1B1D52",
              },
            ]),
          },
        },
      ],
    });
  }, []);

  return (
    <div className="年龄段-图3">
      <h3>犯罪年龄趋势图</h3>
      <div ref={divRef} className="chart"></div>
    </div>
  );
};
