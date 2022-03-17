const AboutSection = () => {
  return (
    <section
      className="px-10 py-2 md:py-2 md:pb-16 lg:px-20 lg:pt-6 lg:pb-12 2xl:container 2xl:mx-auto"
      id="about"
    >
      <div className="mt-16 flex flex-col justify-evenly gap-12 rounded-3xl border-4 border-gray-600 bg-gray-200 py-20 px-10 lg:mt-8 lg:flex-row lg:gap-8">
        <div className="w-full lg:w-6/12 xl:w-5/12">
          <h2 className="font-title text-4xl text-blue-800 lg:text-6xl">
            Our mission.
          </h2>
          <p className=" mt-4 p-8 text-base leading-6">
            We are dedicated to providing support to St. Louisians with OCD,
            their families, and friends
          </p>
          <h3 className="pt-2 pb-2 font-title text-3xl leading-7 text-gray-800 lg:text-4xl lg:leading-9">
            Our goals.
          </h3>
          <ul className="flex flex-col p-4">
            <li className="mb-2 flex flex-row">
              <div className="flex flex-1 items-center rounded-md border border-white bg-gray-300 p-4">
                Keep up with and share information and resources pertinent to
                Obsessive Compulsive Disorder
              </div>
            </li>
            <li className="mb-2 flex flex-row">
              <div className="flex flex-1 items-center rounded-md border border-white bg-gray-300 p-4">
                Educate the general public about Obsessive Compulsive Disorder
              </div>
            </li>
            <li className="mb-2 flex flex-row">
              <div className="flex flex-1 items-center rounded-md border border-white bg-gray-300 p-4">
                Reach persons with Obsessive Compulsive Disorder who have not
                sought treatment
              </div>
            </li>
          </ul>
        </div>
        <div className="hidden w-full items-center md:hidden lg:flex lg:w-1/3 ">
          <img
            src="./img/st-louis-ocd-arch.webp"
            className="rounded-2xl "
            alt="st. louis arch"
          />
        </div>
      </div>
      {/* history section */}
      <div className="mx-auto mt-20 max-w-4xl px-5 py-8 sm:px-6 lg:px-8">
        <h2 className="mb-20 text-center font-title text-6xl text-blue-700 underline underline-offset-auto ">
          est. 1990
        </h2>
        <p className="text-lg">
          Our meetings are held at Missouri Baptist Medical Center at 3015 North
          Ballas Road Creve Coeur, Missouri.
          <br />
          <br />
          Our meetings are held every third Saturday of the month. There is no
          charge to attend, and it is open to the public. We particularly
          welcome OCD patients, their families and friends, as well as any
          college students who are wanting more about this disorder.
          Approximately 30 persons attend our meetings monthly. Refreshments are
          also served.
          <br />
          <br />
          Meetings begin at 10:00 a.m. until 11:00 a.m. for our guest speaker
          and accompanying with any questions. The presenters are qualified
          professionals in their field, who are active in the treatment of OCD,
          or personnel from school districts, and other support groups or
          organizations.
          <br />
          <br />
          During 11:15 a.m. to 12:00 p.m., we have our support group session.
          This is an informal open discussion, lead by our mentors of the group.
          We discuss the topic of the day, any related questions that a person
          may have, and sharing experiences among each other. All information
          discussed is kept strictly confidential and typically centers on
          treatment options, personal experiences, and coping mechanisms.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
