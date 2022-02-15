import * as React from 'react';
import {ethers} from "ethers";

import {contractABI, contractAddress} from "../utils/constants";

export const TransactionContext = React.createContext<any>(null);

const {ethereum} = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();

  return new ethers.Contract(contractAddress, contractABI, signer);
}


interface TransactionsProviderProps {

}

const TransactionsProvider: React.FC<TransactionsProviderProps> = ({children}) => {
  const [formData, setFormData] = React.useState({addressTo: "", amount: "", keyword: "", message: ""});
  const [currentAccount, setCurrentAccount] = React.useState("");

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({method: "eth_accounts"});

      if (accounts?.length) {
        setCurrentAccount(accounts[0])
      } else {
        console.log("No accounts found");
      }

    } catch (error) {
      console.log({error});

      throw new Error("No ethereum object");
    }
  }

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({method: "eth_requestAccounts"});
      if (accounts?.length) {
        setCurrentAccount(accounts[0])
      } else {
        console.log("No accounts found");
      }

    } catch (error) {
      console.log({error});

      throw new Error("No ethereum object");
    }
  }

  const sendTransaction = async () => {
    try {
      if (ethereum) {
        const {addressTo, amount, keyword, message} = formData;


      }
    } catch (error) {
      console.log({error});

      throw new Error("No ethereum object");
    }
  }

  React.useEffect(() => {
    checkIfWalletIsConnected().then(r => r);
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        currentAccount
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
};

export default React.memo<TransactionsProviderProps>(TransactionsProvider);