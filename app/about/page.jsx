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
          <div className="grid items-center grid-cols-2 gap-x-14">
            <div>
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

      <section className="relative -translate-y-12 bg-light">
        <Container>
          <div className="p-5">
            <AboutAccordion />
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Page;
