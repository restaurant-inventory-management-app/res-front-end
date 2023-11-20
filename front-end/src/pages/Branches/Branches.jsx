import CardCategory1 from "../../components/Cards/CardCategory1";


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


function Branches() { //suppose to display in each branches
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(Category[0]);
  }, []);

  return (
    <div>
    <h1>[Name's Branches]</h1>
    <section className="my-3 d-flex flex-wrap gap-5 justify-content-center justify-content-xl-start">
        {Category.map((category, index) => (
          <CardCategory1 key={index} data={category} />
        ))}
    </section>
    </div>
  )
}

export default Branches
