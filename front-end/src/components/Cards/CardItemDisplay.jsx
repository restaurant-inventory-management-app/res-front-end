import "./card.css";

export default function CardItemDisplay({ data }) {
  return (
    <div className="card-com pl-5">
      <div className="card-body">
        <div className="card-img my-2 mb-4">
          <img src={data.image} alt={data.item_name} />
        </div>
        <div className="mb-4 flex-column" style={{ gap: "26px" }}>
          <h5 className="card-title text-center ">{data.item_name}</h5>
          <br></br>
          <h6 className="card-text text-center fw-normal">
            {data.amount} {data.unit}
          </h6>
          
        </div>
      </div>
    </div>
  );
}
