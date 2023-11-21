import "./history.css";

export default function History({ data }) {
  return (
    <div className="container history" style={{ overflowWrap: "break-word" }}>
      <p className="fw-bold m-0">
        Transaction ID: <span>{data.transaction_id}</span>
      </p>
      <div className="row card card-history mx-auto" style={{ height: 170 }}>
        <div className="col-6 my-auto">
          <p className="fw-bold" style={{ textTransform: "uppercase" }}>
            Type:{" "}
            <span
              style={{
                color: data.change_type === "add" ? "green" : "red",
              }}
            >
              {data.change_type}
            </span>
          </p>
          <p className="fw-bold">
            Item name: <span>{data.item_name}</span>
          </p>
          <p className="fw-bold">
            Category: <span>{data.category_name}</span>
          </p>
        </div>
        <div className="col-6 my-auto">
          <p className="fw-bold">
            Amount changes:{" "}
            <span>
              {data.amount} {data.unit}
            </span>
          </p>
          <p className="fw-bold">
            Time stamp: <span>{data.time}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
