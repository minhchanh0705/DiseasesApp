import "../css/Covid.css";
import dataFake from "../json/dataFake.json";

const Covid = () => {
  // dataToShow.map((e) => console.log(e));
  const lstPlaces = Object.keys(dataFake);

  console.log(lstPlaces);
  let lstWeeks = [];
  return (
    <div id="container">
      <p>
        <strong id="title">Malaria Cases in the last three weeks</strong>
      </p>
      {lstPlaces.map((e, i) => (
        <div id="flex-container" key={i}>
          <p>
            <strong>{e}</strong>
          </p>
          <div className="region">
            {
              ((lstWeeks = Object.keys(dataFake[e])),
              lstWeeks.map((week, index) => (
                <div className="rowData" key={index}>
                  <div
                    id="regions"
                    style={
                      e === "Place1"
                        ? {
                            backgroundColor: "#d4483e",
                          }
                        : e === "Place2"
                        ? {
                            backgroundColor: "#f19336",
                          }
                        : e === "Place3"
                        ? {
                            backgroundColor: "#3678cc",
                          }
                        : {
                            backgroundColor: "#5b9c52",
                          }
                    }
                  >
                    {week}
                  </div>
                  <div className="figure">
                    <strong>{dataFake[e][week].figures.cases}</strong> Cases
                  </div>
                  <div className="figure">
                    <strong>{dataFake[e][week].figures.deaths}</strong> Deaths
                  </div>
                </div>
              )))
            }
          </div>
        </div>
      ))}
    </div>
  );
};
export default Covid;
