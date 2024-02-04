import { createBrowserRouter ,  RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Main from "./layouts/Main";
import Products from "./pages/Products";
import Error from "./pages/Error";
import Product from "./pages/Product";

const router = createBrowserRouter([
  {path : "" ,
  element : <Main />,
  errorElement : <Error />,
  children: [
    {path : "/",element :<Home/> },
    {path : "/about",element :<About/> },
    {path : "/products",element : <Products />},
    {path : "/product/:id",element:<Product />}
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
