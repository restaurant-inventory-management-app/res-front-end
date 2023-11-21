import './button.css'

function Button({ title , fnc, icon, color }) { 
  return (
    <div style={{padding: 8}}
      className={color === "white" ? "button btn-white" : "button btn-black"}
      onClick={fnc}
    >
      <span>
        {icon === "add" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19 13.498H13V19.498H11V13.498H5V11.498H11V5.49805H13V11.498H19V13.498Z"
              fill="#ffff"
            />
          </svg>
        ) : null}

        {icon === "del" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            
          >
            <path
              d="M7 21.5C6.45 21.5 5.979 21.304 5.587 20.912C5.195 20.52 4.99933 20.0493 5 19.5V6.5H4V4.5H9V3.5H15V4.5H20V6.5H19V19.5C19 20.05 18.804 20.521 18.412 20.913C18.02 21.305 17.5493 21.5007 17 21.5H7ZM17 6.5H7V19.5H17V6.5ZM9 17.5H11V8.5H9V17.5ZM13 17.5H15V8.5H13V17.5Z"
              fill="white"
            />
          </svg>
        ) : null}
      </span>

      {title}
    </div>
  );
}

export default Button;
