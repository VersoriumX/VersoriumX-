import * as React from 'react';

import {Input} from "../index";
import {Loader} from "../../../index";
import {TransactionContext} from "../../../../context/TransactionContext";

interface SendFormProps {

}

const SendForm: React.FC<SendFormProps> = ({}) => {

  const {
    currentAccount,
    connectWallet,
    handleChange,
    sendTransaction,
    formData,
    isLoading
  } = React.useContext(TransactionContext);


  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    const {addressTo, amount, keyword, message} = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  }

  return (
    <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
      <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange}/>
      <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange}/>
      <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange}/>
      <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange}/>

      <div className="h-[1px] w-full bg-gray-400 my-2"/>

      {isLoading
        ? <Loader/>
        : (
          <button
            type="button"
            onClick={handleSubmit}
            className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
          >
            Send now
          </button>
        )}
    </div>
  )
};

export default React.memo<SendFormProps>(SendForm);