import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import reduxStore from "./redux.js";
import {BrowserRouter as Router } from "react-router-dom";

const { store, persistor } = reduxStore();

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <App />
      </Router>
    </PersistGate>
  </Provider>
);
