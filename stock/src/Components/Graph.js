import axios from "axios";
import { useEffect, useState } from "react";
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
  const [timeMode, setTimeMode] = useState("7d");

  const handleClick = async () => {
    let response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/stock/history?time=${timeMode}&query=${props.uuid}`
    );
    console.log(response);
    setDisplayGraph(true);
    const mappedData = response.data.result.data.history.map((data) => {
      // const date = moment.unix(data.timestamp).format("MM/DD");
      return {
        y: data.price,
        x: data.timestamp,
      };
    });

    setGraphData(mappedData);
  };
  useEffect(() => {
    if (displayGraph) {
      handleClick();
    }
  }, [timeMode]);

  return (
    <div className="graphDisplay">
      {displayGraph && (
        <XYPlot xType="time" width={600} height={300}>
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
      <button
        onClick={() => {
          setTimeMode("24h");
        }}
      >
        24Hour
      </button>

      <button
        onClick={() => {
          setTimeMode("7d");
        }}
      >
        7d
      </button>
    </div>
  );
};

export default Graph;
