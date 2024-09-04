import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <h1>My Home page</h1>
      <p>
        Go to <Link to="products">List of Products</Link>
      </p>
      
    </>
  );
}
