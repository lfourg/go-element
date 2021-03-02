<script>
import GoFormItemElement from "./formItemElement";
export default {
  name: "GoFormItem",
  componentName: "GoFormItem",
  props: {
    option: { type: Object },
    optionDis: { type: Object }
  },
  components: { GoFormItemElement },
  render() {
    return (
      <div>
        {Object.keys(this.optionDis).map(key => {
          if (key != "groupName") {
            if (!this.optionDis[key].type) {
              if (!this.optionDis[key].groupName) {
                return (
                  <go-form-item
                    option={this.option[key]}
                    optionDis={this.optionDis[key]}
                  />
                );
              }
            } else {
              return (
                <a-form-model-item label={this.optionDis[key].name}>
                  <go-form-item-element
                    key={key}
                    item={key}
                    option={this.option}
                    optionDis={this.optionDis}
                  />
                </a-form-model-item>
              );
            }
          }
        })}
      </div>
    );
  }
};
</script>