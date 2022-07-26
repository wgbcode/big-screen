import * as echarts from "echarts";
import React, { useRef, useEffect } from "react";
import { px } from "../shared/px";

export const Chart3 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    let myChart = echarts.init(divRef.current);
    myChart.setOption({
      textStyle: {
        fontSize: px(14),
        color: "#79839E",
      },
      legend: {
        bottom: px(10),
        textStyle: { color: "#84accd" },
        itemWidth: px(30),
        itemHeight: px(16),
      },
      grid: [
        {
          left: px(20),
          right: px(20),
          top: px(40),
          bottom: px(80),
          containLabel: true,
        },
      ],
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
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
            0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09,
          ].reverse(),
        },
        {
          name: "醉驾",
          type: "line",
          data: [0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1].reverse(),
        },
        {
          name: "盗窃",
          type: "line",
          data: [0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.11].reverse(),
        },
        {
          name: "故意杀人",
          type: "line",
          data: [0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.11, 0.12].reverse(),
        },
        {
          name: "故意伤人",
          type: "line",
          data: [0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.11, 0.12, 0.13].reverse(),
        },
      ].map((obj) => ({
        ...obj,
        // 图形节点标记
        symbol: "circle",
        symbolSize: px(12),
        lineStyle: { width: px(2) },
      })),
    });
  }, []);
  return (
    <div className="bordered 发案趋势">
      <h2>发案趋势分析</h2>
      <div ref={divRef} className="chart" />
    </div>
  );
};
