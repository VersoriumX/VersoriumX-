import * as React from 'react';
import {AiFillPlayCircle} from "react-icons/ai";

import {TransactionContext} from "../../../../context/TransactionContext";
import {useTranslation} from "react-i18next";

interface ConnectWalletProps {

}

const ConnectWallet: React.FC<ConnectWalletProps> = ({}) => {
  const {t} = useTranslation("translation", {useSuspense: false});
  const {connectWallet, currentAccount} = React.useContext(TransactionContext);

  if (currentAccount) return <></>;

  return (
    <>
      <button type="button" onClick={() => connectWallet()}
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] hover:bg-[#2546bd] transition-all p-3 rounded-full cursor-pointer"
      >
        <AiFillPlayCircle fontSize={28} className="text-white mr-2"/>
        <p className="text-white text-base font-semibold">
          {t("connect-wallet")}
        </p>
      </button>
    </>
  )
};

export default React.memo<ConnectWalletProps>(ConnectWallet);