import { Link, json, useLoaderData } from "react-router-dom";
import User from "../components/User";


const Products = () => {
  const PRODUCTS = useLoaderData();
  return (
    <>
    {
      PRODUCTS.map((product)=>(
        <Link to = {`/products/${product.id}`} key={product.id}>
    
               
         <div    className="card">
          <p >{product.title}</p>
         <User userID={product.userId}/>
        </div>

        </Link>
      ))}
    </>
    )
};
export default Products;

// API data fetch using react router dom support "loader"
export const loader = async ()=>{
  const response  = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    // error handlaing 
    throw json ({message: "Could not load products" },{status : 500});
  }else{
    const products = await response.json();
    //  console.log(products);
    return products;
   
  }
}