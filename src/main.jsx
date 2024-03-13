import React from "react";
import ReactDOM from "react-dom/client";
import { Route } from "react-router-dom";
import Layout from "./Layout";
import "./index.css";
import {
  Home,
  About,
  Contact,
  User,
  Github,
  githubInfoLoader,
} from "./components/index";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route path="github" element={<Github />} loader={githubInfoLoader} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
