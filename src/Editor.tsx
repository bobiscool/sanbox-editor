import "./styles.css";
import { Button, Row, Col, Form, Modal } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { addContainer } from "./store/editor";
import { Icontainer, Icomponent } from "./model/editor";
import { RootState } from "../src/store/store";
import React from "react";

const containerType = {
  normal: React.createElement("div"),
  form: Form,
  dialog: Modal
};
export default function App() {
  const containers = useSelector((state: RootState) => {
    return state.editor.containers;
  });
  const dispatch = useDispatch();

  function genContainer(container: Icontainer) {
    const Box = containerType[container.containerType];
    function getComputedStyle(container: Icontainer) {
      return {};
    }

    return <Box styles={getComputedStyle}></Box>;
  }

  function genContainers(containers: Icontainer[]) {
    return containers.map((container: Icontainer) => {
      return genContainer(container);
    });
  }

  return <div></div>;
}
