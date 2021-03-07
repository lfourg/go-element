<script>
import GoFormItemElement from "./formItemElement";
export default {
  name: "GoFormItem",
  componentName: "GoFormItem",
  props: {
    data: { type: Object },
    dataDes: { type: Object }
  },
  components: { GoFormItemElement },
  render() {
    return (
      <div>
        {Object.keys(this.dataDes).map(key => {
          if (key != "groupName" && this.dataDes[key].visible != false) {
            if (!this.dataDes[key].type) {
              if (!this.dataDes[key].groupName) {
                return (
                  <go-form-item
                    data={this.data[key]}
                    dataDes={this.dataDes[key]}
                  />
                );
              }
            } else {
              return (
                <a-form-model-item label={this.dataDes[key].name}>
                  <go-form-item-element
                    key={key}
                    item={key}
                    data={this.data}
                    dataDes={this.dataDes}
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