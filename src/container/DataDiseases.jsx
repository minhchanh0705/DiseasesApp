import "../css/DataDiseases.css";
import lstDiseases from "../json/lstDiseases.json";
import "roboto-fontface";
import { ArrowUpward, ArrowDownward, Remove } from "@material-ui/icons";
import { useTranslation } from "react-i18next";
import { DiseasesContext } from "./Context";
import { useContext } from "react";

function DataDiseases() {
  let lst = lstDiseases.disease;
  const { t, i18n } = useTranslation();
  const user = useContext(DiseasesContext);
  return (
    <div className="DataDiseases">
      <p>{user.User.name}</p>
      <button
        onClick={() => {
          i18n.language === "en" && i18n.changeLanguage("vi");
        }}
      >
        VI
      </button>
      <button
        onClick={() => {
          i18n.language === "vi" && i18n.changeLanguage("en");
        }}
      >
        EN
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
            <th className="headerTable casesHeader2">{t("Week")} 27</th>
            <th className="headerTable casesHeader2">{t("Week")} 26</th>
            <th className="headerTable casesHeader2">{t("Status")}</th>
            <th className="headerTable casesHeader2">2017 {t("Week")} 27</th>
            <th className="headerTable casesHeader2">2018 {t("Week")} 27</th>
            <th className="headerTable deathsHeader2">{t("Week")} 27</th>
            <th className="headerTable deathsHeader2">{t("Week")} 26</th>
            <th className="headerTable deathsHeader2">{t("Status")}</th>
            <th className="headerTable deathsHeader2">2017 {t("Week")} 27</th>
            <th className="headerTable deathsHeader2">2018 {t("Week")} 27</th>
          </tr>
        </thead>
        <tbody>
          {lst.map((e, i) => {
            let casesW27 = Math.floor(Math.random() * 2000);
            let casesW26 = Math.floor(Math.random() * 2000);
            let deathsW27 = Math.floor(Math.random() * 2000);
            let deathsW26 = Math.floor(Math.random() * 2000);

            let cases2017W27 = Math.floor(Math.random() * 2000) * 27;
            let cases2018W27 = Math.floor(Math.random() * 2000) * 27;
            let deaths2017W27 = Math.floor(Math.random() * 2000) * 27;
            let deaths2018W27 = Math.floor(Math.random() * 2000) * 27;
            return (
              <tr key={i}>
                <td className="contentTable diseaseName">
                  {i18n.language === "vi" ? e.vi : e.en}
                </td>
                {/* <td className="contentTable casesContent">{e.CasesW27}</td>
                <td className="contentTable casesContent">{e.CasesW26}</td> */}

                {/* Cases */}
                <td className="contentTable casesContent">{casesW27}</td>
                <td className="contentTable casesContent">{casesW26}</td>

                {casesW27 > casesW26 ? (
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

                <td className="contentTable casesContent">{cases2017W27}</td>
                <td className="contentTable casesContent">{cases2018W27}</td>

                {/* Deaths */}
                <td className="contentTable deathsContent">{deathsW27}</td>
                <td className="contentTable deathsContent">{deathsW26}</td>
                {deathsW27 > deathsW26 ? (
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
                <td className="contentTable deathsContent">{deaths2017W27}</td>
                <td className="contentTable deathsContent">{deaths2018W27}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DataDiseases;
