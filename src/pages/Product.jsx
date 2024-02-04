import { useParams } from "react-router-dom";

const Product = () => {
    // const params = useParams();
    const {id} = useParams();
  return (
    <>
    <h1>I am dynamic route.</h1>
    {/* <h1>My dynamic id is -  {params.id}</h1> */}
    <h1>My dynamic id is -  {id}</h1>
    </>
  )
}

export default Product