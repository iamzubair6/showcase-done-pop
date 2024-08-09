import { useToaster } from "done-pop";
import "./App.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const App = ({ setAnchor }: any) => {
  const { Toast } = useToaster();

  const showToast = (
    message: string,
    variant: "success" | "error" | "info" | "warning"
  ) => {
    Toast(message, { variant });
  };

  const changeAnchorPosition = (horizontal: string, vertical: string) => {
    setAnchor({ horizontal, vertical });
  };

  return (
    <div className="container">
      <h1 className="title">Showcase of done-pop Toasts</h1>
      <div className="section">
        <h2>Variants</h2>
        <button
          className="button success"
          onClick={() => showToast("This is a success message!", "success")}
        >
          Show Success Toast
        </button>
        <button
          className="button error"
          onClick={() => showToast("This is an error message!", "error")}
        >
          Show Error Toast
        </button>
        <button
          className="button warning"
          onClick={() => showToast("This is a warning message!", "warning")}
        >
          Show Warning Toast
        </button>
        <button
          className="button info"
          onClick={() => showToast("This is an info message!", "info")}
        >
          Show Info Toast
        </button>
      </div>
      <div className="section">
        <h2>Anchor Positions</h2>
        <button
          className="button anchor"
          onClick={() => changeAnchorPosition("left", "top")}
        >
          Top Left
        </button>
        <button
          className="button anchor"
          onClick={() => changeAnchorPosition("right", "top")}
        >
          Top Right
        </button>
        <button
          className="button anchor"
          onClick={() => changeAnchorPosition("left", "bottom")}
        >
          Bottom Left
        </button>
        <button
          className="button anchor"
          onClick={() => changeAnchorPosition("right", "bottom")}
        >
          Bottom Right
        </button>
      </div>
    </div>
  );
};

export default App;
