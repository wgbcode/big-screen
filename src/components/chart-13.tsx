import React, { useEffect, useRef } from "react";
import { px } from "../shared/px";
import * as echarts from "echarts";

export const Chart13 = () => {
  const divRef = useRef(null);
  const data = [
    { value: 0.08, name: "东岗路" },
    { value: 0.06, name: "段家滩" },
    { value: 0.09, name: "五泉山" },
    { value: 0.12, name: "中山路" },
    { value: 0.06, name: "庆阳路" },
    { value: 0.08, name: "武都路" },
    { value: 0.1, name: "酒泉路" },
    { value: 0.08, name: "天水路" },
  ];
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption({
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
        data: data.map((i) => i.name),
        axisTick: { show: false },
        axisLine: {
          lineStyle: { color: "#083B70" },
        },
        axisLabel: {
          fontSize: px(15),
          color: "#4970a7",
          interval: 0,
          width: px(15),
          overflow: "breakAll",
        },
      },

      yAxis: {
        splitLine: { show: false },
        axisLine: {
          show: true,
          lineStyle: { color: "#083B70" },
        },
        axisLabel: {
          fontSize: px(15),
          color: "#636c87",
          formatter(value) {
            return (value * 100).toFixed(0) + "%";
          },
        },
      },
      series: [
        {
          type: "bar",
          data: data.map((i) => i.value),
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#0A97FB",
            },
            {
              offset: 1,
              color: "#1E34FA",
            },
          ]),
        },
      ],
    });
  }, []);

  return <div ref={divRef} className="chart"></div>;
};
