import axios from "axios";
import { useState } from "react";
import moment from "moment";
import "../../node_modules/react-vis/dist/style.css";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineSeries,
} from "react-vis";

const Graph = (props) => {
  const [displayGraph, setDisplayGraph] = useState(false);
  const [graphData, setGraphData] = useState([]);
  const handleClick = async () => {
    if (displayGraph === false) {
      let response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/stock/history?time=7d&query=${props.uuid}`
      );
      setDisplayGraph(true);
      const mappedData = response.data.result.data.history.map((data) => {
        const date = moment.unix(data.timestamp).format("MM/DD");
        console.log(date);
        return {
          y: data.price,
          x: data.timestamp,
        };
      });

      setGraphData(mappedData);
    }
  };

  return (
    <div>
      {displayGraph && (
        <XYPlot xType="time" width={500} height={300}>
          <HorizontalGridLines />
          <VerticalGridLines />
          <XAxis
            tickTotal={6}
            tickFormat={(v) => moment.unix(v).format("MM/DD")}
            title="X Axis"
          />
          <YAxis title="Y Axis" />
          <LineSeries data={graphData} />
        </XYPlot>
      )}
      {!displayGraph && <button onClick={handleClick}>Show Graph</button>}
    </div>
  );
};

export default Graph;
