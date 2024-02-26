// import { useNavigate } from "react-router-dom";

// const Error = () => {
//     const navigate = useNavigate();

//   const navigateHandler = () => {
//      navigate("/");
//   };
//   return (
//    <>
//   <h1> Page not  found!<br/></h1>
//   <p>Sorry, the page you are looking for does not exist.</p>
//   <button onClick={navigateHandler}>Go Back Home</button>
//    </>
//   )
// }

// export default Error;

import { Link, useRouteError } from "react-router-dom"


const Error = () => {
  const error = useRouteError(true);
  console.log(error);
  let title = "Unknow Error";
  if (error.status === 500){
    title = error.data.message;
  }

  return (
    <section>
    <h1>{title}</h1>
    <Link to={"/"}>
    <button>Back to homepage</button>
    </Link>
    </section>
  )
}

export default Error