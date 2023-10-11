import { useSelector } from "react-redux";

const Username = () => {
  const username = useSelector((state) => state.user.username);
  return <div className="uppercase hidden md:block">{username}</div>;
};

export default Username;
