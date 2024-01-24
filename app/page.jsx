import Image from 'next/image';
import DoubleArrowDown from './Components/icons/DoubleArrowDown';
import Banner from './Components/HomePage/Banner';
import Link from 'next/link';
import VolunteerActivism from './Components/icons/VolunteerActivism';
import AdminMeds from './Components/icons/AdminMeds';
import Chat from './Components/icons/Chat';
import CTA from './Components/blocks/CTA';
import Card from './Components/blocks/Card';
import Headline from './Components/atoms/Headline';
import Container from './Components/atoms/Container';
import DataTable from './Components/icons/DataTable';
import QueryStats from './Components/icons/QueryStats';
import AttachMoney from './Components/icons/AttachMoney';
import Savings from './Components/icons/Savings';
import BrightnessAlert from './Components/icons/BrightnessAlert';
import WorkspacePremium from './Components/icons/WorkspacePremium';
import SubHeadline from './Components/atoms/SubHeadline';

export default function Home() {
  return (
    <section className="relative bg-light">
      <Banner />

      <section id="more" className="py-10 bg-light">
        <Container>
          <Headline className="mb-6 text-center">
            We offer solutions for health and care
          </Headline>

          <div className="mb-10 bg-[url('/images/homepage/beneficiary.jpg')] min-h-[400px] flex flex-col justify-center px-8">
            <SubHeadline className="mb-4 text-secondary">
              Beneficiary
            </SubHeadline>

            <p className="font-medium text-gentle-black">
              Beneficiary and Caregiver Services
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-10">
            <div className="p-10 bg-white text-gentle-black">
              <p>
                We empower patients and caregivers, helping them navigate the
                healthcare system with knowledge and respect.
              </p>

              <p className="mb-4">
                Engaging directly with patients and their families, XXXXXX
                offers a patient-centered approach to case review and advocacy
                services. XXXXXX`s skilled clinical staff empowers patients to
                make informed decisions regarding their plans of care and to
                navigate their care transitions effectively.
              </p>

              <Link
                href="/contact"
                className="flex items-center justify-center px-5 py-2 font-bold text-white capitalize bg-secondary"
              >
                contact us
              </Link>
            </div>

            <ul>
              <li className="flex pb-4 mb-4 border-b border-separator gap-x-4">
                <div className="flex items-center justify-center rounded-full bg-light-red w-[44px] h-[44px] flex-shrink-0">
                  <VolunteerActivism className="text-secondary" />
                </div>

                <p>
                  Innovators of beneficiary and caregiver engagement, the staff
                  of XXXXXX’s specialty call center are trained to assess
                  patients’ needs and goals to advocate for their health
                  successes.
                </p>
              </li>

              <li className="flex pb-4 mb-4 border-b border-separator gap-x-4">
                <div className="flex items-center justify-center rounded-full bg-light-red w-[44px] h-[44px] flex-shrink-0">
                  <AdminMeds className="text-secondary" />
                </div>

                <p>
                  XXXXXX’s experienced clinical staff includes physicians,
                  nurses, social workers, and other healthcare professionals.
                </p>
              </li>

              <li className="flex pb-4 border-b border-separator gap-x-4">
                <div className="flex items-center justify-center rounded-full bg-light-red w-[44px] h-[44px] flex-shrink-0">
                  <Chat className="text-secondary" />
                </div>

                <p>
                  XXXXXX’s experienced clinical staff includes physicians,
                  nurses, social workers, and other healthcare professionals.
                </p>
              </li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-10 bg-light-gray">
        <Container>
          <Headline className="mb-4 text-secondary">Provider</Headline>

          <SubHeadline className="mb-4 text-gentle-black">
            Provider Services
          </SubHeadline>

          <div className="mb-6 space-y-2 text-gentle-black">
            <p>
              We assist healthcare providers, helping them improve health
              outcomes, address patients needs, and strengthen their businesses.
            </p>

            <p>
              Through contracts with government agencies, XXXXXX provides
              quality oversight and auditing of healthcare organizations and
              provides education to the provider community to improve the
              quality of healthcare delivery.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Image
              src="/images/homepage/image01.jpg"
              alt=""
              className=""
              width={611}
              height={664}
              priority
            />

            <div className="p-5 bg-white">
              <ul>
                <li className="flex pb-4 mb-4 border-b border-separator gap-x-4">
                  <div className="flex items-center justify-center rounded-full bg-light-red w-[44px] h-[44px] flex-shrink-0">
                    <VolunteerActivism className="text-secondary" />
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat exercitationem consequatur velit eius laudantium
                    vero dolorum vitae neque. Ea sint explicabo sunt a hic porro
                    quod placeat, iste ab numquam?
                  </p>
                </li>

                <li className="flex pb-4 mb-4 border-b border-separator gap-x-4">
                  <div className="flex items-center justify-center rounded-full bg-light-red w-[44px] h-[44px] flex-shrink-0">
                    <AdminMeds className="text-secondary" />
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat exercitationem consequatur velit eius laudantium
                    vero dolorum vitae neque. Ea sint explicabo sunt a hic porro
                    quod placeat, iste ab numquam?
                  </p>
                </li>

                <li className="flex pb-4 border-b border-separator gap-x-4">
                  <div className="flex items-center justify-center rounded-full bg-light-red w-[44px] h-[44px] flex-shrink-0">
                    <Chat className="text-secondary" />
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat exercitationem consequatur velit eius laudantium
                    vero dolorum vitae neque. Ea sint explicabo sunt a hic porro
                    quod placeat, iste ab numquam?
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10 bg-light">
        <Container>
          <div className="grid grid-cols-3 gap-20">
            <div className="order-2">
              <Image
                src="/images/homepage/goverment.jpg"
                alt=""
                className="w-full"
                width={552}
                height={640}
                priority
              />
            </div>

            <div className="col-span-2">
              <Headline className="mb-4 text-secondary">Payer</Headline>

              <SubHeadline className="mb-4 text-gentle-black">
                Payer Services
              </SubHeadline>

              <p className="mb-10 text-gentle-black">
                We help healthcare payers manage costs and ensure payment
                accuracy.
              </p>

              <div className="grid grid-cols-2 gap-10">
                <div>
                  <div className="flex items-center justify-center mb-4 rounded-full bg-light-red text-secondary w-11 h-11">
                    <AttachMoney />
                  </div>

                  <p className="mb-6 text-gray">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
                    tempora sed eum fugit dicta atque odio praesentium esse qui
                    ipsum corporis facilis unde quod, accusamus ad suscipit,
                    neque quo nisi.
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-center mb-4 rounded-full bg-light-red text-secondary w-11 h-11">
                    <Savings />
                  </div>

                  <p className="mb-6 text-gray">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolorum, maiores at nihil, dolor dignissimos ipsum
                    blanditiis minus repellat obcaecati voluptates accusamus
                    animi nisi minima ea eveniet error consequatur, delectus
                    natus.
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-center mb-4 rounded-full bg-light-red text-secondary w-11 h-11">
                    <BrightnessAlert />
                  </div>

                  <p className="mb-6 text-gray">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
                    tempora sed eum fugit dicta atque odio praesentium esse qui
                    ipsum corporis facilis unde quod, accusamus ad suscipit,
                    neque quo nisi.
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-center mb-4 rounded-full bg-light-red text-secondary w-11 h-11">
                    <WorkspacePremium />
                  </div>

                  <p className="mb-6 text-gray">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolorum, maiores at nihil, dolor dignissimos ipsum
                    blanditiis minus repellat obcaecati voluptates accusamus
                    animi nisi minima ea eveniet error consequatur, delectus
                    natus.
                  </p>
                </div>
              </div>

              <button className="inline-flex items-center justify-center px-5 py-3 font-bold text-white capitalize bg-secondary">
                contact us
              </button>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10 bg-light-gray">
        <Container>
          <div className="grid grid-cols-3 gap-20">
            <div>
              <Image
                src="/images/homepage/goverment.jpg"
                alt=""
                className="w-full"
                width={552}
                height={640}
                priority
              />
            </div>

            <div className="col-span-2">
              <Headline className="mb-4 text-secondary">Government</Headline>

              <SubHeadline className="mb-4 text-gentle-black">
                Public Policy Services
              </SubHeadline>

              <p className="mb-10 text-gentle-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                dolores doloribus, voluptate rerum assumenda distinctio eligendi
                dolor accusantium laudantium consequatur excepturi ullam quasi
                tempore porro quisquam velit nihil commodi quod.
              </p>

              <div className="grid grid-cols-2 gap-10">
                <div>
                  <div className="flex items-center justify-center mb-4 bg-white rounded-full text-secondary w-11 h-11">
                    <DataTable />
                  </div>

                  <p className="mb-6 text-gray">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
                    tempora sed eum fugit dicta atque odio praesentium esse qui
                    ipsum corporis facilis unde quod, accusamus ad suscipit,
                    neque quo nisi.
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-center mb-4 bg-white rounded-full text-secondary w-11 h-11">
                    <QueryStats />
                  </div>

                  <p className="mb-6 text-gray">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolorum, maiores at nihil, dolor dignissimos ipsum
                    blanditiis minus repellat obcaecati voluptates accusamus
                    animi nisi minima ea eveniet error consequatur, delectus
                    natus.
                  </p>
                </div>
              </div>

              <button className="inline-flex items-center justify-center px-5 py-3 font-bold text-white capitalize bg-secondary">
                contact us
              </button>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10 bg-light">
        <Container className="mb-10">
          <div className="flex items-center px-20 relative bg-[url('/images/homepage/about-us.jpg')] min-h-[412px] bg-center bg-no-repeat bg-cover">
            <div className="bg-gradient-to-r from-[#000000c9] h-full pointer-events-none absolute top-0 left-0 w-full" />

            <div className="relative w-1/2 text-white">
              <Headline className="mb-6">About us</Headline>

              <p className="mb-6 font-medium">
                XXXXXX is a technology-enabled organization that touches key
                facets of the journeys of patients and caregivers through the
                healthcare system.
              </p>

              <button className="inline-flex items-center justify-center px-5 py-3 font-bold text-white capitalize bg-secondary">
                LEARN MORE
              </button>
            </div>
          </div>
        </Container>

        <Container>
          <Headline className="mb-5">Latest news</Headline>

          <div className="grid grid-cols-3 gap-8 mb-12">
            <Card
              imageSrc="https://placehold.co/600x400"
              category="Articles"
              date="01 May, 2023"
              body="Mend the Gap! A New Perspective to Address Quality Concerns"
              link="/"
            />
            <Card
              imageSrc="https://placehold.co/600x400"
              category="Articles"
              date="01 May, 2023"
              body="Mend the Gap! A New Perspective to Address Quality Concerns"
              link="/"
            />
            <Card
              imageSrc="https://placehold.co/600x400"
              category="Articles"
              date="01 May, 2023"
              body="Mend the Gap! A New Perspective to Address Quality Concerns"
              link="/"
            />
          </div>

          <div className="px-12 text-right">
            <button className="inline-flex items-center justify-center px-5 py-3 font-bold text-white capitalize bg-secondary">
              view all news
            </button>
          </div>
        </Container>
      </section>

      <CTA />
    </section>
  );
}
