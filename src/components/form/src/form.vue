<script>
import GoFormItem from "./formItem";
export default {
  name: "GoForm",
  props: {
    data: { type: Object },
    dataDes: { type: Object },
    labelCol: {
      type: Number,
      default: 7
    },
    wrapperCol: {
      type: Number,
      default: 17
    }
  },
  provide() {
    return {
      goFormRoot: this
    };
  },
  components: { GoFormItem },
  render() {
    const layout = {
      labelCol: { span: this.labelCol },
      wrapperCol: { span: this.wrapperCol }
    };
    return (
      <a-form-model label-col={layout.labelCol} wrapper-col={layout.wrapperCol}>
        <go-form-item data={this.data} dataDes={this.dataDes}></go-form-item>
      </a-form-model>
    );
  }
};
</script>