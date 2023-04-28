import "./App.css";
import Home from "./components/Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import CheckUser from "./Pages/CheckUser/CheckUser";
import StepOne from "./Pages/Signup/Step1";
import StepTwo from "./Pages/Signup/Step2";
import StepThree from "./Pages/Signup/Step3";
import StepFour from "./Pages/Signup/Step4";
import StepFive from "./Pages/Signup/Step5";
import PrivateRoute from "./Pages/PrivateRoute";
import Filter from "./Pages/Filter/Filter";
import UserDashBoard from "./Pages/userDashBoard/userDashBoard";
import UserProfile from "./Pages/userDashBoard/userProfile";
import NavBar from "./components/Layout/NavBar/NavBar";
import * as React from "react";
import AdmindashBoard from "./components/AdminDashBoard/AdmindashBoard";
import Users from "./components/AdminDashBoard/Main/Users/Users";
import SP from "./components/AdminDashBoard/Main/SP/SP";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Provider from "./Pages/Provider/Provider";
import { useSelector } from "react-redux";
import AllDetails from "./components/AdminDashBoard/Main/AllDetails/AllDetails";
import Update from "./components/AdminDashBoard/Main/Update/Update";
import ReqDetails from "./components/AdminDashBoard/Main/AllRequests/ReqDetails";
<<<<<<< HEAD
import Requests from "./components/AdminDashBoard/Main/AllRequests/Requests";
=======
import RequestTest from "./Pages/requestTest";

>>>>>>> 32f595c3812d577589e1884ab24fac7cf7428b2a
// const authenticated = useSelector((state) => state.user.isAdmin);

const router = createBrowserRouter([
<<<<<<< HEAD
  {path:"/admin",element:<AdmindashBoard/>,children:[
    {path:'users',element:<Users></Users>},
    {path:'providers',element:<Users></Users>},
    {path:'users/:id',element:<AllDetails/>},
    {path:'providers/:id',element:<AllDetails/>},
    {path:'users/update/:id',element:<Update></Update>},
    {path:'providers/update/:id',element:<Update></Update>},
    {path:'requests',element:<Requests/>},
    {path:'requests/:id',element:<ReqDetails/>},
    // {path:'providers',element:<SP/>}
  ]},
=======
  {
    path: "/admin",
    element: <AdmindashBoard />,
    children: [
      { path: "users", element: <Users></Users> },
      { path: "providers", element: <Users></Users> },
      { path: "users/:id", element: <AllDetails /> },
      { path: "providers/:id", element: <AllDetails /> },
      { path: "users/update/:id", element: <Update></Update> },
      { path: "providers/update/:id", element: <Update></Update> },
      { path: "requests", element: <AllRequests /> },
      { path: "requests/:id", element: <ReqDetails /> },
      // {path:'providers',element:<SP/>}
    ],
  },
>>>>>>> 32f595c3812d577589e1884ab24fac7cf7428b2a
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
    children: [{ path: "home", element: <Home></Home> }],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signup/stepone",
    element: <StepOne />,
  },
  {
    path: "/signup/steptwo",
    element: <StepTwo />,
  },
  {
    path: "/signup/stepthree",
    element: <StepThree />,
  },
  {
    path: "/signup/stepfour",
    element: <StepFour />,
  },
  {
    path: "/signup/stepfive",
    element: <StepFive />,
  },
  {
    path: "/checkuser",
    element: <CheckUser />,
  },
  {
    path: "/filter",
    element: <Filter />,
  },
  {
    path: "/provider",
    element: <Provider />,
  },
  {
    path: "/userDashBoard",
    element: <UserDashBoard />,
  },
  {
    path: "/userProfile",
    element: <UserProfile />,
  },
  {
    path: "/private",
    element: <RequestTest />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}>
        {/* <PrivateRoute
          path="/userDashBoard"
          component={UserDashBoard}
          authenticated={authenticated}
        /> */}
        <Outlet />
      </RouterProvider>
      {/* <Home></Home> */}
      {/* <FileUpload></FileUpload> */}
      {/* <Login></Login> */}
      {/* <Signup></Signup> */}
      {/* <StepOne></StepOne> */}
      {/* <StepThree></StepThree> */}
      {/* <StepTwo></StepTwo> */}
      {/* <Footer></Footer> */}
      {/* <TextField id="filled-basic" label="Filled" variant="filled" /> */}
    </div>
  );
}

export default App;
