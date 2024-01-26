'use client';
import { Disclosure } from '@headlessui/react';
import React from 'react';
import ArrowDown from '../icons/ArrowDown';
import Add from '../icons/Add';
import Remove from '../icons/Remove';
import classNames from 'classnames';

const AboutAccordion = () => {
  return (
    <>
      <Disclosure as="div" className="">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between w-full px-4 py-3 font-medium text-left outline-none">
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

            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              If re unhappy with your purchase for any reason, email us within
              90 days and ll refund you in full, no questions asked.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure as="div" className="">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between w-full px-4 py-3 font-medium text-left outline-none">
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

            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              If re unhappy with your purchase for any reason, email us within
              90 days and ll refund you in full, no questions asked.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default AboutAccordion;
