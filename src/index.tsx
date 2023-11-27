import { StrictMode, useState } from "react";
import * as ReactDOMClient from "react-dom/client";
import React from 'react'

import App from "./App";
// import { Footer } from "./template/Footer";
// import { Refresh } from "./template/Refresh";

function AppWithUI() {
  const [count, setCount] = useState(0);

  return (
    <StrictMode>
      <App key={count} />
    </StrictMode>
  );
}

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);
root.render(<AppWithUI />);
