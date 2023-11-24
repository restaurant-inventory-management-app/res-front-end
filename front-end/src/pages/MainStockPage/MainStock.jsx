import { useEffect, useState } from "react";
import CardCategory1 from "../../components/Cards/CardCategoryDisplay";

import axios from "axios";
import LoadingPage from "../LoadingPage/LoadingPage";
import config from '../../../config.json'


function MainStock() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const url = `${config.API_URL}/api/v1/category`;
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      {data ? (
        <div className="container-xl">
          <h1 className="text-center"> Main Stock </h1>
          <section className="my-3 d-flex flex-wrap gap-5 justify-content-center justify-content-xl-start">
            <section className="my-3 d-flex flex-wrap gap-5 justify-content-center justify-content-xl-start">
              {data.map((category, index) => (
                <CardCategory1 key={index} data={category} path={`/category/${category.category_id}`} />
              ))}
            </section>
          </section>
        </div>
      ) : (
        <LoadingPage />
      )}
    </>
  );
}

export default MainStock;
