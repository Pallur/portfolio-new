import { StrictMode, useState } from "react";
import * as ReactDOMClient from "react-dom/client";
import { SidebarElement } from "./Sidebar";
import "./styles.css";

import App from "./App";

function AppWithUI() {
  const [count, setCount] = useState(0);

  return (
    <StrictMode>
      <App key={count} />
    </StrictMode>
  );
}

const rootElement = document.getElementById("root")!;
const sideElement = document.getElementById("sidebar")!;
const root = ReactDOMClient.createRoot(rootElement);
const sidebar = ReactDOMClient.createRoot(sideElement)
root.render(<AppWithUI />);
sidebar.render(<SidebarElement />);
