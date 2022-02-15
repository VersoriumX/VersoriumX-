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
  const [isLoading, setIsLoading] = React.useState(false);
  const [transactionCount, setTransactionCount] = React.useState(localStorage.getItem("transactionCount"));
  const [transactions, setTransactions] = React.useState([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    setFormData((prevState) => ({...prevState, [name]: e.target.value}));
  };

  const getAllTransactions = async () => {
    try {
      if (ethereum) {
        const transactionsContract = getEthereumContract();

        const availableTransactions = await transactionsContract.getAllTransactions();

        const structuredTransactions = availableTransactions.map((transaction: any) => ({
          addressTo: transaction.receiver,
          addressFrom: transaction.sender,
          timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
          message: transaction.message,
          keyword: transaction.keyword,
          amount: parseInt(transaction.amount._hex) / (10 ** 18)
        }));

        setTransactions(structuredTransactions);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({method: "eth_accounts"});

      if (accounts?.length) {
        setCurrentAccount(accounts[0]);

        await getAllTransactions();
      } else {
        console.log("No accounts found");
      }

    } catch (error) {
      console.log({error});

      throw new Error("No ethereum object");
    }
  }

  const checkIfTransactionsExists = async () => {
    try {
      if (ethereum) {
        const transactionsContract = getEthereumContract();
        const currentTransactionCount = await transactionsContract.getTransactionCount();

        window.localStorage.setItem("transactionCount", currentTransactionCount);
      }
    } catch (error) {
      console.log(error);

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
        const transactionsContract = getEthereumContract();
        const parsedAmount = ethers.utils.parseEther(amount);

        await ethereum.request({
          method: "eth_sendTransaction",
          params: [{
            from: currentAccount,
            to: addressTo,
            gas: "0x5208",
            value: parsedAmount._hex
          }]
        })

        const transactionHash = await transactionsContract.addToBlockchain(addressTo, parsedAmount, message, keyword);

        setIsLoading(true);
        console.log(`Loading - ${transactionHash.hash}`);
        await transactionHash.wait();
        console.log(`Success - ${transactionHash.hash}`);
        setIsLoading(false);

        const transactionsCount = await transactionsContract.getTransactionCount();

        // @ts-ignore
        setTransactionCount(+transactionsCount)
      } else {
        console.log("No ethereum object");
      }
    } catch (error) {
      console.log({error});

      throw new Error("No ethereum object");
    }
  }

  React.useEffect(() => {
    checkIfWalletIsConnected().then(r => r);
    checkIfTransactionsExists().then(r => r);
  }, [transactionCount]);

  return (
    <TransactionContext.Provider
      value={{
        currentAccount,
        formData,
        isLoading,
        transactionCount,
        transactions,
        connectWallet,
        handleChange,
        sendTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
};

export default React.memo<TransactionsProviderProps>(TransactionsProvider);