import React from 'react';
import Container from '../atoms/Container';
import QuickeferenceAll from '../icons/QuickeferenceAll';
import Headline from '../atoms/Headline';
import Image from 'next/image';
import ServicesAccordion from './ServicesAccordion';

const ProgramIntegrity = () => {
  return (
    <section className="py-16 md:py-[120px]">
      <Container>
        <div className="flex items-center mb-10 md:mb-20 gap-x-8">
          <QuickeferenceAll className="w-10 h-10 text-secondary md:w-auto md:h-auto" />
          <Headline>Program Integrity and Peer Review</Headline>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row">
          <Image
            src="/images/services/image03.jpg"
            alt=""
            className="max-h-[500px] flex-shrink-0 object-cover w-full lg:w-1/2"
            width={611}
            height={500}
            priority
          />

          <div className="w-full">
            <ServicesAccordion />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProgramIntegrity;
