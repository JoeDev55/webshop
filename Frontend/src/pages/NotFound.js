import react from "react";
import { Link } from "react-router";
function NotFound() {
  return (
    <div>
     <h1>Not Found Page :(</h1> 
     <Link to={"/"}>
     <button>Go back Home</button>
     </Link>
    </div>
  );
}

export default NotFound;