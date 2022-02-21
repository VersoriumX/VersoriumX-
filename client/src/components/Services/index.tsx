import * as React from 'react';
import {BsShieldFillCheck} from "react-icons/bs";
import {BiSearchAlt} from "react-icons/bi";
import {RiHeart2Fill} from "react-icons/ri";
import {useTranslation} from "react-i18next";

import ServiceCard from "./components/ServiceCard";


interface ServicesProps {

}

const Services: React.FC<ServicesProps> = ({}) => {
  const {t} = useTranslation("translation", {useSuspense: false});

  return (
    <div className="flex w-full justify-center items-center gradient-bg-services">
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
        <div className="flex-1 flex flex-col justify-start items-start">
          <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient">
            {t("services-title-1")}
            <br/>
            {t("services-title-2")}
          </h1>
          <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
            {t("services-text")}
          </p>

          <a href="#" className="text-left my-2 text-blue-600 md:w-9/12 w-11/12 text-base">{t("start-link")}</a>
        </div>
        <div className="flex-1 flex flex-col justify-start items-center">
          <ServiceCard
            color="bg-[#2952E3]"
            title={t("security-guarantee")}
            icon={<BsShieldFillCheck fontSize={21} className="text-white"/>}
            subtitle={t("service-card-subtitle")}
          />
          <ServiceCard
            color="bg-[#8945F8]"
            title={t("exchange-rates")}
            icon={<BiSearchAlt fontSize={21} className="text-white"/>}
            subtitle={t("service-card-subtitle")}
          />
          <ServiceCard
            color="bg-[#F84550]"
            title={t("fastest-transactions")}
            icon={<RiHeart2Fill fontSize={21} className="text-white"/>}
            subtitle={t("service-card-subtitle")}
          />
        </div>

      </div>
    </div>
  )
};

export default React.memo<ServicesProps>(Services);