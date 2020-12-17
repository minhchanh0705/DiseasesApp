import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import DataDiseases from "./container/DataDiseases";
import Covid from "./container/Covid";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import vi from "./translations/vi.json";
import en from "./translations/en.json";
import DiseasesProvider from "./container/provider/DiseasesProvider";
i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: "vi", // language to use
  resources: {
    en: {
      translation: en,
    },
    vi: {
      translation: vi,
    },
  },
});
ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <DiseasesProvider>
        {/* <DataDiseases /> */}
        <Covid />
      </DiseasesProvider>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
