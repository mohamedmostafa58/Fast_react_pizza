import { useDispatch } from "react-redux";
import Button from "../ui/Button";
import { deleteItem } from "./cartSlice";

const DeleteItem = ({ id }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deleteItem(id));
  };
  return (
    <Button type="small" onClick={handleClick}>
      delete
    </Button>
  );
};

export default DeleteItem;
