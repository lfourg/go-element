import ChartType from "../../../src/utils/panel/chartType";

export default {
  getOption() {
    return {
      tooltip: {
        show: true,
        color: "#fff",
        textStyle: { color: "#fff", fontSize: 14 },
      },
      legend: {
        show: true,
        textStyle: { color: "#fff", fontSize: 14 },
        left: "center",
        top: "10px",
      },
      grid: { left: 30, right: 30, top: 20, bottom: 20 },
      xAxis: {
        axisTick: { show: false },
        data: [
          "2019/08/30",
          "2019/08/31",
          "2019/09/01",
          "2019/09/02",
          "2019/09/03",
        ],
        show: true,
        axisLabel: { rotate: 0, textStyle: { color: "#000", fontSize: 14 } },
        axisLine: { lineStyle: { color: "#000" } },
        splitLine: { show: false, lineStyle: { color: "#000" } },
      },
      yAxis: {
        axisTick: { show: false },
        show: true,
        axisLabel: { rotate: 0, textStyle: { color: "#000", fontSize: 14 } },
        axisLine: { lineStyle: { color: "#000" } },
        splitLine: { show: false, lineStyle: { color: "#000" } },
      },
      line: { symbolSize: 4 },
      series: [
        {
          type: "line",
          name: "1",
          barWidth: 20,
          barGap: "10%",
          itemStyle: { barBorderRadius: 5 },
          data: ["400", "200", "25", "190", "90", "240"],
          animation: true,
        },
        {
          type: "line",
          name: "2",
          barWidth: 20,
          barGap: "10%",
          itemStyle: { barBorderRadius: 5 },
          data: ["180", "100", "125", "110", "60", "60", "170"],
          animation: true,
        },
      ],
    };
  },
  getOptionDis() {
    return {
      tooltip: ChartType.Tooltip,
      legend: ChartType.Legend,
      grid: ChartType.Grid,
      xAxis: ChartType.XAxis,
      yAxis: ChartType.YAxis,
      line: {
        groupName: "折线属性",
        symbolSize: {
          name: "标记大小",
          type: "slider",
          min: 0,
          max: 50,
        },
      },
    };
  },
};
