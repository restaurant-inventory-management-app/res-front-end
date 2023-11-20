import "./history.css";

export default function History({data}) { 
    return (
        <div className="his1">
            <div className="histext">
                <h5>Transaction ID:  {data.change_id}</h5>
                <div className="histext2">
                    <h5>Item name:  {data.item_id}</h5>
                    <h5>Category:  {data.category}</h5>
                </div>
                <div className="histex3">
                    <h5>Amount changes:  {data.amount_after_change}</h5>
                    <h5>Time stamp:  {data.time}</h5>
                </div>
            </div>
        </div>
    );
  }