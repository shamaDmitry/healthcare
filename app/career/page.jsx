import CustomButton from '../Components/atoms/Button';
import Container from '../Components/atoms/Container';
import Headline from '../Components/atoms/Headline';
import SubHeadline from '../Components/atoms/SubHeadline';
import CTA from '../Components/blocks/CTA';
import ArrowForward from '../Components/icons/ArrowForward';

const Page = () => {
  return (
    <>
      <section className="relative py-[180px] bg-light-gray bg-[url('/images/career/background.jpg')] min-h-[660px] bg-center bg-no-repeat bg-cover">
        <Container className="relative z-10 text-white">
          <div className="grid grid-cols-2 gap-x-20">
            <div>
              <Headline className="mb-20">Career</Headline>
            </div>
          </div>
        </Container>
      </section>

      <div className="bg-light-gray">
        <Container className="relative">
          <div className="grid grid-cols-2 mb-10 gap-x-12">
            <div className="-translate-y-32 bg-white shadow-lg p-9">
              <SubHeadline className="mb-4">Join XXXXXX Team</SubHeadline>

              <p className="font-medium mb-9">
                As a company that promotes a high level of integrity,
                excellence, and innovation, XXXXXX is constantly seeking
                exceptional talent across the United States to help improve the
                healthcare system. XXXXXX engages patients, families, and
                providers to promote the right care, at the right time, in the
                right place. XXXXXX also partners with federal and state
                agencies to transform healthcare by providing patient-centric
                programs that improve quality, effectively manage costs, and
                safeguard integrity.
              </p>

              <CustomButton
                as="Link"
                href=""
                className="text-white bg-secondary hover:bg-secondary/80 h-[58px] inline-flex items-center justify-center px-5 py-2 font-bold capitalize gap-x-2"
              >
                <span>view all open positions</span> <ArrowForward />
              </CustomButton>
            </div>

            <div className="pt-12 font-medium text-gray">
              <p className="mb-6">
                Job seeking veterans are encouraged to apply.
              </p>
              <p className="">
                *Please note all XXXXXX positions require a criminal background
                check and a drug screen.
              </p>
            </div>
          </div>
        </Container>
      </div>

      <CTA />
    </>
  );
};

export default Page;
