import * as React from 'react';
import {useTranslation} from "react-i18next";

import {shortenAddress} from "../../../../utils/shortenAddress";
import useFetch from "../../../../hooks/useFetch";

interface TransactionCardProps {
  addressTo: string;
  addressFrom: string;
  timestamp: string;
  message: string;
  keyword: string;
  amount: string;
  url: string;
}

const TransactionCard: React.FC<TransactionCardProps> = ({
                                                           addressTo,
                                                           addressFrom,
                                                           timestamp,
                                                           message,
                                                           keyword,
                                                           url,
                                                           amount
                                                         }) => {
  const {t} = useTranslation("translation", {useSuspense: false});

  const gifUrl = useFetch({keyword});
  return (
    <div
      className="bg-[#181918] m-4 flex
        flex-1 2xl:min-w-[450px]
        2xl:max-w-[500px]
        sm:min-w-[270px]
        sm:max-w-[300px]
        min-w-full
        flex-col p-3 rounded-md hover:shadow-2xl"
    >
      <div className="flex flex-col items-center w-full mt-3">
        <div className="flex justify-between w-full mb-6 p-2 flex-wrap">
          <a href={`https://ropsten.etherscan.io/address/${addressFrom}`} target="_blank" rel="noreferrer">
            <p className="text-white text-base">{t("from")}: {shortenAddress(addressFrom)}</p>
          </a>
          <a href={`https://ropsten.etherscan.io/address/${addressTo}`} target="_blank" rel="noreferrer">
            <p className="text-white text-base">{t("to")}: {shortenAddress(addressTo)}</p>
          </a>

          <p className="text-white text-base">{t("amount-eth")}: {amount}</p>

          {message && (
            <>
              <br/>
              <p className="text-white text-base">{t("message")}: {message}</p>
            </>
          )}
        </div>

        <img
          src={gifUrl || url}
          alt={message || "nature"}
          className="w-full h-64 2xl:h-96 rounded-md shadow-lg object-cover"
        />

        <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
          <p className="text-[#37c7da] font-bold">{timestamp}</p>
        </div>
      </div>
    </div>
  )
};

export default React.memo<TransactionCardProps>(TransactionCard);