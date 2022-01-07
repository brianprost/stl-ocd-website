import Image from "next/image";
import archImage from "../public/img/st-louis-ocd-arch.webp";

export default () => {
  return (
    <section className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 px-10 py-12 " id="about">
      <div className="lg:mt-8 mt-16 flex lg:flex-row justify-evenly flex-col lg:gap-8 gap-12 bg-gray-200 rounded-3xl py-20 px-10 border-4 border-gray-600">
        <div className="w-full xl:w-5/12 lg:w-6/12">
          <h2 className="font-title lg:text-6xl text-4xl text-blue-800">
            Our mission.
          </h2>
          <p className=" text-base leading-6 mt-4 p-8">
            We are dedicated to providing support to St. Louisians with OCD,
            their families, and friends
          </p>
          <h3 className="font-title lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 pt-2 pb-2">
            Our goals.
          </h3>
          <ul className="flex flex-col p-4">
            <li className="flex flex-row mb-2">
              <div class="bg-gray-300 border border-white rounded-md flex flex-1 items-center p-4">
              Keep up with and share information and resources pertinent to
              Obsessive Compulsive Disorder
              </div>
            </li>
            <li className="flex flex-row mb-2">
              <div class="bg-gray-300 border border-white rounded-md flex flex-1 items-center p-4">
              Educate the general public about Obsessive Compulsive Disorder
              </div>
            </li>
            <li className="flex flex-row mb-2">
              <div class="bg-gray-300 border border-white rounded-md flex flex-1 items-center p-4">
              Reach persons with Obsessive Compulsive Disorder who have not
              sought treatment
              </div>
            </li>
          </ul>
        </div>
        <div className="hidden md:hidden lg:flex items-center w-full lg:w-1/3 ">
          <img
            src="./img/st-louis-ocd-arch.webp"
            className="rounded-2xl "
          />
        </div>
      </div>
      {/* history section */}
      <div className="mt-20 px-5 py-8 mx-auto max-w-4xl sm:px-6 lg:px-8">
        <h2 className="font-title text-6xl text-center mb-20 text-blue-700 underline underline-offset-auto ">est. 1990</h2>
        <p className="text-lg">
          Our meetings are held at Missouri Baptist Medical Center at 3015 North
          Ballas Road Creve Coeur, Missouri.
          <br/><br/>
          Our meetings are held every third
          Saturday of the month. There is no charge to attend, and it is open to
          the public. We particularly welcome OCD patients, their families and
          friends, as well as any college students who are wanting more about
          this disorder. Approximately 30 persons attend our meetings monthly.
          Refreshments are also served. 
          <br/><br/>
          Meetings begin at 10:00 a.m. until 11:00
          a.m. for our guest speaker and accompanying with any questions. The
          presenters are qualified professionals in their field, who are active
          in the treatment of OCD, or personnel from school districts, and other
          support groups or organizations.
          <br/><br/>
          During 11:15 a.m. to 12:00 p.m., we
          have our support group session. This is an informal open discussion,
          lead by our mentors of the group. We discuss the topic of the day, any
          related questions that a person may have, and sharing experiences
          among each other. All information discussed is kept strictly
          confidential and typically centers on treatment options, personal
          experiences, and coping mechanisms.
        </p>
      </div>
    </section>
  );
};
