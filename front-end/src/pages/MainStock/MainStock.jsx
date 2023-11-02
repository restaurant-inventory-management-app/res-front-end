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

      <section className="mt-5 d-flex container-fluid flex-wrap gap-5">
        {data ? (
          <>
            <CardCategory />
            <CardDisplay data={data} />
            <Card />
            <Card />
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
