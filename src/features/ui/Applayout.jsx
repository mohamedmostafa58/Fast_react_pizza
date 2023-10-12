import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import CartOverview from "../cart/CartOverview";
import Loader from "./Loader";

const Applayout = () => {
  const navigation = useNavigation();
  const isloading = navigation.state === "loading";
  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen relative mb-8">
      {isloading && <Loader />}
      <Header />
      <main>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
};

export default Applayout;
