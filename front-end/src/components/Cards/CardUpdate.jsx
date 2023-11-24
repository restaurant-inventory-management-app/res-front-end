import { useState } from "react";
import Button from "../Button/Button";
import "./card.css";
import axios from "axios";
import config from "../../../config.json";
import {useNavigate, useParams} from 'react-router-dom'


export default function CardUpdate({ data, branchId }) {
  const [buttonHidden, setButtonHidden] = useState(false);
  const [quantity, setQuantity] = useState(null); // Initial quantity value
  const [method, setMethod] = useState(null);
  const handleAddButtonClick = () => {
    setButtonHidden(true);
    setMethod("request");
  };

  const handleUpdateClick = () => {
    setButtonHidden(true);
    setMethod("update");
  };

  const handleBackButtonClick = () => {
    setButtonHidden(false);
    setMethod("");
  };

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10) || 1); 
  };

  const handleSubmit = () => {
    var apiUrl;
    var requestData;

    if (method === "request") {
      apiUrl = `${config.API_URL}/api/v1/branch/${branchId}/item/${data.item_id}/request_from_main`;
      requestData = { change_amount: quantity };
    }

    if (method === "update") {
      apiUrl = `${config.API_URL}/api/v1/branch/${branchId}/item/${data.item_id}/update_amount`;
      requestData = { new_amount: quantity };
    }

    axios
      .put(apiUrl, requestData)
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
        <div className="card-img my-2 mb-4">
          <img src={data.image} alt={data.item_name} />
        </div>
        <div className="mb-4 flex-column" style={{ gap: "26px" }}>
          <h5 className="card-title text-center ">{data.item_name}</h5>
          <br />
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
            <>
              <Button
                title={"Request"}
                color={"black"}
                fnc={handleAddButtonClick}
              />
              <Button
                title={"Update"}
                color={"white"}
                fnc={handleUpdateClick}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
