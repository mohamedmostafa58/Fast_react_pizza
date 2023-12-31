import { useSelector } from "react-redux";
import CreateUser from "../user/CreateUser";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="py-6 text-center  text-xl md:text-2xl font-semibold   text-stone-700 capitalize bg-stone-200 sm:py-12 md:py-15 h-full">
      <h1 className=" my-4">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === "" ? (
        <CreateUser />
      ) : (
        <div className="mt-20">
          <Button to="/menu" type="primary">
            continue ordering, {username}
          </Button>
        </div>
      )}
    </div>
  );
}

export default Home;
