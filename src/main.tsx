//import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { AppState } from "./context/index.tsx";
import React from "react";

/* {
<React.StrictMode>
  </React.StrictMode>
} */
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <AppState>
        <App />
    </AppState>,
);
