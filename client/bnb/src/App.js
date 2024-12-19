import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";

function App() {
  const theme = {
    color: {
      primary: "#FFF7D1",
      secondary: " #8B5DFF",
      tetiary: "#6A42C2",
      text: "rgba(0,0,0,0.7)",
      smallText: "rgba(0, 0, 0, 0.6)",
    },
    size: {
      small: "13px",
      medium: "17px",
      large: "22px",
      extraLarge: "32px",
    },
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<Homepage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/*" element={<Homepage />} />
      </Route>
    )
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
