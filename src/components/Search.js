import React, { useState } from "react";

function Search(props) {
  const { transactions, setTransactions, getTransactions } = props;
  const [search, setSearch] = useState("");

  const doSearch = (e) => {
    let s = e.target.value.toLowerCase();
    setSearch(s);
    if (s.length < 4) {
      getTransactions(transactions);
      return;
    }
    let filteredTransactions = transactions.filter((trans) => {
      if (!trans.description || !trans.category) return false; // Check if description or category is undefined
      let description = trans.description.toLowerCase();
      let category = trans.category.toLowerCase();
      return description.includes(s) || category.includes(s);
    });
    setTransactions(filteredTransactions);
  };

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={doSearch}
        value={search}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
