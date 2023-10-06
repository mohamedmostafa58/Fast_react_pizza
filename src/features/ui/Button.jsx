import { Link } from "react-router-dom";
const base =
  " bg-yellow-400 rounded-2xl hover:bg-yellow-300 disabled:cursor-not-allowed";
const Button = ({ children, disabled, to, type }) => {
  let classname;
  if (type === "primary") {
    classname = base + " " + "py-3 px-2";
  } else {
    classname = base + " " + "py-2 px-2";
  }
  if (to) {
    return (
      <Link to={to} className={classname}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classname} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
