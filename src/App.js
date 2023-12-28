import { RouterProvider } from 'react-router-dom';
import DetailPage from './pages/DetailProduct/DetailPage';
import { router } from './router';
import NavCart from './layouts/Nav/NavCart/NavCart';
import NavDetail from './layouts/Nav/NavDetail/NavDetail';
import CartPage from './pages/CartPage/CartPage';




function App() {
  return (
    <>
<link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" />

      <RouterProvider router={router}></RouterProvider>   
     {/* <NavCart></NavCart> */}
     {/* <CartPage></CartPage> */}
    </>
  );
}

export default App;
