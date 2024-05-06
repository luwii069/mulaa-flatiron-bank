import React, { useState } from "react";

function AddTransactionForm(props) {
  const { transactions, setTransactions, getTransactions } = props;
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  function submit2() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      date,
      description,
      category,
      amount,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:3000/transactions", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const newArr = [...transactions, result];
        setTransactions(newArr);
        setDate("");
        setDescription("");
        setCategory("");
        setAmount("");
        getTransactions();
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className="ui segment">
      <div className="ui form">
        <div className="inline fields">
          <input
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="ui button" type="submit" onClick={submit2}>
          Add Transaction
        </button>
      </div>
    </div>
  );
}

export default AddTransactionForm;
