import * as React from 'react';
import {useTranslation} from "react-i18next";

import {ConnectWallet, CryptoCard, GridTable, SendForm} from "./components";

interface WelcomeProps {

}

const Welcome: React.FC<WelcomeProps> = ({}) => {
  const {t} = useTranslation("translation", {useSuspense: false});

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">

          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            {t('welcome-title-1')} <br/>{t('welcome-title-2')}
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            {t('welcome-text')}
          </p>
          <ConnectWallet/>
          <GridTable/>
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <CryptoCard/>
          <SendForm/>
        </div>

      </div>
    </div>
  )
};

export default React.memo<WelcomeProps>(Welcome);