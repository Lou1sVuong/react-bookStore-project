import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import LandingPage from './pages/Home/LandingPage';
import DetailPage from './pages/DetailProduct/DetailPage';
import MainLayout2 from './layouts/MainLayout2';
import CartPage from './pages/CartPage/CartPage';
import MainLayout3 from './layouts/MainLayout3';
import MainLayout4 from './layouts/MainLayout4';
import BlogPage from './pages/BlogPage/BlogPage';
import Register from './pages/LoginPage/Register/Register';
import Login from './pages/LoginPage/Login/Login';
import AllProduct from './pages/AllProduct/AllProduct';



export const router = createBrowserRouter(createRoutesFromElements(
    <>

        <Route path='/'
            element={<MainLayout></MainLayout>}
        >
            <Route path='/' index element={<LandingPage />} />
        </Route>
        <Route element={<MainLayout2></MainLayout2>}>
            <Route path="/products/:detailId" element={<DetailPage />} />
        </Route>
        <Route element={<MainLayout3></MainLayout3>}>
            <Route path="/MyCart" element={<CartPage />} />
        </Route>
        <Route element={<MainLayout4></MainLayout4>}>
            <Route path="/Blog/:idBlog" element={<BlogPage />} />
        </Route>

        <Route path='/Login'
            element={<MainLayout2></MainLayout2>}
        >
            <Route path='/Login' index element={<Login />} />
        </Route>

        <Route path='/Register'
            element={<MainLayout2></MainLayout2>}
        >
            <Route path='/Register' index element={<Register />} />
        </Route>

        <Route path='/AllProducts'
            element={<MainLayout2></MainLayout2>}
        >
            <Route path='/AllProducts' index element={<AllProduct />} />
        </Route>




    </>



)

);

