import * as React from 'react';
import {useTranslation} from "react-i18next";

const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";


interface GridTableProps {

}

const GridTable: React.FC<GridTableProps> = ({}) => {
  const {t} = useTranslation("translation", {useSuspense: false});

  return (
    <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
      <div className={`rounded-tl-2xl ${commonStyles}`}>{t("table-reliability")}</div>
      <div className={`${commonStyles}`}>{t("table-security")}</div>
      <div className={`sm:rounded-tr-2xl ${commonStyles}`}>{t("ethereum")}</div>
      <div className={`sm:rounded-bl-2xl ${commonStyles}`}>Web 3.0</div>
      <div className={`${commonStyles}`}>{t("table-low-fees")} </div>
      <div className={`rounded-br-2xl ${commonStyles}`}>{t("table-blockchain")}</div>
    </div>
  )
};

export default React.memo<GridTableProps>(GridTable);