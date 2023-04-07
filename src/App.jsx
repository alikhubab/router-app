import React, {Component} from "react";
import NavBar from "./components/navbar";
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path={"/products"} element={<Products/>}/>
            <Route path={"/posts"} element={<Posts/>}/>
            <Route path={"/admin"} element={<Dashboard/>}/>
            <Route path={"/"} element={<Home/>}/>
        </Route>
    )
);


const App = () => {
    return (
        <React.Fragment>
            <NavBar/>
            <RouterProvider router={router}/>
        </React.Fragment>
    )
}

export default App;
