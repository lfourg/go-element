export default {
  name: "GoFormSlot",
  functional: true,
  inject: ["goFormRoot"],
  props: {
    data: Object,
    attr: String,
    slotName: String,
  },
  render: (h, ctx) => {
    console.log("ctx.injections:", ctx.injections);
    return h(
      "div",
      ctx.injections.goFormRoot.$scopedSlots[ctx.props.slotName]({
        data: ctx.props.data,
        attr: ctx.props.attr,
      })
    );
  },
};
