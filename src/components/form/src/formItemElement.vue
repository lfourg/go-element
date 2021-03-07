<template>
  <div>
    <template v-if="dataDes[item].type == 'select'">
      <a-select :default-value="data[item]" size="small" v-model="data[item]">
        <a-select-option
          v-for="citem in dataDes[item].options"
          :key="citem.value"
          :value="citem.value"
          >{{ citem.text }}</a-select-option
        >
      </a-select>
    </template>
    <template v-else-if="dataDes[item].type == 'slider'">
      <a-row>
        <a-col :span="12">
          <a-slider
            size="small"
            v-model="data[item]"
            :min="dataDes[item].min || 0"
            :max="dataDes[item].max || 100"
          />
        </a-col>
        <a-col :span="6">
          <a-input-number
            size="small"
            v-model="data[item]"
            :min="dataDes[item].min || 0"
            style="marginLeft: 16px"
          />
        </a-col>
      </a-row>
    </template>
    <template v-else-if="dataDes[item].type == 'switch'">
      <a-switch default-checked size="small" v-model="data[item]" />
    </template>
    <template v-else-if="dataDes[item].type == 'number'">
      <a-input-number v-model="data[item]" size="small" />
    </template>
    <template v-else-if="dataDes[item].type == 'color'">
      <go-colors v-model="data[item]" />
    </template>
    <template v-else-if="dataDes[item].type == 'editor'">
      <go-editor v-model="data[item]" />
    </template>
    <template v-else-if="dataDes[item].type == 'slot'">
      <go-form-slot
        :slotName="dataDes[item].slotName"
        :data="data"
        :attr="item"
      />
    </template>
    <template v-else>
      <a-input
        :type="dataDes[item].type || 'text'"
        size="small"
        v-model="data[item]"
      />
    </template>
  </div>
</template>

<script>
import goColors from "./color";
import goEditor from "./editor";
import goFormSlot from "./slot.js";
export default {
  name: "GoFormItemElement",
  props: {
    data: { type: Object },
    dataDes: { type: Object },
    item: { type: String }
  },
  components: { goFormSlot, goColors, goEditor },
  mounted() {}
};
</script>