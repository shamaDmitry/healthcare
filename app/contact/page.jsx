import Container from '../Components/atoms/Container';
import Headline from '../Components/atoms/Headline';

const Page = () => {
  return (
    <section className="relative py-16">
      <div className="absolute left-0 top-0 w-full z-0 bg-[url('/images/contact/background.jpg')] min-h-[494px] bg-center bg-no-repeat bg-cover" />

      <Container className="relative z-10 text-white">
        <div className="grid grid-cols-2 gap-x-20">
          <div>
            <Headline className="mb-5">Contact us</Headline>
            <p>
              If you would like to contact the XXXXXX Corporate office for
              matters other than Medicare Beneficiary support, call (240) 712 –
              4300 or complete the form.
            </p>
          </div>

          <div>
            <form className="bg-white shadow-md text-gentle-black p-9">
              <p className="mb-12 font-bold">Send us a message</p>

              <div className="space-y-7">
                <div className="flex flex-col">
                  <label
                    htmlFor=""
                    className="block mb-3 font-medium text-gentle-black"
                  >
                    Full name
                  </label>
                  <input
                    type="text"
                    placeholder="Full name"
                    className="p-4 border outline-none border-separator"
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor=""
                    className="block mb-3 font-medium text-gentle-black"
                  >
                    Mobile phone
                  </label>
                  <input
                    type="text"
                    placeholder="Mobile phone"
                    className="p-4 border outline-none border-separator"
                  />
                </div>
                
                <div className="flex flex-col">
                  <label
                    htmlFor=""
                    className="block mb-3 font-medium text-gentle-black"
                  >
                    Email address
                  </label>
                  <input
                    type="text"
                    placeholder="Email address"
                    className="p-4 border outline-none border-separator"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Page;
