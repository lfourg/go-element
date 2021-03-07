import ChartType from "../../../utils/panel/chartType";

export default {
  getData() {
    return {
      option: {
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
      },
      source: {
        type: "static",
        static: {
          data: [
            {
              x: "2019/08/30",
              y: "400",
              s: "1",
            },
            {
              x: "2019/08/30",
              y: "180",
              s: "2",
            },
            {
              x: "2019/08/30",
              y: "180",
              s: "3",
            },
            {
              x: "2019/08/31",
              y: "200",
              s: "1",
            },
            {
              x: "2019/08/31",
              y: "100",
              s: "2",
            },
            {
              x: "2019/08/31",
              y: "100",
              s: "3",
            },
            {
              x: "2019/09/01",
              y: "25",
              s: "1",
            },
            {
              x: "2019/09/01",
              y: "125",
              s: "2",
            },
            {
              x: "2019/09/01",
              y: "125",
              s: "3",
            },
            {
              x: "2019/09/02",
              y: "190",
              s: "1",
            },
            {
              x: "2019/09/02",
              y: "110",
              s: "2",
            },
            {
              x: "2019/09/02",
              y: "110",
              s: "3",
            },
            {
              x: "2019/09/03",
              y: "90",
              s: "1",
            },
            {
              x: "2019/09/03",
              y: "60",
              s: "2",
            },
            {
              x: "2019/09/03",
              y: "60",
              s: "2",
            },
            {
              x: "2019/09/03",
              y: "240",
              s: "1",
            },
            {
              x: "2019/09/03",
              y: "170",
              s: "2",
            },
            {
              x: "2019/09/03",
              y: "170",
              s: "3",
            },
          ],
        },
        api: {
          requestType: "get",
          url: "",
          headers: "",
          postData: "",
        },
      },
      actions: {
        click: [
          {
            key: "x",
            field: "x",
            mapField: "",
            disName: "类目",
            value: "",
          },
          {
            key: "y",
            field: "y",
            mapField: "",
            disName: "值",
            value: "",
          },
          {
            key: "s",
            field: "s",
            mapField: "",
            disName: "系列",
            value: "",
          },
        ],
      },
    };
  },
  getDataDes() {
    return {
      optionDes: {
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
      },
      actionsDes: {
        click: "单击事件",
      },
    };
  },
};
