import { Link } from "react-router-dom";
const base =
  " bg-yellow-400 rounded-2xl hover:bg-yellow-300 disabled:cursor-not-allowed";
const Button = ({ children, disabled, to, type, onClick }) => {
  let classname;
  if (type === "primary") {
    classname = base + " " + "py-3 px-2";
  } else if (type === "small") {
    classname = base + " " + "py-2 px-2";
  } else if (type === "update") {
    classname = "rounded-full p-2 bg-yellow-400 hover:bg-yellow-300";
  }
  if (to) {
    return (
      <Link to={to} className={classname}>
        {children}
      </Link>
    );
  }
  if (onClick) {
    return (
      <button className={classname} disabled={disabled} onClick={onClick}>
        {children}
      </button>
    );
  }
  return (
    <button className={classname} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
