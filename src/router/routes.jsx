import { createBrowserRouter, Outlet } from "react-router-dom";

import MainContainer from "../layout/mainContainer";
import Navbar from "../layout/navbar";
import Footer from "../layout/footer";
import HomePage from "../pages/homePage";
import ErrorPage from "../pages/errorPage";
import ListOfEmployeePage from "../pages/employeePage";

const PATHS = {
  HOME: "/",
  EMPLOYEE_LIST: "employee-list"
}
const Root = () => {
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
export const router = createBrowserRouter([
  {
    path: PATHS.HOME,
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: PATHS.EMPLOYEE_LIST,
        element: <ListOfEmployeePage />,
      },
    ],
  },
]);


