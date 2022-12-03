import Head from "next/head";
import Resource from "../../components/Resource.component";
import LoadingSpinner from "../../components/LoadingSpinner";
import { useList } from "react-firebase-hooks/database";
import { ref, getDatabase } from "firebase/database";
import firebaseApp from "../../firebase";

const database = getDatabase(firebaseApp);

const ResourcesPage = () => {
  // set database from the global firebase instance
  const [snapshots, loading, error] = useList(ref(database, "resources"));

  return (
    <>
      <Head>
        <title>Resources - St. Louis OCD Support Group</title>
      </Head>
      <div className="container mx-auto w-full antialiased md:px-4 lg:py-20">
        <h1 className="my-10 text-center font-title text-6xl text-blue-800 drop-shadow-md lg:text-7xl">
          Resources
        </h1>
        {error && <strong>Error: {error}</strong>}
        {loading && (
          <div className="flex h-screen flex-row items-center justify-center md:h-3/4">
            <LoadingSpinner />
          </div>
        )}
        <div className="mlg:grid-cols-3 mx-auto space-y-6 px-10 md:grid md:grid-cols-2 md:gap-10 md:space-y-0 md:px-0 lg:grid-cols-3">
          {snapshots && (
            <>
              {snapshots.map((resource) => (
                <Resource
                  key={resource.val().title}
                  title={resource.val().title}
                  description={resource.val().description}
                  link={resource.val().link}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ResourcesPage;
