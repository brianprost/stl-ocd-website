import Link from "next/link";

const ContactSection = () => {
  const contactInformation = {
    name: "St. Louis OCD Support Group",
    email: "stlocd@swbell.net",
    phoneNumber: "314-291-7566",
  };

  return (
    <>
      <section className="bg-white-100" id="contact">
        <div className="mx-auto flex px-8 py-32 md:py-48">
          <div className="flex w-full flex-row justify-evenly lg:flex-row">
            <div className="max-w-lg md:w-full">
              <h1 className="md:leading-2 pb-20 text-center font-title text-8xl tracking-wide text-gray-900 md:text-8xl lg:text-7xl xl:text-8xl">
                <span className="text-blue-800">Contact</span> Us
              </h1>
              {Object.keys(contactInformation).map((contactItem) => (
                <h4
                  className="select-all text-center text-2xl font-light"
                  key={contactItem}
                >
                  {contactInformation[contactItem]}
                </h4>
              ))}
              <div className="flex items-center justify-center">
                <Link href="http://eepurl.com/dx6GCT">
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    className="m-8 mt-40 w-3/5 transform rounded-xl bg-gray-900 p-2 text-center text-2xl font-light text-white shadow-lg transition duration-500 ease-in-out hover:-translate-y-1 hover:bg-blue-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-4"
                  >
                    Join Our Newsletter
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
