import { useEffect, useState } from "react";
import CardCategory1 from "../../components/Cards/CardCategoryDisplay";

import axios from "axios";

function MainStock() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const url = "http://192.168.1.49:5000/api/v1/category";
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container-xl">
      <h1 className="text-center"> Main Stock </h1>

      <section className="my-3 d-flex flex-wrap gap-5 justify-content-center justify-content-xl-start">
        {data ? (
          <section className="my-3 d-flex flex-wrap gap-5 justify-content-center justify-content-xl-start">
            {data.map((category, index) => (
              <CardCategory1 key={index} data={category} />
            ))}
          </section>
        ) : (
          <p>Loading...</p>
        )}
      </section>
    </div>
  );
}

export default MainStock;
