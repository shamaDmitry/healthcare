import Link from 'next/link';
import ContactForm from '../Components/ContactPage/ContactForm';
import ContactList from '../Components/ContactPage/ContactList';
import Container from '../Components/atoms/Container';
import Headline from '../Components/atoms/Headline';
import SubHeadline from '../Components/atoms/SubHeadline';
import ArrowForward from '../Components/icons/ArrowForward';
import Call from '../Components/icons/Call';

const Page = () => {
  return (
    <>
      <section className="relative py-20 lg:py-[180px] bg-light-gray">
        <div className="absolute left-0 top-0 w-full z-0 bg-[url('/images/contact/background.jpg')] min-h-[494px] bg-center bg-no-repeat bg-cover" />

        <Container className="relative z-10 text-white">
          <div className="grid lg:grid-cols-2 lg:gap-x-20">
            <div>
              <Headline className="mb-20">Contact us</Headline>

              <p className="lg:mb-[183px] mb-10 text-lg font-medium">
                If you would like to contact the XXXXXX Corporate office for
                matters other than Medicare Beneficiary support, call (240) 712
                - 4300 or complete the form.
              </p>

              <div className="p-6 mb-10 bg-white lg:mb-0 lg:p-0 lg:bg-transparent text-gentle-black">
                <SubHeadline>Learn more about:</SubHeadline>

                <ContactList />
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-light pt-20 pb-10 md:pb-[170px]">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-16">
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d85668.37631324555!2d35.09278192958152!3d47.85631458521858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dc673dfa85bb03%3A0x7e675cd9074d3f4a!2z0JfQsNC_0L7RgNGW0LbQttGPLCDQl9Cw0L_QvtGA0ZbQt9GM0LrQsCDQvtCx0LvQsNGB0YLRjCwgNjkwMDA!5e0!3m2!1suk!2sua!4v1706796954289!5m2!1suk!2sua"
                width="100%"
                height="455"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="flex flex-col justify-end pb-[78px]">
              <div className="mb-10">
                <div className="flex items-center mb-4 gap-x-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-light-gray text-gentle-black">
                    <Call />
                  </div>

                  <p className="font-medium">Administration Phone</p>
                </div>

                <p className="font-medium text-gray">
                  For business inquiries, opportunities to partner with XXXXXX,
                  <br /> or media questions, please contact:
                  <Link href="tel:(240) 712 - 4300">(240) 712 - 4300</Link>
                </p>
              </div>

              <div>
                <div className="flex items-center mb-4 gap-x-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-light-gray text-gentle-black">
                    <Call />
                  </div>

                  <p className="font-medium">XXXXXX Corporate Office</p>
                </div>

                <p className="font-medium text-gray">
                  10830 Guilford Rd., Ste. 312 <br />
                  Annapolis Junction, MD 20701
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Page;
