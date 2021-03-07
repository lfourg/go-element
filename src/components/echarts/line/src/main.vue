<template>
  <div :style="{ ...size }" ref="charts"></div>
</template>
<script>
export default {
  name: "GoEchartsLine",
  props: {
    option: {
      type: Object
    },
    actions: { type: Object },
    data: {
      type: [Object, Array]
    },
    width: {
      type: [String, Number],
      default: 500
    },
    height: {
      type: [String, Number],
      default: 400
    }
  },
  data() {
    return {
      chart: null,
      mapFields: {
        x: "name",
        y: "data",
        s: "seriesName"
      }
    };
  },
  computed: {
    size: function() {
      return {
        width: `${this.width}px`,
        height: `${this.height}px`
      };
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    /**
     * 组件初始化，包括动画线
     */
    init() {
      this.loadChart();
      //初始动画
    },
    /**
     * 组件刷新
     */
    refresh() {
      this.chart &&
        this.chart.setOption(this.option, {
          notMerge: true,
          lazyUpdate: true
        });
    },
    resize() {
      this.chart && this.chart.resize();
    },
    setTheme() {},
    /**
     * 组件销毁，包括退出动画线
     */
    destroy() {
      this.chart && this.chart.dispose();
      //退出动画
      //****
    },
    loadChart() {
      this.chart && this.chart.dispose();
      this.setSeries();
      this.chart = this.$echarts.init(this.$refs.charts);
      this.chart.setOption(this.option);
      this.bindEvent();
    },
    handleUpdate() {
      console.log("触发更新");
      this.initChart();
    },
    bindEvent() {
      this.chart.on("click", params => {
        console.log("params:", params);
        let defineMap = this.actions.click;
        defineMap.forEach(item => {
          if (item.field && item.mapField) {
            item.value = params[this.mapFields[item.field] || item.field];
          }
        });
        this.$emit("click", params);
      });
    },
    setSeries() {
      let [_xAxis, _series] = [[], []];
      let temp = {};
      this.data.forEach(item => {
        if (temp[item.s]) {
          temp[item.s].data.push(item.y);
          if (_xAxis.indexOf(item.x) == -1) _xAxis.push(item.x);
        } else {
          temp[item.s] = {
            type: "line",
            name: item.s,
            data: [item.y],
            animation: true
          };
          if (_xAxis.indexOf(item.x) == -1) _xAxis.push(item.x);
        }
      });
      for (let key in temp) {
        _series.push(temp[key]);
      }
      this.option.xAxis.data = _xAxis;
      this.option.series = _series;
    }
  },
  watch: {
    option: {
      handler() {
        this.refresh();
      },
      deep: true
    }
  }
};
</script>