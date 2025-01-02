import CreateUser from "../features/user/CreateUser";
function Home() {
  return (
    <div className="my-10 text-center">
      <h1 className="mb-8 text-3xl font-semibold">
        The best pizza.
        <br />
        <span className="text-3xl text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
