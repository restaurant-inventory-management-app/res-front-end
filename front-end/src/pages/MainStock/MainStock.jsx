/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Card from "../../components/Cards/Card";
import CardDisplay from "../../components/Cards/CardDisplay";
import CardCategory from "../../components/Cards/CardCategory";

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
    <div className="container-xl">
      <h1 className="text-center">Main Stock</h1>

      <section className="my-3 d-flex flex-wrap gap-5 justify-content-center justify-content-xl-start">
        {data ? (
          <>
            <CardCategory />
            <CardDisplay data={data} />
            <Card />
            <Card />
            <Card />
            <Card />
          
          </>
        ) : (
          <Card />
        )}
      </section>
    </div>
  );
}

export default MainStock;
