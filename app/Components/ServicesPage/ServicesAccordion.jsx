'use client';

import { Disclosure } from '@headlessui/react';
import Add from '../icons/Add';
import Remove from '../icons/Remove';
import classNames from 'classnames';
import { servicesAccordionData } from './servicesAccordionData';

const ServicesAccordion = () => {
  return (
    <>
      {servicesAccordionData.map(data => {
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

                <Disclosure.Panel className="px-4 py-2 text-base font-medium md:py-8 text-gray">
                  <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-x-9">
                    <div className="font-medium text-gentle-black">
                      <p>
                        Statisticians at XXXXXX are healthcare data experts with
                        years of experience selecting the optimal sample size
                        and methodological approach to answer questions about
                        the Medicare population, to determine the total number
                        of clinician audits that need to be conducted, and to
                        assess the effectiveness of statewide health policy.
                        Statistical approaches include randomization,
                        stratification, clustering, and convenience sampling.
                        The goal of statistical sampling is to minimize the
                        margin of error in estimation while maintaining
                        reasonable sample size.
                      </p>
                    </div>

                    <div className="text-base font-medium text-gray">
                      <p>
                        Value Proposition When data collection is costly, such
                        as with auditing or medical record review, identifying
                        an adequate number of cases is essential to promote a
                        high degree of confidence in the findings while
                        efficiently utilizing resources and minimizing
                        disruption in provider practices.
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

export default ServicesAccordion;
