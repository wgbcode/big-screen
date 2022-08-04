import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { px } from "../shared/px";

export const Chart12 = () => {
  const divRef = useRef(null);
  const data = [
    { value: 0.08, name: "东岗路" },
    { value: 0.06, name: "段家滩" },
    { value: 0.11, name: "雁北" },
    { value: 0.09, name: "五泉山" },
    { value: 0.12, name: "中山路" },
    { value: 0.06, name: "庆阳路" },
    { value: 0.08, name: "武都路" },
    { value: 0.08, name: "酒泉路" },
    { value: 0.08, name: "天水路" },
  ];
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption({
      xAxis: { show: false },
      yAxis: { show: false },
      legend: {
        // 图例列表的布局朝向，垂直。
        orient: "vertical",
        left: "left",
        top: "middle",
        textStyle: { color: "#4b74b0", fontSize: px(15) },
        // 图例每项之间的间距
        itemGap: px(5),
        // 图例标记的宽高
        itemWidth: px(10),
        itemHeight: px(10),
        formatter(name) {
          const value = data.find((i) => i.name === name)?.value * 100 + "%";
          return name + " " + value;
        },
      },
      series: [
        {
          center: ["60%", "50%"],
          type: "pie",
          radius: "80%",
          label: { show: false },
          labelLine: { show: false },
          data: data,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    });
  }, []);

  return (
    <div className="chart12">
      <div className="chart">
        <div className="main" ref={divRef} />
      </div>
    </div>
  );
};
