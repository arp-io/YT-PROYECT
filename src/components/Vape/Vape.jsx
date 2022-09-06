import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Vape.css";
const Vape = (props) => {
  const history = useNavigate();
  const { _id, name, flavor, description, price, image } = props.vape;
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:4000/vapes/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/vapes"));
  };

  return (
    <div className="card">
      <img src={image} alt={name} />
      <article>By {flavor}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h3>Rs {price}</h3>
      <Button LinkComponent={Link} to={`/vapes/${_id}`} sx={{ mt: "auto" }}>
        Update
      </Button>
      <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>
        Delete
      </Button>
    </div>
  );
};

export default Vape;