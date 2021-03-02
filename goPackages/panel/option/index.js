import OptionPanel from "./src/main";

/* istanbul ignore next */
OptionPanel.install = function(Vue) {
  Vue.component(OptionPanel.name, OptionPanel);
};

export default OptionPanel;
