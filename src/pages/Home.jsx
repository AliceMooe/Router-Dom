import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    setTimeout(()=>{
      navigate("/products");
    },3000);
  };
  return (
    <>
    <h1>I am Home Page.</h1>
    <div ><button onClick={navigateHandler}>Go to Products</button> </div>
    </>
  );
};

export default Home