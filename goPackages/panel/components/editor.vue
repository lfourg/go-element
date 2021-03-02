<template>
  <vue-json-editor
    :expandedOnStart="true"
    :value="value"
    :mode="'code'"
    :show-btns="false"
    :style="`height: ${height}px`"
    lang="zh"
    @json-change="onJsonChange"
    @has-error="onError"
    class="go-json-wrap"
  ></vue-json-editor>
</template>

<script>
import vueJsonEditor from "vue-json-editor";
export default {
  name: "GoEditor",
  props: {
    value: {
      type: Object
    },
    height: {
      type: Number,
      default: 180
    }
  },
  components: {
    vueJsonEditor
  },
  methods: {
    onJsonChange(value) {
      this.$emit("input", value);
    },
    onError(value) {
      console.log("error:", value);
    }
  }
};
</script>

<style scoped lang="scss">
/deep/ .jsoneditor-vue {
  height: 100%;
}
/deep/ div.jsoneditor {
  border: 1px solid #5a606b;
}
/deep/ div.jsoneditor-outer {
  margin: 0;
  padding: 0;
}
/deep/ .jsoneditor-menu {
  display: none;
}
.go-json-wrap {
  text-align: left;
}
</style>