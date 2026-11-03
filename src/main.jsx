import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

function App() {
  return <div>App</div>;
}

const rootElement = document.getElementById("root");

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
