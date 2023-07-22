import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguaeDetector from "i18next-browser-languagedetector";

import langEn from "./lang.en.json";
import langKo from "./lang.ko.json";

i18n
    .use(LanguaeDetector) // 사용자 언어 탐지
    .use(initReactI18next) // i18n 객체를 react-18next에 전달
    .init({
        // for all options read: https://www.i18next.com/overview/configuration-options
        debug: false,
        fallbackLng: "ko",
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: langEn,
            ko: langKo,
        },
    }).then(r => {});

export default i18n;