import "./card.css";
import Button from "../Button/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import config from "../../../config.json";
import {useNavigate} from 'react-router-dom'


export default function CardItemDisplay({ data, categoryId }) {
  const [buttonHidden, setButtonHidden] = useState(false);
  const [quantity, setQuantity] = useState(null);


  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10) || 1);
  };

  const handleBackButtonClick = () => {
    setButtonHidden(false);
  };

  const handleAddBtn = () => {
    setButtonHidden(true);
  };



  const handleSubmit = () => {
    axios
      .put(
        `${config.API_URL}/api/v1/main_stock/${data.item_id}/add_amount`,
        { add_amount: quantity }
      )
      .then((response) => {
        console.log("API Response:", response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  };

  return (
    <div className="card-com pl-5">
      <div className="card-body">
        <div className="card-img my-2 mb-3">
          <img src={data.image} alt={data.item_name} />
        </div>
        <div className="mb-4 flex-column" style={{ gap: "26px" }}>
          <h5 className="card-title text-center ">{data.item_name}</h5>
          <br></br>
          <h6 className="card-text text-center fw-normal">
            {data.amount} {data.unit}
          </h6>
        </div>

        <div className="d-inline-flex gap-1 ">
          {buttonHidden && (
            <Button
              title={"Back"}
              color={"white"}
              fnc={handleBackButtonClick}
            />
          )}
          {buttonHidden ? (
            <>
              <input
                style={{ maxWidth: 50, textAlign: "center" }}
                method="number"
                placeholder="Enter quantity"
                value={quantity}
                onChange={handleQuantityChange}
              />
              <Button title={"Submit"} color={"black"} fnc={handleSubmit} />
            </>
          ) : (
            <Button
              title={"Add"}
              color={"black"}
              icon={"add"}
              fnc={handleAddBtn}
            />
          )}
        </div>
      </div>
    </div>
  );
}
