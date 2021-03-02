import { type } from "./constant";
import TypeObj from "./baseType";

export const Grid = {
  groupName: "边距",
  left: {
    name: "左侧",
    type: type.number,
  },
  right: {
    name: "右侧",
    type: type.number,
  },
  top: {
    name: "顶部",
    type: type.number,
  },
  bottom: {
    name: "底部",
    type: type.number,
  },
};

export const Tooltip = {
  groupName: "提示信息",
  show: TypeObj.Visible,
  textStyle: {
    color: TypeObj.FontColor,
    fontSize: TypeObj.FontSize,
  },
};

export const Legend = {
  groupName: "图例",
  show: TypeObj.Visible,
  textStyle: {
    color: TypeObj.FontColor,
    fontSize: TypeObj.FontSize,
  },
  left: TypeObj.HorizontalPosition,
  top: TypeObj.VerticalPosition,
};

export const XAxis = {
  groupName: "x轴",
  show: TypeObj.Visible,
  axisLabel: {
    rotate: TypeObj.Rotate,
    textStyle: { color: TypeObj.FontColor, fontSize: TypeObj.FontSize },
  },
  axisLine: { groupName: "轴线", lineStyle: { color: TypeObj.Color } },
  splitLine: {
    groupName: "分割线",
    show: TypeObj.Visible,
    lineStyle: { color: TypeObj.Color },
  },
};

export const YAxis = {
  groupName: "y轴",
  show: TypeObj.Visible,
  axisLabel: {
    rotate: TypeObj.Rotate,
    textStyle: { color: TypeObj.FontColor, fontSize: TypeObj.FontSize },
  },
  axisLine: { groupName: "轴线", lineStyle: { color: TypeObj.Color } },
  splitLine: {
    groupName: "分割线",
    show: TypeObj.Visible,
    lineStyle: { color: TypeObj.Color },
  },
};

export default { Grid, Tooltip, Legend, XAxis, YAxis };
