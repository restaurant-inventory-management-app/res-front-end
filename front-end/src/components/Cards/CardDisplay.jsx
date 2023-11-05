/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/prop-types */
import Button from "../Button/Button";
import "./card.css";

export default function CardDisplay({data}) { // use for display fetched data currentlt use for display mock data in fomr front-end\src\pages\MainStock\MainStock.jsx
  return (
    <div>
      <div className="card-com">
        <div className="card-body">
          <div className="card-img my-2">
            <img src={data.img} alt={data.name} />  
          </div>
          <div className="mb-4">
            <h5 className="card-title text-center">{data.name}</h5>
            <h6 className="card-text">{data.content}</h6>
          </div>
          <div className="d-inline-flex gap-3">
            <Button title={"Add"} color={"white"} icon={'add'} fnc={()=>{alert('add')}} />
            <Button title={"Edit"} color={"black"} />
          </div>
        </div>
      </div>
    </div>
  );
}
