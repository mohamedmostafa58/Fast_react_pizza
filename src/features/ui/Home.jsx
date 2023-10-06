import CreateUser from "../user/CreateUser";

function Home() {
  return (
    <div className="py-6 text-center  text-xl md:text-2xl font-semibold   text-stone-700 capitalize bg-stone-200 sm:py-12 md:py-15 h-full">
      <h1 className=" my-4">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
