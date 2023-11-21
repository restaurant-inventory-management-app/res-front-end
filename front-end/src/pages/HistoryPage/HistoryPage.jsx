import React, { useState, useEffect } from "react";
import History from "../../components/History/History.jsx";
import axios from "axios";
import LoadingPage from "../LoadingPage/LoadingPage.jsx";

function HistoryPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://192.168.1.49:5000/api/v1/main_stock/transactions')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching transaction data:", error);
        setData([]); 
      })
      .finally(() => {
        setLoading(false); 
      });
  }, []);

  return (
    <div className="container-lg">
      <h1 className="text-center mb-3">History of Main Stock</h1>
      {loading ? (
        <LoadingPage />
      ) : (
        <div className="gap-2" style={{ display: 'inline-flex', flexDirection: 'column' }}>
          {data && data.length > 0 ? (
            data.map((history, index) => (
              <History key={index} data={history} />
            ))
          ) : (
            <p className="text-center">No transactions available.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default HistoryPage;
