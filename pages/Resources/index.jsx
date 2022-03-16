import { useState, useEffect } from "react";
import Resource from "../../components/Resource.component";
import { Resources } from "../../data/Resources";

const ResourcesPage = () => {
  // const [resources, setResources] = useState([]);
  // const getResources = () => {
  //   fetch("../../data/Resources.json", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   })
  //     .then((response) => {
  //       console.log(response);
  //       return response.json();
  //     })
  //     .then((myJson) => {
  //       console.log(myJson);
  //       setResources(myJson);
  //     });
  // };

  // useEffect(() => {
  //   GetResources();
  // }, []);

  return (
    <>
      <div className="container mx-auto w-full lg:py-20 antialiased md:px-4">
        <h1 className="my-10 text-center font-title text-6xl text-blue-800 drop-shadow-md lg:text-7xl">
          Resources
        </h1>
        <div className="mlg:grid-cols-3 mx-auto space-y-6 px-10 md:grid md:grid-cols-2 md:gap-10 md:space-y-0 md:px-0 lg:grid-cols-3">
          {Resources.map((resource) => (
            <Resource
              title={resource.title}
              key={resource.title}
              description={resource.description}
              link={resource.link}
            ></Resource>
          ))}
        </div>
      </div>
    </>
  );
};

export default ResourcesPage;
