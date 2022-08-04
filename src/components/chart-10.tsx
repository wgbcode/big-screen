import React, { useEffect, useRef } from "react";
import { px } from "../shared/px";
import * as echarts from "echarts";

export const Chart10 = () => {
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
      xAxis: {
        data: ["入室抢劫", "当街偷盗", "团伙诈骗", "刑事案件", "民事案件"],
        axisTick: { show: false },
        axisLine: {
          lineStyle: { color: "#083B70" },
        },
        axisLabel: {
          fontSize: px(15),
          color: "#576787",
          formatter(val) {
            if (val.length > 2) {
              const array = val.split("");
              array.splice(2, 0, "\n");
              return array.join("");
            } else {
              return val;
            }
          },
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
          color: "#576787",
        },
      },
      series: [
        {
          type: "bar",
          data: [40, 22, 20, 18, 32],
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
