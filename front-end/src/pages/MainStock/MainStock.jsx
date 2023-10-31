/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Card from "../../components/Cards/Card";
import CardDisplay from "../../components/Cards/CardDisplay";

const mock = {
  name: "Carrot",
  unit: "kg",
  quantity: "20",
  img: "",
  content: "Fruits, Vegetables,Herbs",
};

function MainStock() {
  const [data, setData] = useState(mock);

  useEffect(() => {
    console.log(data);
  });

  return (
    <div className="container">
      <h1 className="text-center">Main Stock</h1>

      <section className="mt-5 ms-3 row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 " >
        {data ? (
          <>
          <CardDisplay  data={data} />
          <CardDisplay  data={data} />
          <CardDisplay  data={data} />
          <CardDisplay  data={data} />
          <CardDisplay  data={data} />
          <CardDisplay  data={data} />
          </>
        ) : (
          <Card />
        )}
      </section>
    </div>
  );
}

export default MainStock;
