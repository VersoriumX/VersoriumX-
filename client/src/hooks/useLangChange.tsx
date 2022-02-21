import * as React from "react";
import i18n from "i18next";

const APIKEY = import.meta.env.VITE_GIPHY_API;

interface useLangChangeProps {
  code: string;
}

const useLangChange: (keyword: useLangChangeProps) => void = ({code}) => {

  const langChange = async (code: string) => {
    await i18n.changeLanguage(code ?? "ru")
  }

  React.useEffect(() => {
    if (code) langChange(code).then(r => r);
  }, [code]);
}

export default useLangChange;