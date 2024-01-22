import Image from 'next/image';
import DoubleArrowDown from './Components/icons/DoubleArrowDown';
import Banner from './Components/HomePage/Banner';
import Link from 'next/link';
import VolunteerActivism from './Components/icons/VolunteerActivism';
import AdminMeds from './Components/icons/AdminMeds';
import Chat from './Components/icons/Chat';
import CTA from './Components/blocks/CTA';
import Card from './Components/blocks/Card';

export default function Home() {
  return (
    <section className="relative">
      <Banner />

      <section className="py-10 bg-light">
        <div className="container">
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

              <p>
                Engaging directly with patients and their families, XXXXXX
                offers a patient-centered approach to case review and advocacy
                services. XXXXXX's skilled clinical staff empowers patients to
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
        </div>
      </section>

      <section className="bg-light-gray">
        <h2 className="mb-4 text-secondary">Provider</h2>

        <p className="text-gentle-black">Provider Services</p>

        <div className="text-gentle-black">
          <p>
            We assist healthcare providers, helping them improve health
            outcomes, address patients’ needs, and strengthen their businesses.
          </p>

          <p>
            Through contracts with government agencies, XXXXXX provides quality
            oversight and auditing of healthcare organizations and provides
            education to the provider community to improve the quality of
            healthcare delivery.
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
                  highly respected by the healthcare industry for its expertise
                  in revenue integrity in appeals and denials management,
                  coding, and employee training programs.
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
      </section>

      <section className='py-10'>
        <div className="grid grid-cols-3 gap-8">
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
      </section>

      <CTA />
    </section>
  );
}
