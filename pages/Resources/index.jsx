import { resourceCategories } from "../../data/Resources";

export default () => {
  return (
    <>
      <div className="antialiased container w-full md:px-4 mx-auto py-20">
        <h1 className="text-6xl lg:text-7xl text-center font-title text-blue-800 my-10 drop-shadow-md">
          External Resources
        </h1>
        <div className="container bg-white">
          <nav className="flex flex-col justify-center sm:flex-row">
              {resourceCategories.map((resourceCategory) => (
                <button className="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
                    {resourceCategory}
                </button>
              ))};
            <button className="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
              Tab 3
            </button>
            <button className="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
              Tab 4
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};
