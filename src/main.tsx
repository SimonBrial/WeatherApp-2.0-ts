//import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { AppState } from "./context/index.tsx";
import React from "react";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <AppState>
            <App />
        </AppState>
    </React.StrictMode>,
);
