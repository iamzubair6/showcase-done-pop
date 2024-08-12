import { ToasterProvider } from "done-pop";
import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

// eslint-disable-next-line react-refresh/only-export-components
const Main = () => {
  const [anchor, setAnchor] = useState<{
    horizontal: "right" | "left" | "center";
    vertical: "bottom" | "top";
  }>({ horizontal: "right", vertical: "bottom" });

  return (
    <StrictMode>
      <ToasterProvider
        dense
        preventDuplicate
        maxSnack={3}
        autoHideDuration={5000}
        anchorOrigin={anchor}
      >
        <App setAnchor={setAnchor} />
      </ToasterProvider>
    </StrictMode>
  );
};

createRoot(document.getElementById("root")!).render(<Main />);
