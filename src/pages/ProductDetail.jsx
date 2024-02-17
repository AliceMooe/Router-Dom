import { useNavigate, useParams } from "react-router-dom";

const ProductDetail = () => {
  const {title} = useParams();        
  const navigate = useNavigate();
  
  const navigatorHandler = ()=>{
    navigate( "/products");
  }
  return (
    <>
    <h1>Product Detail Page</h1>
    <h1>My dynamic title is -  {title}</h1> 
    <button onClick={navigatorHandler}>Go Back to product</button>
    </>
  )
}

export default ProductDetail;

