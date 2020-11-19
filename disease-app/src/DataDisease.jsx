import "./App.css";
import lstDiseases from "./json/lstDiseases.json";
import "roboto-fontface";
import { ArrowUpward, ArrowDownward, Remove } from "@material-ui/icons";

function DataDisease() {
  let lst = lstDiseases.disease;
  return (
    <div className="DataDisease">
      <table className="tableDisease">
        <caption className="tittleOfTable">Dữ liệu dịch bệnh</caption>

        <thead>
          <tr>
            <th className="headerTable disease" rowSpan="2">
              Disease
            </th>
            <th className="headerTable cases" colSpan="5">
              Cases
            </th>
            <th className="headerTable deaths" colSpan="5">
              Deaths
            </th>
          </tr>

          <tr>
            <th className="headerTable cases">Week 27</th>
            <th className="headerTable cases">Week 26</th>
            <th className="headerTable cases">Status</th>
            <th className="headerTable cases">2017 Week 27</th>
            <th className="headerTable cases">2018 Week 27</th>
            <th className="headerTable deaths">Week 27</th>
            <th className="headerTable deaths">Week 26</th>
            <th className="headerTable deaths">Status</th>
            <th className="headerTable deaths">2017 Week 27</th>
            <th className="headerTable deaths">2018 Week 27</th>
          </tr>
        </thead>
        <tbody>
          {lst.map((e, i) => {
            return (
              <tr key={i}>
                <td className="contentTable diseaseName">{e.name}</td>
                <td className="contentTable casesContent">{e.CasesW27}</td>
                <td className="contentTable casesContent">{e.CasesW26}</td>

                {e.StatusCases === "increase" ? (
                  <td className="contentTable upIcon">
                    <ArrowUpward></ArrowUpward>
                  </td>
                ) : e.StatusCases === "decrease" ? (
                  <td className="contentTable downIcon">
                    <ArrowDownward></ArrowDownward>
                  </td>
                ) : (
                  <td className="contentTable nothingIcon">
                    <Remove></Remove>
                  </td>
                )}

                <td className="contentTable casesContent">{e.Cases2017W27}</td>
                <td className="contentTable casesContent">{e.Cases2018W27}</td>
                <td className="contentTable deathsContent">{e.DeathsW27}</td>
                <td className="contentTable deathsContent">{e.DeathsW26}</td>
                {e.StatusCases == "increase" ? (
                  <td className="contentTable upIcon">
                    <ArrowUpward></ArrowUpward>
                  </td>
                ) : e.StatusCases == "decrease" ? (
                  <td className="contentTable downIcon">
                    <ArrowDownward></ArrowDownward>
                  </td>
                ) : (
                  <td className="contentTable nothingIcon">
                    <Remove></Remove>
                  </td>
                )}
                <td className="contentTable deathsContent">
                  {e.Deaths2017W27}
                </td>
                <td className="contentTable deathsContent">
                  {e.Deaths2018W27}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DataDisease;
