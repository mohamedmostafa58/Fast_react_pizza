import { useDispatch } from "react-redux";
import Button from "../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

const UpdateItemQuantity = ({ quantity, id }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-2 mb-2 justify-center items-baseline sm:mb-0">
      <Button
        type="update"
        onClick={() => {
          dispatch(increaseItemQuantity(id));
        }}
      >
        +
      </Button>
      {quantity}
      <Button
        type="update"
        onClick={() => {
          dispatch(decreaseItemQuantity(id));
        }}
      >
        -
      </Button>
    </div>
  );
};

export default UpdateItemQuantity;
