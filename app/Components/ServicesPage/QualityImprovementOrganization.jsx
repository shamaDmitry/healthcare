import React from 'react';
import Container from '../atoms/Container';
import ChartData from '../icons/ChartData';
import Headline from '../atoms/Headline';
import ServicesAccordion from './ServicesAccordion';

const QualityImprovementOrganization = () => {
  return (
    <section className="py-16 md:py-[120px] bg-light-gray md:bg-[url('/images/services/image02.jpg')] min-h-[590px] bg-no-repeat bg-right-top flex flex-col">
      <Container>
        <div className="flex items-center mb-10 md:mb-20 gap-x-8">
          <ChartData className="w-10 h-10 text-secondary md:w-auto md:h-auto" />
          <Headline>Quality Improvement Organization</Headline>
        </div>

        <div className="px-4 bg-white shadow-md md:py-4">
          <ServicesAccordion />
        </div>
      </Container>
    </section>
  );
};

export default QualityImprovementOrganization;
