import * as ReactDOMClient from "react-dom/client";
import { SidebarElement } from "./Sidebar";
import "./styles.css";

import App from "./App";

const rootElement = document.getElementById("root")!;
const root = ReactDOMClient.createRoot(rootElement);
const sideElement = document.getElementById("sidebar")!;
const sidebar = ReactDOMClient.createRoot(sideElement)


root.render(<App />);
sidebar.render(<SidebarElement />);
