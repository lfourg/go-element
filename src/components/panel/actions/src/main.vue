<template>
  <div>
    <template v-for="(key, index) in Object.keys(actionsDes)">
      <a-collapse v-model="activeKey" :key="key">
        <a-collapse-panel :header="actionsDes[key]" :key="`collapse${index}`">
          <div class="go-variable-list">
            <div class="go-variable-list-header">
              <span>字段</span>
              <span>绑定到变量</span>
              <span>描述名称</span>
              <span>操作</span>
            </div>
            <div
              class="go-variable-list-tr"
              v-for="(item, index) in actions[key]"
              :key="`field${index}`"
            >
              <div class="item">
                <a-input
                  v-if="item.dynamic"
                  type="text"
                  v-model="item.field"
                  placeholder="字段"
                  @blur="handleUpVar(item)"
                />
                <span v-else>{{ item.field }}</span>
              </div>
              <div class="item">
                <a-input
                  type="text"
                  v-model="item.mapField"
                  placeholder="绑定到变量"
                  @blur="handleUpVar(item)"
                />
              </div>
              <div class="item">
                <a-input
                  type="text"
                  v-model="item.disName"
                  placeholder="描述名称"
                  @blur="handleUpVar(item)"
                />
              </div>
              <div class="item">
                <a-icon
                  v-if="item.dynamic"
                  type="delete"
                  @click="handleDelVar(key, index, item)"
                  title="删除"
                />
              </div>
            </div>
            <div class="go-variable-list-op">
              <a-button type="primary" icon="plus" @click="handleAddVar(key)"
                >新建一个变量</a-button
              >
            </div>
          </div>
        </a-collapse-panel>
      </a-collapse>
    </template>
  </div>
</template>

<script>
export default {
  name: "GoActionsPanel",
  props: ["actions", "actionsDes"],
  data() {
    return {
      activeKey: "collapse0"
    };
  },
  methods: {
    handleAddVar(_key) {
      this.actions[_key].push({
        key: "",
        field: "",
        mapField: "",
        disName: "",
        value: "",
        dynamic: true
      });
    },
    handleUpVar(_item) {
      if (_item.field && _item.mapField) {
        _item.key = _item.mapField;
      }
    },
    handleDelVar(_key, _index, _item) {
      this.actions[_key].splice(_index, 1);
    }
  }
};
</script>

<style lang="scss" scoped="">
$main-color: #1890ff;
$main-bg-color: #313740;
.go-variable-list {
  margin: 5px 0;
  .go-variable-list-header {
    padding: 5px 10px;
    background: $main-bg-color;
    display: flex;
    > span {
      flex: 1 1 auto;
      width: 30%;
    }
    > span:last-child {
      width: 10%;
    }
  }
  .go-variable-list-tr {
    display: flex;
    align-items: center;
    .item {
      flex: 1 1 auto;
      width: 30%;
      margin-top: 10px;
      span {
        margin-left: 15px;
      }
      input {
        width: 80%;
      }
      i {
        font-size: 14px;
        &:hover {
          color: $main-color;
        }
      }
    }
    .item:last-child {
      width: 10%;
      input {
        width: 100%;
      }
    }
  }
  .go-variable-list-op {
    text-align: center;
    margin-top: 20px;
  }
}
</style>