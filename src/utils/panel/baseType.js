import { type } from "./constant";

export const FontSize = {
  name: "字体大小",
  type: type.slider,
  min: 12,
  max: 50,
};
export const Color = { name: "颜色", type: type.color };
export const FontColor = { name: "字体颜色", type: type.color };
export const Visible = { name: "是否可见", type: type.switch };

export const HorizontalPosition = {
  name: "水平位置",
  type: type.select,
  options: [
    { value: "left", text: "居左" },
    { value: "center", text: "居中" },
    { value: "right", text: "居右" },
  ],
};
export const VerticalPosition = {
  name: "垂直位置",
  type: type.select,
  options: [
    { value: "top", text: "居上" },
    { value: "middle", text: "居中" },
    { value: "bottom", text: "居下" },
  ],
};
export const Rotate = {
  name: "旋转角度",
  type: type.slider,
  min: 0,
  max: 180,
};

export default {
  FontSize,
  FontColor,
  Color,
  Visible,
  HorizontalPosition,
  VerticalPosition,
  Rotate,
};
