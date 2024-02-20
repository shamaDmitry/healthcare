import React from 'react';
import Container from '../atoms/Container';
import Headline from '../atoms/Headline';
import SubHeadline from '../atoms/SubHeadline';
import Image from 'next/image';
import VolunteerActivism from '../icons/VolunteerActivism';
import AdminMeds from '../icons/AdminMeds';
import Chat from '../icons/Chat';

const ProviderServices = () => {
  return (
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
            Through contracts with government agencies, XXXXXX provides quality
            oversight and auditing of healthcare organizations and provides
            education to the provider community to improve the quality of
            healthcare delivery.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Image
            src="/images/homepage/image01.jpg"
            alt=""
            className="w-full md:w-auto"
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
                  Placeat exercitationem consequatur velit eius laudantium vero
                  dolorum vitae neque. Ea sint explicabo sunt a hic porro quod
                  placeat, iste ab numquam?
                </p>
              </li>

              <li className="flex pb-4 mb-4 border-b border-separator gap-x-4">
                <div className="flex items-center justify-center rounded-full bg-light-red w-[44px] h-[44px] flex-shrink-0">
                  <AdminMeds className="text-secondary" />
                </div>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat exercitationem consequatur velit eius laudantium vero
                  dolorum vitae neque. Ea sint explicabo sunt a hic porro quod
                  placeat, iste ab numquam?
                </p>
              </li>

              <li className="flex pb-4 border-b border-separator gap-x-4">
                <div className="flex items-center justify-center rounded-full bg-light-red w-[44px] h-[44px] flex-shrink-0">
                  <Chat className="text-secondary" />
                </div>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat exercitationem consequatur velit eius laudantium vero
                  dolorum vitae neque. Ea sint explicabo sunt a hic porro quod
                  placeat, iste ab numquam?
                </p>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProviderServices;
