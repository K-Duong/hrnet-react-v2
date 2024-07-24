import { RouterProvider } from "react-router-dom";
import { router } from "./router/routes";
import "./App.css";

function App({children}) {

  return (
     <RouterProvider router={router}>
      {children}
      </RouterProvider>
  );
}

export default App;
