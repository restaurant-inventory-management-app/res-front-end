import Button from "../Button/Button";
import "./card.css";

export default function Card() {
  return (
      <div className="card-com pl-5" >
        <div className="card-body">
          <div className="card-add my-2" >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 73 72"
              fill="none"
            >
              <path
                d="M57.5 38.9941H39.5V56.9941H33.5V38.9941H15.5V32.9941H33.5V14.9941H39.5V32.9941H57.5V38.9941Z"
                fill="#1E1E1E"
              />
            </svg>
          </div>
          <h5 className="card-title mb-4 ">ingredients</h5>
          <div className="d-inline-flex gap-3">
            <Button title={"Add"} color={"white"} icon={'add'}/>
            <Button title={"Delete"} color={"black"} />
          </div>
        </div>
      </div>
  );
}
