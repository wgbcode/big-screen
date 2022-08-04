import * as echarts from "echarts";
import React, { useRef, useEffect } from "react";
import { px } from "../shared/px";

export const Chart2 = () => {
  const divRef = useRef(null);
  const data = [
    { name: "城关区公安局", 2011: 1.5, 2012: 3 },
    { name: "七里河区公安局", 2011: 2, 2012: 3 },
    { name: "西固区公安局", 2011: 1.8, 2012: 2.8 },
    { name: "安宁区公安局", 2011: 2, 2012: 2 },
    { name: "红古区公安局", 2011: 2.4, 2012: 3 },
    { name: "永登县公安局", 2011: 1, 2012: 2 },
    { name: "皋兰县公安局", 2011: 1.4, 2012: 3 },
    { name: "榆中县公安局", 2011: 2, 2012: 1.5 },
    { name: "新区公安局", 2011: 1.8, 2012: 2.6 },
  ];
  useEffect(() => {
    let myChart = echarts.init(divRef.current);
    myChart.setOption({
      xAxis: {
        // 数值轴（数据连续）
        type: "value",
        // 坐标轴两边流白策略
        boundaryGap: [0, 0.01],
        splitLine: { show: false },
        // 坐标轴标签不展示时坐标轴也会隐去
        axisLabel: { show: false },
      },
      yAxis: {
        // 类目轴（数据离散）
        type: "category",
        axisTick: { show: false },
        data: data.map((i) => i.name),
        axisLabel: {
          fontSize: px(12),
          color: "#284a83",
          formatter(val) {
            return val.replace("公安局", "\n公安局");
          },
        },
      },
      grid: [
        {
          left: px(20),
          right: px(20),
          top: px(40),
          bottom: px(20),
          containLabel: true,
        },
      ],
      series: [
        {
          name: "2011年",
          type: "bar",
          data: data.map((i) => i[2011]),
          // 图形样式
          itemStyle: {
            // 渐变色
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                {
                  offset: 0,
                  color: "#2034F9", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#04A1FF", // 100% 处的颜色
                },
              ],
            },
          },
        },
        {
          name: "2012年",
          type: "bar",
          data: data.map((i) => i[2012]),
          itemStyle: {
            // 渐变色
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              {
                offset: 0,
                color: "#B92AE8",
              },
              {
                offset: 1,
                color: "#6773E7",
              },
            ]),
          },
        },
      ],
    });
  }, []);
  return (
    <div className="bordered 破获排名">
      <h2>案件破获排名</h2>
      <div ref={divRef} className="chart" />
      <div className="legend">
        <span className="first" /> 破案排名
        <span className="second" /> 破案排名
      </div>
    </div>
  );
};
