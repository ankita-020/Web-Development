import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import { lazy, Suspense } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Fallback from "./components/Fallback";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    hydrateFallbackElement: <Fallback />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

/****************** React.createElement ***********************/
// createElement returns an Object
// const heading = React.createElement('h1', {id: 'heading'}, "Hello world from React!")
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(heading)

// console.log(heading);

// const structure = React.createElement('div', { id: 'parent' },
//   [React.createElement('div', { id: 'child' },
//     [React.createElement('h1', {}, "Hi, I'm an h1 tag"),
//       React.createElement('h2', {}, "Hi, I'm an h2 tag")
//     ]
//    ),
//   React.createElement('div', { id: 'child-2' },
//     [React.createElement('h1', {}, "Hi, I'm an h1 tag"),
//       React.createElement('h2', {}, "Hi, I'm an h2 tag")
//     ]
//    )])
// root.render(structure)
