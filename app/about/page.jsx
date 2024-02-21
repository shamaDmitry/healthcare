import Link from 'next/link';
import Container from '../Components/atoms/Container';
import Headline from '../Components/atoms/Headline';
import SubHeadline from '../Components/atoms/SubHeadline';
import DoubleArrowDown from '../Components/icons/DoubleArrowDown';
import Image from 'next/image';
import IconWithText from '../Components/blocks/IconWithText';
import VolunteerActivism from '../Components/icons/VolunteerActivism';
import CoPresent from '../Components/icons/CoPresent';
import AttachMoney from '../Components/icons/AttachMoney';
import QueryStats from '../Components/icons/QueryStats';
import AboutAccordion from '../Components/About/AboutAccordion';
import OpenInNew from '../Components/icons/OpenInNew';
import CTA from '../Components/blocks/CTA';
import LeadershipSlider from '../Components/About/LeadershipSlider';
import CertificationsSlider from '../Components/About/CertificationsSlider';
import OurWork from '../Components/About/OurWork';

const Page = () => {
  return (
    <div className="bg-light">
      <div className="pt-[60px] mb-10 flex flex-col">
        <Container className="flex flex-1 pt-10">
          <div className="flex flex-col items-center py-10 mx-auto md:max-w-screen-md">
            <Headline className="mb-10 text-center text-secondary">
              About
            </Headline>

            <SubHeadline className="mb-10 text-center text-primary">
              Technology-Enabled Organization
            </SubHeadline>

            <p className="font-medium text-center">
              That touches key facets of the journeys of patients and caregivers
              through the healthcare system. We offers information technology,
              program integrity, quality improvement, strategic communications,
              and business process outsourcing solutions.
            </p>
          </div>
        </Container>
      </div>

      <section className="mx-auto max-w-screen-2xl lg:px-[108px]">
        <div className="grid grid-cols-1 mb-8 md:grid-cols-3 md:mb-0">
          <div className="flex flex-col justify-center col-span-2 px-5 py-10 text-white md:py-4 bg-primary md:px-14">
            <p className="font-medium leading-7 md:max-w-80">
              We serves our customers by advancing population health, improving
              patient care, and effectively managing healthcare costs through
              quality improvement and innovation.
            </p>
          </div>

          <div className="">
            <Image
              src="/images/about/image01.jpg"
              alt=""
              width="500"
              height="500"
              className="w-full"
            />
          </div>
        </div>

        <div className="flex justify-end mx-4 md:mx-16">
          <div className="relative flex flex-col max-w-screen-md gap-10 p-5 bg-white shadow md:p-12 md:-translate-y-1/2 md:flex-row md:divide-x divide-separator">
            <div className="">
              <h4 className="mb-2 font-medium text-gentle-black">2004</h4>
              <p className="md:text-sm">
                XXXXXX LLC was formed as a privately held company
              </p>
            </div>

            <div className="md:pl-10">
              <h4 className="mb-2 font-medium text-gentle-black">Maryland</h4>

              <p className="md:text-sm">
                Our headquarter is located in Annapolis Junction, Maryland with
                additional operations in Las Vegas, Nevada, and other offices
                across the United States.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <Container>
          <Headline className="mb-2 text-secondary">HOW WE DO IT</Headline>

          <SubHeadline className="mb-15">
            We works on behalf of government agencies and their contractors to
          </SubHeadline>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 lg:gap-x-14 md:grid-cols-2 md:gap-10">
            <IconWithText
              icon={<VolunteerActivism />}
              iconSize="w-14 h-14"
              text={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
                tempora sed eum fugit dicta atque odio praesentium esse qui
                ipsum corporis facilis unde quod, accusamus ad suscipit,
                neque quo nisi.`}
            />

            <IconWithText
              icon={<CoPresent />}
              iconSize="w-14 h-14"
              text={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
                tempora sed eum fugit dicta atque odio praesentium esse qui
                ipsum corporis facilis unde quod, accusamus ad suscipit,
                neque quo nisi.`}
            />

            <IconWithText
              icon={<AttachMoney />}
              iconSize="w-14 h-14"
              text={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
                tempora sed eum fugit dicta atque odio praesentium esse qui
                ipsum corporis facilis unde quod, accusamus ad suscipit,
                neque quo nisi.`}
            />

            <IconWithText
              icon={<QueryStats />}
              iconSize="w-14 h-14"
              text={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
                tempora sed eum fugit dicta atque odio praesentium esse qui
                ipsum corporis facilis unde quod, accusamus ad suscipit,
                neque quo nisi.`}
            />
          </div>
        </Container>
      </section>

      <section className="bg-light-gray">
        <Container>
          <div className="grid items-start md:grid-cols-2 md:gap-x-14">
            <div className="py-10 md:py-20">
              <Headline className="mb-3 text-secondary">WHY CHOOSE US</Headline>

              <SubHeadline className="mb-6">Why XXXXXX</SubHeadline>

              <p className="mb-8 text-gentle-black">
                We are the largest healthcare quality improvement organization
                in the United States and trusted adviser to the Centers for
                Medicare and Medicaid Services (CMS). We have a unique
                understanding of beneficiaries and have developed programs that
                improve patient outcomes, increase satisfaction, and drastically
                reduce readmissions.
              </p>

              <p className="text-gentle-black">
                With technology at its core, XXXXXX has built a portfolio of
                telehealth, data analytics, and tracking mechanisms that
                position it to inspire a better healthcare system that connects
                patients, providers, and payers to improve health outcomes,
                increase efficiency, and manage costs.
              </p>
            </div>

            <div>
              <Image
                src="/images/about/image02.jpg"
                alt=""
                className="w-full"
                width={611}
                height={664}
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="relative py-10 md:py-0 bg-light">
        <Container>
          <div className="px-4 py-0 bg-white shadow-md md:py-6 md:px-12 md:-translate-y-16">
            <AboutAccordion />
          </div>
        </Container>
      </section>

      <section className="relative py-10 bg-light">
        <Container>
          <Headline className="mb-3 text-secondary">Leadership</Headline>

          <SubHeadline className="mb-6">Board of Directors</SubHeadline>

          <LeadershipSlider />
        </Container>
      </section>

      <section className="relative py-10 md:py-[120px] bg-light-gray">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
            <div>
              <Image
                src="/images/about/image01.jpg"
                alt=""
                width="500"
                height="500"
                className="w-full"
              />
            </div>

            <div>
              <Headline className="mb-3 text-secondary">Staff</Headline>

              <SubHeadline className="mb-6">Our staff</SubHeadline>

              <p className="mb-4 font-medium text-gentle-black">
                Staff consists of healthcare, technology, management, and legal
                experts, including:
              </p>

              <ul className="mb-10 space-y-2 list-disc list-inside text-gray marker:text-gray">
                <li>
                  Medical Directors, pharmacists, nurses, healthcare policy
                  experts, medical coders
                </li>
                <li>
                  Project management professionals, writers/editors,
                  administrative staff
                </li>
                <li>Data management/analysis professionals, statisticians</li>
                <li>IT professionals, SAS programmers</li>
                <li>Attorneys, accountants, certified fraud examiners</li>
              </ul>

              <SubHeadline className="mb-6">Our expertise</SubHeadline>

              <p className="mb-4 font-medium text-gentle-black">
                Subject Matter Areas of Expertise
              </p>

              <ul className="mb-10 space-y-2 list-disc list-inside text-gray marker:text-gray">
                <li>Medicare Part A, B, C, and D</li>
                <li>Medicaid</li>
                <li>Medical Peer Review</li>
                <li>
                  Interpretation, application of coverage, and payment policies
                </li>
                <li>Fraud detection and prevention</li>
                <li>Clinical coding and classification systems</li>
                <li>Training and education</li>
                <li>Statistical analysis, sampling, and modeling</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative pb-10 bg-light">
        <Container>
          <div className="py-16 md:py-[120px] grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
            <div>
              <Headline className="mb-3 text-secondary">Work</Headline>

              <SubHeadline className="mb-6">Our work</SubHeadline>
            </div>

            <OurWork />
          </div>

          <CertificationsSlider />

          <div className="my-10 md:my-[120px] grid lg:grid-cols-3 p-4 py-6 lg:p-12 bg-light-gray gap-8">
            <div className="font-medium text-gentle-black">
              <p className="mb-2">Quality policy</p>
              <p>
                Within a culture of integrity, excellence, and innovation,
                XXXXXX is committed to:
              </p>
            </div>

            <div className="lg:col-span-2">
              <ul className="pl-5 mb-10 space-y-2 list-disc text-gray marker:text-gray">
                <li>Providing quality services and products to customers</li>
                <li>
                  Meeting customers expectations and requirements through
                  quality, service, and reliability
                </li>
                <li>Managing risk</li>
                <li>
                  Monitoring the performance and improving effectiveness of
                  products and services through its Quality Management System
                </li>
                <li>
                  Complying with the requirements of the Quality Management
                  System
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <CTA />
    </div>
  );
};

export default Page;
