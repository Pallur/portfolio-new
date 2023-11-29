import { StrictMode, useState } from "react";
import * as ReactDOMClient from "react-dom/client";
import { SidebarElement } from "./Sidebar";
import { InfoElement } from "./Info"
import "./styles.css";

import App from "./App";

const rootElement = document.getElementById("root")!;
const root = ReactDOMClient.createRoot(rootElement);
const sideElement = document.getElementById("sidebar")!;
const sidebar = ReactDOMClient.createRoot(sideElement)
const textElement = document.getElementById("info")!;
const textEl = ReactDOMClient.createRoot(textElement)


root.render(<App />);
sidebar.render(<SidebarElement />);
textEl.render(<InfoElement />);
