<template>
  <div class="go-source">
    <a-form-model :model="source">
      <a-form-item label="数据源类型">
        <a-select
          default-value="static"
          v-model="source.type"
          @change="handleTypeChange"
        >
          <a-select-option
            v-for="item in sourceDes.type.options"
            :key="item.value"
            :value="item.value"
            >{{ item.text }}</a-select-option
          >
        </a-select>
      </a-form-item>
    </a-form-model>
    <go-form
      :dataDes="sourceDes[source.type]"
      :data="source[source.type]"
      :labelCol="24"
      :wrapperCol="24"
    >
      <template v-slot:url="slotProps">
        <a-mentions
          v-model="slotProps.data[slotProps.attr]"
          rows="3"
          @select="handleAddVar"
        >
          <a-mentions-option
            split
            v-for="key in Object.keys(globalVars || {})"
            :key="key"
            :value="globalVars[key].mapField"
          >
            <template v-if="globalVars[key].disName"
              >{{ globalVars[key].disName }}-</template
            >
            {{ globalVars[key].mapField }}
          </a-mentions-option>
        </a-mentions>
      </template>
    </go-form>
  </div>
</template>

<script>
import goForm from "../../../form/src/form";

export default {
  name: "GoSourcePanel",
  props: ["source", "globalVars"],
  data() {
    return {
      sourceDes: {
        type: {
          name: "数据源类型",
          type: "select",
          visible: false,
          options: [
            { value: "static", text: "静态数据源" },
            { value: "api", text: "API" }
          ]
        },
        static: {
          data: {
            name: "静态数据",
            type: "editor"
          }
        },
        api: {
          requestType: {
            name: "请求方式",
            type: "select",
            options: [
              { value: "get", text: "get" },
              { value: "post", text: "post" },
              { value: "put", text: "put" },
              { value: "delete", text: "delete" }
            ]
          },
          url: {
            name: "url",
            type: "slot",
            slotName: "url"
          },
          headers: {
            name: "headers",
            type: "editor"
          },
          postData: {
            name: "Post请求参数",
            type: "editor"
          }
        }
      }
    };
  },
  components: { goForm },
  methods: {
    handleAddVar(_item) {
      //添加组件的依赖变量
      this.$emit("handleAddVar", _item);
    },
    handleTypeChange() {}
  }
};
</script>

<style lang="scss" scoped>
$border-color: #5a606b; //边框
.go-source {
  padding: 10px 15px;
  border-top: 1px solid $border-color;
}
/deep/ .ant-mentions > textarea {
  background: transparent !important;
}
/deep/ .ant-col-24.ant-form-item-label {
  line-height: 40px;
  padding: 0;
}
</style>