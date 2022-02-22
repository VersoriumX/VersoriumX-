import * as React from 'react';
import {AiFillPlayCircle} from "react-icons/ai";
import {motion} from "framer-motion";
import {useTranslation} from "react-i18next";

import {TransactionContext} from "../../../../context/TransactionContext";
import {scaleAnimation} from "../../../../utils/animations";

interface ConnectWalletProps {

}

const ConnectWallet: React.FC<ConnectWalletProps> = ({}) => {
  const {t} = useTranslation("translation", {useSuspense: false});
  const {connectWallet, currentAccount} = React.useContext(TransactionContext);

  if (currentAccount) return <></>;

  return (
    <>
      <motion.button initial="initial" whileHover="hover" whileTap="tap" type="button" onClick={() => connectWallet()}
                     className="flex flex-row justify-center items-center my-5 bg-[#2952e3] hover:bg-[#2546bd] transition-all p-3 rounded-full cursor-pointer"
      >
        <motion.span variants={scaleAnimation}>
          <AiFillPlayCircle fontSize={28} className="text-white mr-2"/>
        </motion.span>
        <motion.p className="text-white text-base font-semibold">
          {t("connect-wallet")}
        </motion.p>
      </motion.button>
    </>
  )
};

export default React.memo<ConnectWalletProps>(ConnectWallet);