import Link from 'next/link';
import Container from '../Components/atoms/Container';
import Headline from '../Components/atoms/Headline';
import SubHeadline from '../Components/atoms/SubHeadline';
import DoubleArrowDown from '../Components/icons/DoubleArrowDown';
import CTA from '../Components/blocks/CTA';
import ServicesAccordion from '../Components/ServicesPage/ServicesAccordion';
import ChartData from '../Components/icons/ChartData';
import QuickeferenceAll from '../Components/icons/QuickeferenceAll';
import Image from 'next/image';
import Storage from '../Components/icons/Storage';
import DocumentScanner from '../Components/icons/DocumentScanner';

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

      <section
        id="more"
        className="py-[120px] bg-[url('/images/services/image01.jpg')] min-h-[620px] bg-no-repeat bg-right flex flex-col"
      >
        <Container className="flex flex-col justify-center flex-1">
          <div className="max-w-xl">
            <div className="grid max-w-xl grid-cols-2 gap-x-14">
              <div>Our experts bring togeher a deep understanding of</div>

              <div className="space-y-6">
                <p>Healthcare</p>
                <p>Regulatory environment</p>
                <p>Public policy</p>
              </div>
            </div>

            <p className="mt-[210px] text-gray">
              As a technology-enabled firm, XXXXXX provides leadership to
              federal and state healthcare agencies delivering tangible,
              innovative solutions that offer exceptional value to all customers
              and their stakeholders.
            </p>
          </div>

          <p>explore our services:</p>
        </Container>
      </section>

      <section className="py-[120px] bg-light-gray  bg-[url('/images/services/image02.jpg')] min-h-[590px] bg-no-repeat bg-right-top flex flex-col">
        <Container>
          <div className="flex items-center mb-20 gap-x-8">
            <ChartData className="text-secondary" />
            <Headline>Quality Improvement Organization</Headline>
          </div>

          <div className="p-4 bg-white shadow-md">
            <ServicesAccordion />
          </div>
        </Container>
      </section>

      <section className="py-[120px]">
        <Container>
          <div className="flex items-center mb-20 gap-x-8">
            <QuickeferenceAll className="text-secondary" />
            <Headline>Program Integrity and Peer Review</Headline>
          </div>

          <div className="flex gap-6">
            <Image
              src="/images/services/image03.jpg"
              alt=""
              className="max-h-[500px]"
              width={611}
              height={500}
              priority
            />
            <div className="w-full">
              <ServicesAccordion />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-[120px] bg-light-gray  bg-[url('/images/services/image04.jpg')] min-h-[630px] bg-no-repeat bg-right-top flex flex-col">
        <Container>
          <div className="flex items-center mb-20 gap-x-8">
            <ChartData className="text-secondary" />
            <Headline>Data and Analytics</Headline>
          </div>

          <div className="p-4 bg-white shadow-md">
            <ServicesAccordion />
          </div>
        </Container>
      </section>

      <section className="py-[120px]">
        <Container>
          <div className="flex items-center mb-20 gap-x-8">
            <DocumentScanner className="text-secondary" />
            <Headline>Special Studies</Headline>
          </div>

          <div className="flex gap-6">
            <Image
              src="/images/services/image05.jpg"
              alt=""
              className="max-h-[500px]"
              width={611}
              height={500}
              priority
            />
            <div className="w-full">
              <ServicesAccordion />
            </div>
          </div>
        </Container>
      </section>

      <CTA />
    </section>
  );
};

export default Page;
