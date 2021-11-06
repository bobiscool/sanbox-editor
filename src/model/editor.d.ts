// container
export interface Icontainer {
  containerId: string; // id
  parentContainerId?: string; // 父集容器
  containerType: "normal" | "form" | "dialog";
  style: {
    width: number | string;
    height: number | string;
    top: number; // 0 - 1
    left: number; // 0 - 1
  };
}

export interface IFormContainer extends Icontainer {}

// components

export interface IaddOnComponent {
  addOnComponentType: "style" | "script" | "dialog" | "api" | "action";
  data: ""; // 这个data 可以定义任意的数据  比如style 就是存储style相关的数据 存储后   @style数据
}
export interface Icomponent {
  componentId: string;
  parentContainerId: string; // 父集容器
  componentName: "box"; // 唯一名称
  componentType: "button";
  hiden: false;
  disabled: false;
  addOnComponents: IaddOnComponent[]; // 数据是否放内部合适
}
