import Link from 'next/link';
import Container from '../Components/atoms/Container';
import Headline from '../Components/atoms/Headline';
import SubHeadline from '../Components/atoms/SubHeadline';
import DoubleArrowDown from '../Components/icons/DoubleArrowDown';

const Page = () => {
  return (
    <section className="relative bg-light">
      <section className="relative pt-[60px] flex flex-col justify-center items-center min-h-screen bg-cover bg-right-bottom bg-no-repeat bg-services-banner">
        <Container className="flex-1 flex flex-col items-center justify-center pt-[150px] pb-10 text-white before:bg-black/40 before:absolute before:w-full before:h-full before:top-0">
          <Headline className="relative mb-6">
            XXXXXX offers business process
          </Headline>

          <SubHeadline className="relative mb-6 text-center">
            Outsourcing and information technology-enabled services that improve
            healthcare quality, manage costs, and empower patients and their
            caregiver
          </SubHeadline>

          <Link
            href="#more"
            className="flex items-center gap-4 mt-auto font-bold text-white animate-bounce"
          >
            <DoubleArrowDown />
            Discover more
          </Link>
        </Container>
      </section>
    </section>
  );
};

export default Page;
