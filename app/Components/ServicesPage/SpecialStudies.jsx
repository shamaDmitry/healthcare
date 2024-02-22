import React from 'react';
import Container from '../atoms/Container';
import DocumentScanner from '../icons/DocumentScanner';
import Headline from '../atoms/Headline';
import Image from 'next/image';
import ServicesAccordion from './ServicesAccordion';

const SpecialStudies = () => {
  return (
    <section className="py-16 md:py-[120px]">
      <Container>
        <div className="flex items-center mb-10 md:mb-20 gap-x-8">
          <DocumentScanner className="w-10 h-10 text-secondary md:w-auto md:h-auto" />
          <Headline>Special Studies</Headline>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row">
          <Image
            src="/images/services/image05.jpg"
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

export default SpecialStudies;
