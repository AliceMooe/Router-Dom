import { json, useLoaderData, useNavigate} from "react-router-dom";
import User from "../components/User";

const ProductDetail = () => {
  // const {postID} = useParams();  
  const post = useLoaderData();   
  const {title,body,userId} = post;   
  const navigate = useNavigate();
  
  const navigatorHandler = ()=>{
    navigate( "/products");
  }
  return (
    <>
    <h1>Product Detail Page</h1>
    <h2 > Title:<br /> {title}</h2>
    <User userID= {userId}/>
    <h3 >Body: <br /> {body}</h3>
    <button onClick={navigatorHandler}>Go Back to product</button>
    </>
  )
}

export default ProductDetail;

export const loader = async ({request,params})=>{
  const response  = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postID}`);
  if(!response.ok) {
    throw json({message: "Could not find post with ID"}, {status:404});
    }else{
      const post = await response.json();
      console.log(post);
      return post;
      
  };
}


