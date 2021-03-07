import DataPanel from "./src/main";

/* istanbul ignore next */
DataPanel.install = function(Vue) {
  Vue.component(DataPanel.name, DataPanel);
};

export default DataPanel;
