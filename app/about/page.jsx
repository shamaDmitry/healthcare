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
import ArrowForward from '../Components/icons/ArrowForward';
import CertificateCard from '../Components/blocks/CertificateCard';
import CTA from '../Components/blocks/CTA';
import LeadershipSlider from '../Components/About/LeadershipSlider';
import CertificationsSlider from '../Components/About/CertificationsSlider';

const Page = () => {
  return (
    <div className="bg-light">
      <div className="min-h-screen pt-[60px] flex flex-col">
        <Container className="flex flex-1 pt-10">
          <div className="flex flex-col items-center justify-between py-10">
            <Headline className="text-center text-secondary">About</Headline>

            <SubHeadline className="mb-10 text-center text-primary">
              Technology-Enabled Organization
            </SubHeadline>

            <p>
              that touches key facets of the journeys of patients and caregivers
              through the healthcare system. We offers information technology,
              program integrity, quality improvement, strategic communications,
              and business process outsourcing solutions.
            </p>

            <Link
              href="#more"
              className="flex items-center gap-4 py-8 font-bold text-gray animate-bounce"
            >
              <DoubleArrowDown />
              Discover more
            </Link>
          </div>
        </Container>
      </div>

      <section id="more" className="mx-auto max-w-screen-2xl px-[108px]">
        <div className="grid grid-cols-3">
          <div className="flex flex-col justify-center col-span-2 py-4 text-white bg-primary px-14">
            <p className="font-medium leading-7 max-w-80">
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

        <div className="flex justify-end mx-16">
          <div className="relative flex max-w-screen-md gap-10 p-12 -translate-y-1/2 bg-white divide-x shadow divide-separator">
            <div className="">
              <h4 className="mb-2 font-medium text-gentle-black">2004</h4>
              <p className="text-sm">
                XXXXXX LLC was formed as a privately held company
              </p>
            </div>

            <div className="pl-10">
              <h4 className="mb-2 font-medium text-gentle-black">Maryland</h4>

              <p className="text-sm">
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

          <div className="grid grid-cols-4 gap-x-14">
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
          <div className="grid items-start grid-cols-2 gap-x-14">
            <div className="py-20">
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
                className=""
                width={611}
                height={664}
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="relative bg-light">
        <Container>
          <div className="px-12 py-6 -translate-y-16 bg-white shadow-md">
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

      <section className="relative py-[120px] bg-light-gray">
        <Container>
          <div className="grid grid-cols-2 gap-14">
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
          <div className="py-[120px] grid grid-cols-2 gap-10">
            <div>
              <Headline className="mb-3 text-secondary">Work</Headline>

              <SubHeadline className="mb-6">Our work</SubHeadline>
            </div>

            <div>
              <div className="space-y-5">
                <div className="flex items-center bg-white py-7 px-9">
                  <span className="w-full font-bold text-gentle-black">
                    Contracts
                  </span>

                  <Link
                    href="/more"
                    target="_blank"
                    className="inline-flex items-center font-medium uppercase transition whitespace-nowrap hover:opacity-50 gap-x-2 text-secondary"
                  >
                    <span className="leading-none">SEE MORE</span>
                    <OpenInNew />
                  </Link>
                </div>

                <div className="flex items-center bg-white py-7 px-9">
                  <span className="w-full font-bold text-gentle-black">
                    Contracts
                  </span>

                  <Link
                    href="/more"
                    target="_blank"
                    className="inline-flex items-center font-medium uppercase transition whitespace-nowrap hover:opacity-50 gap-x-2 text-secondary"
                  >
                    <span className="leading-none">SEE MORE</span>
                    <OpenInNew />
                  </Link>
                </div>

                <div className="flex items-center bg-white py-7 px-9">
                  <span className="w-full font-bold text-gentle-black">
                    Contracts
                  </span>

                  <Link
                    href="/more"
                    target="_blank"
                    className="inline-flex items-center font-medium uppercase transition whitespace-nowrap hover:opacity-50 gap-x-2 text-secondary"
                  >
                    <span className="leading-none">SEE MORE</span>
                    <OpenInNew />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <CertificationsSlider />

          <div className="my-[120px] grid grid-cols-3 p-12 bg-light-gray gap-x-8">
            <div className="font-medium text-gentle-black">
              <p className="mb-2">Quality policy</p>
              <p>
                Within a culture of integrity, excellence, and innovation,
                XXXXXX is committed to:
              </p>
            </div>

            <div className="col-span-2">
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
