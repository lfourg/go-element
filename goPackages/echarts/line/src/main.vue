<template>
  <div :style="{ ...size }" ref="charts" class="charts"></div>
</template>
<script>
export default {
  name: "GoEchartsLine",
  props: ["option"],
  data() {
    return {
      myChart: null,
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
        width: "500px",
        height: "400px"
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
     * 数据源数据、事件交互，由Go平台调用
     */
    setData(data) {
      this.setSeries(data);
    },
    /**
     * 组件刷新
     */
    refresh() {
      this.myChart &&
        this.myChart.setOption(this.option, {
          notMerge: true,
          lazyUpdate: true
        });
    },
    resize() {
      this.myChart && this.myChart.resize();
    },
    setTheme() {},
    /**
     * 组件销毁，包括退出动画线
     */
    destroy() {
      this.myChart.dispose();
      //退出动画
      //****
    },

    loadChart() {
      this.myChart && this.myChart.dispose();
      this.myChart = this.$echarts.init(this.$refs.charts);
      this.myChart.setOption(this.option);
      this.bindEvent();
    },
    handleUpdate() {
      console.log("触发更新");
      this.initChart();
    },
    bindEvent() {
      this.myChart.on("click", params => {
        let defineMap = this.actionsData.click.defineMap;
        defineMap.forEach(item => {
          if (item.field && item.mapField) {
            item.value = params[this.mapFields[item.field] || item.field];
            this.goUpShareVar && this.goUpShareVar(item);
          }
        });
      });
    },
    setSeries() {
      let [_xAxis, _series] = [[], []];
      let _data = this.sourceData.static.data.value;
      let _barAttr = this.optionData.barAttr;
      let temp = {};
      _data.forEach(data => {
        if (temp[data.s]) {
          temp[data.s].data.push(data.y);
          if (_xAxis.indexOf(data.x) == -1) _xAxis.push(data.x);
        } else {
          temp[data.s] = {
            type: "bar",
            name: data.s,
            barWidth: _barAttr.barWidth.value,
            barGap: _barAttr.barCategoryGap.value + "%",
            itemStyle: { barBorderRadius: _barAttr.barBorderRadius.value },
            data: [data.y],
            animation: true
          };
          if (_xAxis.indexOf(data.x) == -1) _xAxis.push(data.x);
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
<style lang="scss" scoped>
.charts {
  position: absolute;
}
</style>