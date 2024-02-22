import React from 'react';
import Container from '../atoms/Container';
import ChartData from '../icons/ChartData';
import Headline from '../atoms/Headline';
import ServicesAccordion from './ServicesAccordion';

const DataAnalytics = () => {
  return (
    <section className="py-16 md:py-[120px] bg-light-gray bg-[url('/images/services/image04.jpg')] min-h-[630px] bg-no-repeat bg-right-top flex flex-col">
      <Container>
        <div className="flex items-center mb-10 md:mb-20 gap-x-8">
          <ChartData className="w-10 h-10 text-secondary md:w-auto md:h-auto" />
          <Headline>Data and Analytics</Headline>
        </div>

        <div className="p-4 bg-white shadow-md">
          <ServicesAccordion />
        </div>
      </Container>
    </section>
  );
};

export default DataAnalytics;
