import * as React from 'react';
import {useTranslation} from "react-i18next";

import {TransactionContext} from "../../context/TransactionContext";
import mockData from "../../utils/mockData";
import TransactionCard from "./components/TransactionCard";

interface TransactionsProps {

}

const Transactions: React.FC<TransactionsProps> = ({}) => {
  const {t} = useTranslation("translation", {useSuspense: false});

  const {transactions, currentAccount} = React.useContext(TransactionContext);
  return (
    <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
      <div className="flex flex-col md:p-12 py-12 px-4">
        <h3 className="text-white text-3xl text-center my-2">
          {currentAccount ? t("latest-transactions") : t("connect-to-see-latest-transactions")}
        </h3>

        <div className="flex flex-wrap justify-center items-center mt-10">
          {[...mockData, ...transactions].reverse().map((transaction, index) => (
            <TransactionCard key={index} {...transaction}/>
          ))}
        </div>

      </div>
    </div>
  )
};

export default React.memo<TransactionsProps>(Transactions);