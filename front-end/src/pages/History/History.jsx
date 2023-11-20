import React, { useState,useEffect } from "react";
import HistoryComponent from "../../components/history/history.jsx";

const mockTransaction = {
  amount_after_change: 20,
  amount_before_change: 20,
  category:"Dairy",
  change_id: 73626,
  item_id: 4,
  time: "2023-11-20T09:00:40"
};


const mock_history = [
  {
    amount_after_change: 20,
    category:"Dairy, Produce",
    amount_before_change: 20,
    change_id: 6,
    item_id: 4,
    time: "2023-11-20T09:00:40"
    
  },
  {
    amount_after_change: 20,
    category:"Spices&Condiments",
    amount_before_change: 20,
    change_id: 5,
    item_id: 4,
    time: "2023-11-20T09:00:40"
  },
  {
    amount_after_change: 20,
    category:"Canned/Preserved,pices&Condiments",
    amount_before_change: 30,
    change_id: 4,
    item_id: 4,
    time: "2023-11-20T09:00:40"
  },
];


function History() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(mock_history[0]);
  }, []);

  return (
    <div>
      <h1 className="text-center">History</h1>
      <div className="gap-5" style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', gap: '38px' }}>
      {mock_history.map((history, index) => (
      <HistoryComponent key={index} data={history} />
      ))}
      </div>
    </div>
  );
}

export default History;

