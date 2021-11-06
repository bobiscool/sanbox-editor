import { render } from "react-dom";
import store from "./store/store";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import App from "./Editor";

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
