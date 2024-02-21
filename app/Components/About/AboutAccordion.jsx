'use client';
import { Disclosure } from '@headlessui/react';
import React, { useEffect } from 'react';
import Add from '../icons/Add';
import Remove from '../icons/Remove';
import classNames from 'classnames';
import MilitaryTech from '../icons/MilitaryTech';
import { aboutAccordionData } from './aboutAccordionData';

const AboutAccordion = () => {
  return (
    <>
      {aboutAccordionData.map(data => {
        return (
          <Disclosure
            key={data.id}
            as="div"
            className="border-b border-b-separator last:border-b-0"
          >
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full gap-4 px-2 py-5 font-medium text-left outline-none md:py-8">
                  <span
                    className={classNames('flex-1', {
                      'text-secondary': open,
                    })}
                  >
                    {data.title}
                  </span>

                  <div className="flex items-center justify-center w-5 h-5 text-secondary">
                    {!open ? (
                      <Add className="w-full h-full" />
                    ) : (
                      <Remove className="w-full h-full" />
                    )}
                  </div>
                </Disclosure.Button>

                <Disclosure.Panel className="px-4 py-8 text-base font-medium text-gray">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-x-24">
                    <div className="flex flex-col items-center gap-4 mb-5 md:mb-0 md:items-start md:justify-center">
                      <MilitaryTech className="text-secondary" />

                      <h4 className="font-bold md:m-4 text-gentle-black">
                        We engage with physicians to ensure quality care
                        delivery.
                      </h4>
                    </div>

                    <div className="text-base font-medium text-gray">
                      <p className="mb-8">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Sunt a vero deserunt provident repellendus optio
                        praesentium deleniti delectus suscipit voluptatum neque
                        distinctio facere, debitis quam molestias necessitatibus
                        officia, amet cumque!
                      </p>

                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Sunt totam dolorum est! Eos eum impedit quasi,
                        beatae consequuntur minima itaque. Veniam laborum
                        explicabo iure labore suscipit, fuga repellat quam
                        aperiam.
                      </p>
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        );
      })}
    </>
  );
};

export default AboutAccordion;
