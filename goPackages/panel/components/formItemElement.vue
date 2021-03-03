<template>
  <div>
    <template v-if="optionDis[item].type == 'select'">
      <a-select
        :default-value="option[item]"
        size="small"
        v-model="option[item]"
      >
        <a-select-option
          v-for="citem in optionDis[item].options"
          :key="citem.value"
          :value="citem.value"
          >{{ citem.text }}</a-select-option
        >
      </a-select>
    </template>
    <template v-else-if="optionDis[item].type == 'slider'">
      <a-row>
        <a-col :span="12">
          <a-slider
            size="small"
            v-model="option[item]"
            :min="optionDis[item].min || 0"
            :max="optionDis[item].max || 100"
          />
        </a-col>
        <a-col :span="6">
          <a-input-number
            size="small"
            v-model="option[item]"
            :min="optionDis[item].min || 0"
            style="marginLeft: 16px"
          />
        </a-col>
      </a-row>
    </template>
    <template v-else-if="optionDis[item].type == 'switch'">
      <a-switch default-checked size="small" v-model="option[item]" />
    </template>
    <template v-else-if="optionDis[item].type == 'number'">
      <a-input-number v-model="option[item]" size="small" />
    </template>
    <template v-else-if="optionDis[item].type == 'color'">
      <go-colors v-model="option[item]" />
      <!-- <a-input type="text" size="small" v-model="option[item]" />-->
    </template>
    <template v-else-if="optionDis[item].type == 'editor'">
      <go-editor v-model="option[item]" />
    </template>
    <template v-else-if="optionDis[item].type == 'slot'">
      <slot :name="optionDis[item].slotName" :data="optionDis[item]"></slot>
    </template>
    <template v-else>
      <a-input
        :type="optionDis[item].type || 'text'"
        size="small"
        v-model="option[item]"
      />
    </template>
  </div>
</template>

<script>
import goColors from "./color";
/*import goEditor from "./editor";*/
export default {
  name: "GoFormItemElement",
  props: {
    option: { type: Object },
    optionDis: { type: Object },
    item: { type: String }
  },
  components: { goColors },
  mounted() {}
};
</script>
