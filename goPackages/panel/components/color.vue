<template>
  <div class="go-color">
    <div class="go-color-value">
      <span :style="{ background: value }" @click="handleShowChrome"></span>
      <a-input type="text" size="small" v-model="value" border="0" />
    </div>
    <div
      class="go-color-control"
      :style="{ top: top + 'px' }"
      v-if="isShow"
      @click="event => event.stopPropagation()"
    >
      <chrome-picker v-model="colors" />
    </div>
  </div>
</template>

<script>
import { Chrome } from "vue-color";
export default {
  name: "GoColors",
  props: {
    value: {
      type: String
    }
  },
  data() {
    return {
      top: 22,
      colors: {},
      isShow: false
    };
  },
  components: { "chrome-picker": Chrome },
  mounted() {
    this.colors.hex = this.value;
    document.addEventListener("click", () => {
      this.isShow = false;
    });
  },
  methods: {
    handleShowChrome(e) {
      this.isShow = true;
      if (window.innerHeight < e.y + 300) {
        this.top = -262;
      } else {
        this.top = 22;
      }
      event.stopPropagation();
    }
  },
  watch: {
    colors: {
      handler(newV) {
        let _rgba = newV.rgba;
        this.$emit(
          "input",
          `rgba(${_rgba.r},${_rgba.g},${_rgba.b},${_rgba.a})`
        );
      },
      deep: true
    }
  },
  destroyed() {
    document.removeEventListener("click");
  }
};
</script>

<style lang="scss" scoped>
/deep/ .ant-input {
  border: 0;
  background: transparent;
}
/deep/ .ant-input:focus {
  box-shadow: none;
}
.go-color {
  margin-top: 10px;
  position: relative;
  .go-color-value {
    border: 1px solid #5a606b;
    border-radius: 4px;
    padding-left: 3px;
    height: 22px;
    width: 100%;
    display: flex;
    justify-content: left;
    align-items: center;
    cursor: pointer;
    > span:nth-child(1) {
      width: 40px;
      height: 12px;
      margin-right: 10px;
    }
    > span {
      border-radius: 4px;
    }
  }
  .go-color-control {
    position: absolute;
    z-index: 1111;
  }
}
</style>