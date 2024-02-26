import { createBrowserRouter ,  RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Main from "./layouts/Main";
import Products from "./pages/Products";
import Error from "./pages/Error";
import ProductDetail from "./pages/ProductDetail";
import { loader as productsLoader } from "./pages/Products";
import { loader as productDetailsLoader } from "./pages/ProductDetail";


const router = createBrowserRouter([
  {path : "/" ,
  element : <Main />,
  errorElement : <Error />,
  children: [
    {index : true,element :<Home/> },
    {path : "/about",element :<About/> },
    {path : "/products",element : <Products />, loader : productsLoader },
    {path : "/products/:postID",element : <ProductDetail /> ,  loader : productDetailsLoader},
    // {path : "/productdetail/:title",element:<ProductDetail />},

  ] }

]);

const App = () => {
  return (
    <>
   <RouterProvider router={router} />
    </>
  )
}

export default App
