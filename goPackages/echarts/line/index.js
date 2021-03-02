import EchartsLine from "./src/main";

/* istanbul ignore next */
EchartsLine.install = function(Vue) {
  Vue.component(EchartsLine.name, EchartsLine);
};

export default EchartsLine;
