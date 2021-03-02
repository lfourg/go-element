<script>
import GoFormItem from "./formItem";
export default {
  name: "GoForm",
  props: {
    option: { type: Object },
    optionDis: { type: Object },
    labelCol: {
      type: Number,
      default: 7
    },
    wrapperCol: {
      type: Number,
      default: 17
    }
  },
  components: { GoFormItem },
  render() {
    const layout = {
      labelCol: { span: this.labelCol == 24 ? null : this.labelCol },
      wrapperCol: { span: this.wrapperCol == 24 ? null : this.wrapperCol }
    };
    return (
      <a-form-model
        label-col={layout.labelCol}
        wrapper-col={layout.wrapperCol}
        model={this.option}
      >
        <go-form-item option={this.option} optionDis={this.optionDis} />
      </a-form-model>
    );
  }
};
</script>

<style scoped>
</style>