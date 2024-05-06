import React, { useState, useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);
  const getTransactions = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3000/transactions", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setTransactions(result);
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <div>
      <Search
        transactions={transactions}
        setTransactions={setTransactions}
        getTransactions={getTransactions}
      />
      <AddTransactionForm
        transactions={transactions}
        setTransactions={setTransactions}
        getTransaction={getTransactions}
      />
      <TransactionsList transactions={transactions} />
    </div>
  );
}

export default AccountContainer;
