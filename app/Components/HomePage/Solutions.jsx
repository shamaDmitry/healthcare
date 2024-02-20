import React from 'react';
import Container from '../atoms/Container';
import Headline from '../atoms/Headline';
import SubHeadline from '../atoms/SubHeadline';
import Link from 'next/link';
import VolunteerActivism from '../icons/VolunteerActivism';
import AdminMeds from '../icons/AdminMeds';
import Chat from '../icons/Chat';

const Solutions = () => {
  return (
    <section className="py-10 bg-light">
      <Container>
        <Headline className="mb-6 text-center">
          We offer solutions for health and care
        </Headline>

        <div className="mb-10 bg-[url('/images/homepage/beneficiary.jpg')] bg-center min-h-[400px] flex flex-col justify-center px-8">
          <SubHeadline className="mb-4 text-secondary">Beneficiary</SubHeadline>

          <p className="font-medium text-gentle-black">
            Beneficiary and Caregiver Services
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-x-10">
          <div className="p-10 bg-white text-gentle-black">
            <p>
              We empower patients and caregivers, helping them navigate the
              healthcare system with knowledge and respect.
            </p>

            <p className="mb-4">
              Engaging directly with patients and their families, XXXXXX offers
              a patient-centered approach to case review and advocacy services.
              XXXXXX`s skilled clinical staff empowers patients to make informed
              decisions regarding their plans of care and to navigate their care
              transitions effectively.
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas obcaecati ex repudiandae fuga similique voluptatem,
                enim porro. Numquam culpa quaerat debitis est distinctio
                blanditiis, et vitae voluptatibus omnis earum error.
              </p>
            </li>

            <li className="flex pb-4 mb-4 border-b border-separator gap-x-4">
              <div className="flex items-center justify-center rounded-full bg-light-red w-[44px] h-[44px] flex-shrink-0">
                <AdminMeds className="text-secondary" />
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
                laudantium accusamus, tenetur mollitia modi magnam voluptatem
                velit veritatis ex aliquam dolorem porro voluptatibus soluta.
                Suscipit atque assumenda temporibus quia? Blanditiis!
              </p>
            </li>

            <li className="flex pb-4 border-b border-separator gap-x-4">
              <div className="flex items-center justify-center rounded-full bg-light-red w-[44px] h-[44px] flex-shrink-0">
                <Chat className="text-secondary" />
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium excepturi exercitationem ad maiores blanditiis ex
                recusandae culpa, debitis deserunt veritatis sint iste
                praesentium rem soluta incidunt! Beatae ratione officiis
                exercitationem?
              </p>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Solutions;
