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

export default function Home() {
  return (
    <section className="relative">
      <Banner />
      
      <section className="py-10 bg-light">
        <Container>
          <h1>We offer solutions for health and care</h1>

          <div className="mb-10 bg-[url('/images/homepage/beneficiary.jpg')] min-h-[400px] flex flex-col justify-center px-8">
            <h2 className="mb-4 text-secondary">Beneficiary</h2>

            <p className="text-gentle-black">
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

      <section className="bg-light-gray">
        <Container>
          <h2 className="mb-4 text-secondary">Provider</h2>

          <p className="text-gentle-black">Provider Services</p>

          <div className="text-gentle-black">
            <p>
              We assist healthcare providers, helping them improve health
              outcomes, address patients’ needs, and strengthen their
              businesses.
            </p>

            <p>
              Through contracts with government agencies, XXXXXX provides
              quality oversight and auditing of healthcare organizations and
              provides education to the provider community to improve the
              quality of healthcare delivery.
            </p>
          </div>

          <div className="grid grid-cols-2">
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
                    XXXXXX’s valued and distinctive team of professionals is
                    highly respected by the healthcare industry for its
                    expertise in revenue integrity in appeals and denials
                    management, coding, and employee training programs.
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
              <h1 className="mb-4 text-secondary">GOVERNMENT</h1>

              <h2 className="mb-6 text-gentle-black">Public Policy Services</h2>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                dolores doloribus, voluptate rerum assumenda distinctio eligendi
                dolor accusantium laudantium consequatur excepturi ullam quasi
                tempore porro quisquam velit nihil commodi quod.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10">
        <Container className="flex items-center relative bg-[url('/images/homepage/about-us.jpg')] min-h-[412px] bg-center bg-no-repeat bg-cover">
          <div className="bg-gradient-to-r from-[#000000c9] h-full pointer-events-none absolute top-0 left-0 w-full" />

          <div className="relative w-1/2 text-white">
            <Headline className="mb-6 font-bold">About us</Headline>

            <p className="mb-6 font-medium">
              XXXXXX is a technology-enabled organization that touches key
              facets of the journeys of patients and caregivers through the
              healthcare system.
            </p>

            <button className="inline-flex items-center justify-center px-5 py-3 font-bold text-white capitalize bg-secondary">
              LEARN MORE
            </button>
          </div>
        </Container>
      </section>

      <section className="py-10">
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
