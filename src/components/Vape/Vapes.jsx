import React, { useEffect, useState } from "react";
import "./Vape.css";
import axios from "axios";
import Vape from "./Vape";
const URL = "http://localhost:4000/vapes";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Vapes = () => {
  const [vapes, setVapes] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setVapes(data.vapes));
  }, []);
  console.log(vapes);
  return (
    <div>
      <ul>
        {vapes &&
          vapes.map((vape, i) => (
            <li key={i}>
              <Vape vape={vape} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Vapes;