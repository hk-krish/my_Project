import { Component } from "react";
import { unstable_batchedUpdates } from "react-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./i18n";
import "./index.scss";
import { store } from "./ReduxToolkit/Store";
import reportWebVitals from "./reportWebVitals";

interface Props {
  children: React.ReactNode;
}
unstable_batchedUpdates(() => {
  console.error = () => {};
});

class ErrorBoundary extends Component<Props> {
  componentDidCatch(error: { message: string | string[] }) {
    if (error.message.includes("ToastContainer")) {
      return;
    }
  }
  render() {
    return this.props.children;
  }
}

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <ErrorBoundary>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
