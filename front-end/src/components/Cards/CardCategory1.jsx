import "./card.css";
import Produce from "../../components/images/Produce.png";
import Meat_Seafood from "../../components/images/MeatSeafood.png";
import Dairy from "../../components/images/Dairy.png";
import Gain_Bakery from "../../components/images/GainBakery.png";
import Canned_Preserved from "../../components/images/CannedPreserved.png";
import Spices_Condiments from "../../components/images/SpicesCondiments.png";

export default function CardCategory1({data}) { 
  return (
    <div>
      <div className="card-com">
        <div className="card-body">
          <div className="card-img my-2">
            <img src={data.img} alt={data.name} />  
          </div>
          <div className="mb-4 flex-column" style={{ gap: '26px' }}>
            <h5 className="card-title text-center">{data.name}</h5><br></br>
            <h6 className="card-text">{data.content}</h6>
         </div>
        </div>
      </div>
    </div>
  );
}