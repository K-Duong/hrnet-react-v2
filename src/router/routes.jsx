import { createBrowserRouter, Outlet } from "react-router-dom";

import MainContainer from "../layout/mainContainer";
import Navbar from "../layout/navbar";
import Footer from "../layout/footer";
import HomePage from "../pages/homePage";
import ErrorPage from "../pages/errorPage";
import ListOfEmployeePage from "../pages/employeePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/employee-list",
        element: <ListOfEmployeePage />,
      },
    ],
  },
]);

function Root() {
  return (
    <>
      <Navbar />
      <MainContainer>
        <Outlet />
      </MainContainer>
      <Footer />
    </>
  );
}
