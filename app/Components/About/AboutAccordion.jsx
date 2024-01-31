'use client';
import { Disclosure } from '@headlessui/react';
import React, { useEffect } from 'react';
import ArrowDown from '../icons/ArrowDown';
import Add from '../icons/Add';
import Remove from '../icons/Remove';
import classNames from 'classnames';
import MilitaryTech from '../icons/MilitaryTech';
import { client } from '@/lib/contentful';

const AboutAccordion = () => {
  const getData = async () => {
    const response = await client.getEntries({
      content_type: 'recipeCookbook',
    });

    console.log(response);
  };

  useEffect(() => {
    getData();
    
    return () => {};
  }, []);

  return (
    <>
      <Disclosure
        as="div"
        className="border-b border-b-separator last:border-b-0"
      >
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between w-full px-4 py-8 font-medium text-left outline-none">
              <span
                className={classNames('flex-1', {
                  'text-secondary': open,
                })}
              >
                Ensure quality care delivery
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
              <div className="grid grid-cols-2 gap-x-24">
                <div>
                  <MilitaryTech className="text-secondary" />

                  <h4 className="m-4 font-bold text-gentle-black">
                    We engage with physicians to ensure quality care delivery.
                  </h4>
                </div>

                <div className="text-base font-medium text-gray">
                  <p className="mb-8">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sunt a vero deserunt provident repellendus optio praesentium
                    deleniti delectus suscipit voluptatum neque distinctio
                    facere, debitis quam molestias necessitatibus officia, amet
                    cumque!
                  </p>

                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Sunt totam dolorum est! Eos eum impedit quasi, beatae
                    consequuntur minima itaque. Veniam laborum explicabo iure
                    labore suscipit, fuga repellat quam aperiam.
                  </p>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure
        as="div"
        className="border-b border-b-separator last:border-b-0"
      >
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between w-full px-4 py-6 font-medium text-left outline-none">
              <span
                className={classNames('flex-1', {
                  'text-secondary': open,
                })}
              >
                Ensure quality care delivery
              </span>

              <div className="flex items-center justify-center w-5 h-5 text-secondary">
                {!open ? (
                  <Add className="w-full h-full" />
                ) : (
                  <Remove className="w-full h-full" />
                )}
              </div>
            </Disclosure.Button>

            <Disclosure.Panel className="px-4 py-6 text-base font-medium text-gray">
              If re unhappy with your purchase for any reason, email us within
              90 days and ll refund you in full, no questions asked.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure
        as="div"
        className="border-b border-b-separator last:border-b-0"
      >
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between w-full px-4 py-8 font-medium text-left outline-none">
              <span
                className={classNames('flex-1', {
                  'text-secondary': open,
                })}
              >
                Ensure quality care delivery
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
              <div className="grid grid-cols-2 gap-x-24">
                <div>
                  <MilitaryTech className="text-secondary" />

                  <h4 className="m-4 font-bold text-gentle-black">
                    We engage with physicians to ensure quality care delivery.
                  </h4>
                </div>

                <div className="text-base font-medium text-gray">
                  <p className="mb-8">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sunt a vero deserunt provident repellendus optio praesentium
                    deleniti delectus suscipit voluptatum neque distinctio
                    facere, debitis quam molestias necessitatibus officia, amet
                    cumque!
                  </p>

                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Sunt totam dolorum est! Eos eum impedit quasi, beatae
                    consequuntur minima itaque. Veniam laborum explicabo iure
                    labore suscipit, fuga repellat quam aperiam.
                  </p>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default AboutAccordion;
