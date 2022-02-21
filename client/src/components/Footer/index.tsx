import * as React from 'react';

import logo from "../../images/logo.png";
import {useTranslation} from "react-i18next";

interface FooterProps {

}

const Footer: React.FC<FooterProps> = ({}) => {
  const {t} = useTranslation("translation", {useSuspense: false});

  const footerItems = [t("market"), t("exchange"), t("tutorials"), t("wallets")];

  return (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
      <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
        <div className="flex flex-[0.5] justify-center items-center">
          <img src={logo} alt="krypto logo" className="w-32"/>
        </div>

        <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
          {footerItems.map((item) => (
            <p className="text-white text-base text-center mx-2 cursor-pointer" key={item}>{item}</p>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center flex-col mt-5">
        <p className="text-white text-sm text-center">{t("join-us")}</p>
        <a href="https://github.com/HelLuv" target="_blank" rel="noreferrer"
           className="text-white text-sm text-center font-medium mt-2">
          GitHub.com/HelLuv
        </a>
      </div>

      <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5"/>

      <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
        <p className="text-white text-left text-xs">© Nick Miriad</p>
        <p className="text-white text-right text-xs">IDGAF about rights®</p>
      </div>
    </div>
  )
};

//

export default React.memo<FooterProps>(Footer);