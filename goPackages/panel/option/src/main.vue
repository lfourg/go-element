<script>
import goForm from "../../components/form";

export default {
  name: "GoOptionPanel",
  componentName: "GoOptionPanel",
  props: ["option", "optionDis"],
  data() {
    return {
      groups: []
    };
  },
  components: { goForm },
  created() {
    this.getGroups(this.optionDis, this.groups);
  },
  methods: {
    getGroups(_optionData, _groups) {
      for (let key in _optionData) {
        if (_optionData[key].groupName) {
          _groups.push({
            key: key,
            name: _optionData[key].groupName
          });
        }
      }
    },
    /**
     * 同步数据到GO平台
     * @param
     * {String} key 属性名称(opition/source/actions/useVariable)
     * {Object} data 配置信息
     */
    handleSynchData(key, data) {
      //通知GO平台，数据更新
      this.$emit("handleSynchData", key, data);
    }
  },
  watch: {
    option: {
      handler(nOption) {
        this.handleSynchData("option", nOption);
      },
      deep: true
    }
  },
  render() {
    return (
      <a-collapse v-model={this.activeKey}>
        {this.groups.map(group => {
          return (
            <a-collapse-panel header={group.name} key={group.key}>
              <go-form
                optionDis={this.optionDis[group.key]}
                option={this.option[group.key]}
              />
              <go-option-panel
                optionDis={this.optionDis[group.key]}
                option={this.option[group.key]}
              />
            </a-collapse-panel>
          );
        })}
      </a-collapse>
    );
  }
};
</script>