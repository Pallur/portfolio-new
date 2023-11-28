import { StrictMode, useState } from "react";
import * as ReactDOMClient from "react-dom/client";

import App from "./App";
// import { Refresh } from "./template/Refresh";
// <Refresh onClick={() => setCount(count + 1)} />

function AppWithUI() {
  const [count, setCount] = useState(0);

  return (
    <StrictMode>
      <App key={count} />
    </StrictMode>
  );
}

const rootElement = document.getElementById("root")!;
const root = ReactDOMClient.createRoot(rootElement);
root.render(<AppWithUI />);
