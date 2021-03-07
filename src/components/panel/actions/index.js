import EventPanel from "./src/main";

/* istanbul ignore next */
EventPanel.install = function(Vue) {
  Vue.component(EventPanel.name, EventPanel);
};

export default EventPanel;
