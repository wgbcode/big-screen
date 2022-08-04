import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { px } from "../shared/px";

export const Chart7 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    let myChart = echarts.init(divRef.current);
    myChart.setOption({
      color: ["#8D70F8", "#33A4FA"],
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
            textStyle: { color: "#7b9bb9", fontSize: px(15) },
            formatter(options) {
              return options.value * 100 + "%";
            },
          },
          labelLine: { show: false, length: px(25), length2: px(0) },
          itemStyle: {
            borderColor: "#0F113A",
            borderWidth: px(4),
          },
          data: [
            { value: 0.7, name: "女" },
            { value: 0.3, name: "男" },
          ],
        },
      ],
    });
  }, []);

  return (
    <div className="年龄段-图1">
      <div className="chart">
        <div className="main" ref={divRef} />
        <div className="text">性别</div>
      </div>
      <div className="legend">
        <div className="wrapper">
          <span className="male" />
          <span className="text">男</span>
        </div>
        <div className="wrapper">
          <span className="female" />
          <span className="text">女</span>
        </div>
      </div>
    </div>
  );
};
