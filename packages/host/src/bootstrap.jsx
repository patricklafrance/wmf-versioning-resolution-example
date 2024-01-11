import "@workleap/orbiter-ui/index.css";

import { App } from "./App.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@workleap/orbiter-ui";

const root = createRoot(document.getElementById("root"));

root.render(
    <StrictMode>
        <ThemeProvider colorScheme="light">
            <App />
        </ThemeProvider>
    </StrictMode>
);
