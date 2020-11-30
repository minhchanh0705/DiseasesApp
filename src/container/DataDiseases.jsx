import "../css/DataDiseases.css";
import lstDiseases from "../json/lstDiseases.json";
import dataPato from "../json/dataPato.json";
import "roboto-fontface";
import { ArrowUpward, ArrowDownward, Remove } from "@material-ui/icons";
import { useTranslation } from "react-i18next";
import { DiseasesContext } from "./Context";
import { useContext } from "react";

function DataDiseases() {
  let lst = lstDiseases.disease;
  const { t, i18n } = useTranslation();
  const user = useContext(DiseasesContext);
  var result = [];
  var resultLastYear = [];
  var resultThisYear = [];

  for (var i in dataPato) {
    result.push([i, dataPato[i]]);
  }

  let lastYear = parseInt(result[result.length - 1][0].slice(0, 4)) - 1;
  let thisYear = parseInt(result[result.length - 1][0].slice(0, 4));
  let thisWeek = result[result.length - 1][0].substr(-2);
  let lastWeek = result[result.length - 2][0].substr(-2);
  result.map((e) => {
    e[0].slice(0, 4) === thisYear + ""
      ? resultThisYear.push(e)
      : resultLastYear.push(e);
  });
  let resultLastYearThisWeek = resultLastYear[thisWeek - 1];
  let resultThisYearLastWeek = resultThisYear[lastWeek - 1];
  let resultThisYearThisWeek = resultThisYear[thisWeek - 1];

  return (
    <div className="DataDiseases">
      {/* <p>{user.User.name}</p> */}
      <button
        onClick={() => {
          i18n.language === "en"
            ? i18n.changeLanguage("vi")
            : i18n.changeLanguage("en");
        }}
      >
        {i18n.language === "en" ? "Vietnamese" : "Tiếng Anh"}
      </button>
      <table className="tableDisease">
        <caption className="tittleOfTable">{t("DiseaseData")}</caption>
        <thead>
          <tr>
            <th className="headerTable disease" rowSpan="2">
              {t("Disease")}
            </th>
            <th className="headerTable casesHeader1" colSpan="5">
              {t("Cases")}
            </th>
            <th className="headerTable deathsHeader1" colSpan="5">
              {t("Deaths")}
            </th>
          </tr>

          <tr>
            <th className="headerTable casesHeader2">
              {t("Week") + " " + thisWeek}
            </th>
            <th className="headerTable casesHeader2">
              {t("Week") + " " + lastWeek}
            </th>
            <th className="headerTable casesHeaderStatus">{t("Status")}</th>
            <th className="headerTable casesHeader2">
              {thisYear + " " + t("Week") + " " + thisWeek}
            </th>
            <th className="headerTable casesHeader2">
              {lastYear + " " + t("Week") + " " + thisWeek}
            </th>
            <th className="headerTable deathsHeader2">
              {t("Week") + " " + thisWeek}
            </th>
            <th className="headerTable deathsHeader2">
              {t("Week") + " " + lastWeek}
            </th>
            <th className="headerTable deathsHeaderStatus">{t("Status")}</th>
            <th className="headerTable deathsHeader2">
              {thisYear + " " + t("Week") + " " + thisWeek}
            </th>
            <th className="headerTable deathsHeader2">
              {lastYear + " " + t("Week") + " " + thisWeek}
            </th>
          </tr>
        </thead>
        <tbody>
          {lst.map((e, i) => {
            let casesThisWeek = resultThisYearThisWeek[1][e.code].cases;
            let casesLastWeek = resultThisYearLastWeek[1][e.code].cases;
            let deathsThisWeek = resultThisYearThisWeek[1][e.code].deaths;
            let deathsLastWeek = resultThisYearLastWeek[1][e.code].deaths;

            let casesLastYearThisWeek =
              resultLastYearThisWeek[1][e.code].cummulativeCases;
            let casesThisYearThisWeek =
              resultThisYearThisWeek[1][e.code].cummulativeCases;
            let deathsLastYearThisWeek =
              resultLastYearThisWeek[1][e.code].cummulativeDeaths;
            let deathsThisYearThisWeek =
              resultThisYearThisWeek[1][e.code].cummulativeDeaths;
            return (
              <tr key={i}>
                <td className="contentTable diseaseName">
                  {i18n.language === "vi" ? e.vi : e.en}
                </td>

                {/* Cases */}
                <td className="contentTable casesContent">{casesThisWeek}</td>
                <td className="contentTable casesContent">{casesLastWeek}</td>
                {casesThisWeek > casesLastWeek ? (
                  <td className="contentTable upIcon">
                    <ArrowUpward></ArrowUpward>
                  </td>
                ) : casesThisWeek < casesLastWeek ? (
                  <td className="contentTable downIcon">
                    <ArrowDownward></ArrowDownward>
                  </td>
                ) : (
                  <td className="contentTable nothingIcon">
                    <Remove></Remove>
                  </td>
                )}
                <td className="contentTable casesContent">
                  {casesThisYearThisWeek}
                </td>
                <td className="contentTable casesContent">
                  {casesLastYearThisWeek}
                </td>

                {/* Deaths */}
                <td className="contentTable deathsContent">{deathsThisWeek}</td>
                <td className="contentTable deathsContent">{deathsLastWeek}</td>
                {deathsThisWeek > deathsLastWeek ? (
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
                <td className="contentTable deathsContent">
                  {deathsThisYearThisWeek}
                </td>
                <td className="contentTable deathsContent">
                  {deathsLastYearThisWeek}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DataDiseases;
