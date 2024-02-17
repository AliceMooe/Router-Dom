import { Link } from "react-router-dom";
const PRODUCTS = [
{
  id : 1,
  title : "Apple" ,
  description : "Lorem ............"
},
{
  id : 2,
  title : "Pineapple" ,
  description : "Lorem ............"
},
{
  id : 3,
  title : "Orange" ,
  description : "Lorem ............"
} ,
];

const Products = () => {
  return (
    <>
    {
      PRODUCTS.map((product)=>(
        <Link to = {`/products/${product.title}`}>
    
               
         <div  key={product.id}  className="card">
          <p className="title">{product.title}</p>
          <p>{product.description}</p>
        </div>

        </Link>
      ))}
    </>
    )
};
export default Products;