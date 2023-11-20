import React, { useEffect, useState } from "react";
import Card from "../../components/Cards/Card";
import CardDisplay from "../../components/Cards/CardDisplay";
import CardCategory1 from "../../components/Cards/CardCategory1";
import produceImage from "../../components/images/Produce.png";
import MSImage from "../../components/images/MeatSeafood.png";
import DairyImage from "../../components/images/Dairy.png";
import GBImage from "../../components/images/GainBakery.png";
import CPImage from "../../components/images/CannedPreserved.png";
import SCImage from "../../components/images/SpicesCondiments.png";

const Category = [
  {
    name: "Produce",
    img: "Produce.png",
    content: "Fruits, Vegetables, Herbs",
  },
  {
    name: "Meat_Seafood",
    img: "MeatSeafood.png",
    content: "Beef, Poultry, Fish, Shellfish",
  },
  {
    name: "Dairy",
    img: "Dairy.png",
    content: "Milk, Cheese, Butter",
  },
  {
    name: "Gain_Bakery",
    img: "GainBakery.png",
    content: "Flour, Bread, Pasta",
  },
  {
    name: "Canned_Preserved",
    img: "CannedPreserved.png",
    content: "Canned vegetables",
  },
  {
    name: "Spices_Condiments",
    img: "SpicesCondiments.png",
    content: "Salt, Pepper, Sauces, Oil",
  },
];

function MainStock() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(Category[0]);
  }, []);

  return (
    <div className="container-xl">
      <h1 className="text-center">Main Stock</h1>

      <section className="my-3 d-flex flex-wrap gap-5 justify-content-center justify-content-xl-start">
        {Category.map((category, index) => (
          <CardCategory1 key={index} data={category} />
        ))}
        
      </section>
    </div>
  );
}

export default MainStock;

