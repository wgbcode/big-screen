import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { px } from "../shared/px";

export const Chart11 = () => {
  const divRef = useRef(null);
  const colors = ["#F46064", "#F38E1C", "#1CDB7C", "#8D70F8", "#33A4FA"];
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption({
      color: colors,
      xAxis: { show: false },
      yAxis: { show: false },
      legend: { show: false },
      series: [
        {
          // 初始角度
          startAngle: -20,
          type: "pie",
          radius: ["25%", "90%"],
          label: {
            show: true,
            position: "outside",
            textStyle: { fontSize: px(15), color: "#7b9bb9" },
            // 文字和 label line 之间的距离
            distanceToLabelLine: px(5),
            formatter(options) {
              return options.value * 100 + "%";
            },
          },
          labelLine: { show: true, length: 0 },
          // 展示南丁格尔图，半径与数据大小成正比
          roseType: "area",
          itemStyle: {
            // 图形阴影和颜色
            shadowBlur: 5,
            shadowColor: "rgba(0, 0, 0, 1)",
          },
          data: [
            { value: 0.36, name: "刑事案件" },
            { value: 0.2, name: "民事案件" },
            { value: 0.18, name: "经济案件" },
            { value: 0.24, name: "其他案件" },
          ],
        },
      ],
    });
  }, []);

  return (
    <div className="chart11">
      <div className="chart">
        <div className="main" ref={divRef} />
      </div>
      <div className="legend">
        <div className="wrapper">
          <span style={{ background: colors[0] }} />
          <span className="text">刑事</span>
        </div>
        <div className="wrapper">
          <span style={{ background: colors[1] }} />
          <span className="text">民事</span>
        </div>
        <div className="wrapper">
          <span style={{ background: colors[2] }} />
          <span className="text">经济</span>
        </div>
        <div className="wrapper">
          <span style={{ background: colors[3] }} />
          <span className="text"> 其他</span>
        </div>
      </div>
    </div>
  );
};
