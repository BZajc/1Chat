import { createRoot } from "react-dom/client";
import App from "./App";
import React from "react";
import "./sass/mainStyles.scss"

const el = document.getElementById("root")!;
const root = createRoot(el);

root.render(<App />);
