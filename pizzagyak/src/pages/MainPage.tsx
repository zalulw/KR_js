import { Link } from "react-router-dom";
import EditPizza from "./EditPizza";

function MainPage() {
  return (
    <>
      <Link to={"/pizzak"}>
        <h2>Az összes pizza</h2>
      </Link>
      <Link to={"/edit/1"}>Pizza modositasa</Link>
    </>
  );
}

export default MainPage;
