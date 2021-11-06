import { createSlice } from "@reduxjs/toolkit";
import { Icontainer, Icomponent } from "../model/editor";
import { v4 as uuidv4 } from "uuid";
interface Istate {
  pageName: string;
  pagePath: string;
  containers: Icontainer[];
  components: Icomponent[];
}

const initialState: Istate = {
  pageName: "初始页面",
  pagePath: "/index/index",
  containers: [],
  components: []
};
// const initialState
export const counterSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    addContainer: (state, action) => {
      state.containers.push({
        containerId: uuidv4(),
        containerType: "normal",
        style: {
          width: 1,
          height: 1,
          top: 0,
          left: 0
        }
      });
    },
    decrement: (state) => {},
    incrementByAmount: (state, action) => {}
  }
});

export const { addContainer, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;

/** 
"containers": [
  {
      "type": "container",  // container  就是一个box
      "containerType": "normal",
      "style": {
          "width": "100%",
          "height": "100%",
          "top": "0.1",
          "left": "0.1"
      },
      "components": [
          {
             "componentName": "box", // 唯一名称
             "type": "components",
             "componentType": "button",
             "hiden": false,
             "disabled": false,          
              "addOnComponents": [  // style
                  {
                      "type": "addOnComponent",
                       "addOnComponentType": "style",
                       "data": "", // 这个data 可以定义任意的数据  比如style 就是存储style相关的数据 存储后   @style数据
                  },
                  {
                      "type": "addOnComponent",
                      "addOnComponentType": "script",    // @script数据
                      "data": "", // 存储脚本
                  },
                  {
                      "type": "addOnComponent",
                      "addOnComponentType": "action",
                      "data": {
                          "action": "click", // 
                          "triggerObject": "", // 触发组件名称, 或者容器
                          "triggerEvent": "", // event 包括触发其他组件的事件, 触发弹窗弹起, 触发api请求
                      }, // 存储脚本
                  },
                  {
                      "type": "addOnComponent",
                      "addOnComponentType": "api",
                      "data": {
                          "method": "post",
                           "api": "",
                           "preAdaptor": "function",  // 初始化的话 会将数据存到 组件
                      }, // 存储脚本
                  }
              ]
          }
      ]
  }
]*/
