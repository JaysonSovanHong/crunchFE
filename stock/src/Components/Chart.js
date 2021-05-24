import axios from "axios";
import { useState } from "react";

const graph = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/stocks`
    );
    console.log(response.data.message.data);
  } catch (error) {
    console.log("can not find stocks");
  }
};

const Chart = () => {
  const [graph, setGraph] = useState("");
  return <div>Chart</div>;
};

export default Chart;
