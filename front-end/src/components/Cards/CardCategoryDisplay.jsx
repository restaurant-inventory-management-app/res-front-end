import "./card.css";
import { useNavigate } from "react-router-dom";


export default function CardCategoryDisplay({ data }) { 
  const navigate = useNavigate();

  const handleCategoryClick = () => {
    navigate(`/category/${data.category_id}`);
  };

  return (
      <div className="card-com pl-5" onClick={handleCategoryClick} >
        <div className="card-body category">
          <div className="card-img my-2 mb-4">
            <img src={data.image} alt={data.category_name}/>  
          </div>
          <div className="mb-4 flex-column" style={{ gap: '26px' }}>
            <h5 className="card-title text-center">{data.category_name}</h5><br></br>
            <h6 className="card-text">{data.content}</h6>
         </div>
        </div>
      </div>
  );
}