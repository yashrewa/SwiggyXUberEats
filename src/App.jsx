import React, { Suspense, lazy, useState } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import HeaderComponent from "./components/header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/Restaurantmenu";
import Profile from "./components/Profile";
import Classprofile from "./components/Classprofile";
import UserContext from './components/utils/UserContext';
import Theme from "./components/utils/Theme";
import UserLocationInfo from "./components/utils/UserLocationInfo";
import { Provider } from "react-redux";
import store from "./components/utils/store";
// Composing Comopnentss

const Weather = lazy(() => import("./components/Weather"));

const AppLayout = () => {
  
  const [user, setUser] = useState({
    username: "yashrewa",
    emailId: "yashrewa00@gmail.com",
    DOB: "20/08/2000"
  })
  const [theme, setTheme] = useState("light")

  return (
    <Provider store={store} >
      <UserContext.Provider value={{
        user: user,
        setUser: setUser,
      }}>
      <Theme.Provider value={{
        theme: theme,
        setTheme: setTheme,
      }}>
      <HeaderComponent />
      <Outlet />
      <Footer />
      </Theme.Provider>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "classprofile",
            element: <Classprofile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurantmenu/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/weather",
        element: (
          <Suspense fallback={<h1>Lazy Loading</h1>}>
            <Weather />
          </Suspense>
        ),
      },
      {
        path: "/userLocation",
        element: <UserLocationInfo />,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
