import * as echarts from "echarts";
import React, { useRef, useEffect } from "react";
import { px } from "../shared/px";

export const Chart1 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    let myChart = echarts.init(divRef.current);
    myChart.setOption({
      xAxis: {
        data: [
          "兰州新区",
          "兰州新区",
          "兰州新区",
          "兰州新区",
          "兰州新区",
          "兰州新区",
          "兰州新区",
          "兰州新区",
          "兰州新区",
        ],
        //刻度
        axisTick: { show: false },
        // 轴线
        axisLine: {
          lineStyle: { color: "#083B70" },
        },
        // 刻度标签
        axisLabel: {
          fontSize: px(12),
          color: "#79839E",
          //内容格式器
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
        // grid 区域分隔线
        splitLine: { show: false },
        axisLine: {
          show: true,
          lineStyle: { color: "#083B70" },
        },
        axisLabel: {
          fontSize: px(12),
          color: "#79839E",
        },
      },
      // gird 组件
      grid: [
        {
          left: px(20),
          right: px(20),
          top: px(40),
          bottom: px(20),
          containLabel: true,
        },
      ],
      // 系列类型
      series: [
        {
          type: "bar",
          data: [10, 20, 36, 41, 15, 26, 37, 18, 29],
        },
      ],
    });
  }, []);
  return (
    <div className="bordered 管辖统计">
      <h2>案发派出所管辖统计</h2>
      <div ref={divRef} className="chart"></div>
    </div>
  );
};
