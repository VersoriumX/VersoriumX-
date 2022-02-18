import * as React from 'react';
import {SiEthereum} from "react-icons/si";
import {BsInfoCircle} from "react-icons/bs";

import {shortenAddress} from "../../../../utils/shortenAddress";
import {TransactionContext} from "../../../../context/TransactionContext";

interface CryptoCardProps {

}

const CryptoCard: React.FC<CryptoCardProps> = ({}) => {
  const {currentAccount} = React.useContext(TransactionContext);
  return (
    <div
      className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism">
      <div className="flex justify-between flex-col w-full h-full">
        <div className="flex justify-between items-start">
          <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
            <SiEthereum fontSize={21} color="#fff"/>
          </div>
          <BsInfoCircle fontSize={17} color="#fff"/>
        </div>
        <div>
          <p className="text-white font-light text-sm">
            {currentAccount ? shortenAddress(currentAccount) : "Connect your account first"}
          </p>
          <p className="text-white font-semibold text-lg mt-1">
            Ethereum
          </p>
        </div>
      </div>
    </div>
  )
};

export default React.memo<CryptoCardProps>(CryptoCard);