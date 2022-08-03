import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { px } from "../shared/px";
import china from "../geo/china.json";

export const Chart6 = () => {
  const divRef = useRef(null);
  const colors = { 青海省: "#BB31F7", 甘肃省: "#15B8FD", 四川省: "#06E1EE" };
  useEffect(() => {
    let myChart = echarts.init(divRef.current);
    // @ts-ignore
    echarts.registerMap("CN", china);
    myChart.setOption({
      textStyle: {
        fontSize: px(12),
      },
      xAxis: { show: false },
      yAxis: { show: false },
      series: [
        {
          type: "map",
          mapType: "CN", // 自定义扩展图表类型
          label: { show: false, color: "white" },
          itemStyle: {
            areaColor: "#010D3D",
            borderColor: "#01A7F7",
            emphasis: {
              label: { color: "white" },
              areaColor: "#5470C6",
            },
          },
          data: [
            { name: "甘肃省", value: 1 },
            { name: "四川省", value: 50 },
            { name: "青海省", value: 100 },
          ],
        },
      ],
      visualMap: {
        min: 1,
        max: 100,
        inRange: {
          color: [colors["甘肃省"], colors["四川省"], colors["青海省"]],
        },
        show: false,
      },
    });
  }, []);

  return (
    <div className="bordered 籍贯">
      <h2>全市犯罪人员籍贯分布地</h2>
      <div className="wrapper">
        <div ref={divRef} className="chart" />
        <div className="legend bordered">
          <span className="icon" style={{ background: colors["甘肃省"] }} />
          <span className="text">甘肃省</span>
          <span className="icon" style={{ background: colors["四川省"] }} />
          <span className="text">四川省</span>
          <span className="icon" style={{ background: colors["青海省"] }} />
          <span className="text">青海省</span>
        </div>
        <div className="notes">此地图仅显示了中国的部分区域</div>
      </div>
    </div>
  );
};
