import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import store from "../app/store.js";
import "./i18n";
import { BrowserRouter, Routes, Route } from "react-router";
import ManageTask from "./routes/ManageTask.jsx";
import TaskReport from "./routes/TaskReport.jsx";
import Settings from "./routes/Settings.jsx";
import App from "./App.jsx";
import Layout from "./Layout.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<App />} />
            <Route path="/manage-task" element={<ManageTask />} />
            <Route path="/task-report" element={<TaskReport />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </Provider>
    </StrictMode>
  </BrowserRouter>,
);
