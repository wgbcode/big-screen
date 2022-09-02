# 大屏可视化项目

该项目通过引入 ECharts 图表的方式实现了大屏数据可视化的需求，对不同规格的屏幕的适配问题给出了解决方案。

## 源码使用命令行

`yarn clone SSHUrl`

`yarn install`

`yarn dev`

##项目开发主要过程##

- 根据屏幕适配公式解决屏幕适配问题，将设计稿按比例还原到屏幕上。
- 获取当前屏幕的宽度 width，设置根元素的 font-size，使 1rem = width/100。
- 引入 ECharts 图表，配置组件参数和调整盒子样式，使之渲染到页面上。

## 注意事项

- 在浏览器中打开时，为了更好的体验，建议在浏览器设置的外观选项中配置最小字号，如 edge 可以将最小字号配置为 6px。
- 项目在过小的屏幕中打开时，屏幕可显示的最小字体会大于项目中的字体，导致样式问题，此时适当调大屏幕即可。
