import * as React from 'react';

interface TransactionsProps {

}

const Transactions: React.FC<TransactionsProps> = ({}) => {

  return (
    <h1>Transactions</h1>
  )
};

export default React.memo<TransactionsProps>(Transactions);