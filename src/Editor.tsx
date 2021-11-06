import "./styles.css";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { addContainer } from "./store/editor";
import { Icontainer, Icomponent } from "./model/editor";
import { RootState } from "../src/store/store";
// const container;
export default function App() {
  const containers = useSelector((state: RootState) => {
    return state.editor.containers;
  });
  const dispatch = useDispatch();

  function genContainer(container: Icontainer) {}

  function genContainers(containers: Icontainer[]) {
    return containers.map((container: Icontainer) => {
      return genContainer(container);
    });
  }

  return <div></div>;
}
