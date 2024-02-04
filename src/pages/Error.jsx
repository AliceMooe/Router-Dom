import { useNavigate } from "react-router-dom";

const Error = () => {
    const navigate = useNavigate();

  const navigateHandler = () => {
     navigate("/");
  };
  return (
   <>
  <h1> Page not  found!<br/></h1>
  <p>Sorry, the page you are looking for does not exist.</p>
  <button onClick={navigateHandler}>Go Back Home</button>
   </>
  )
}

export default Error;