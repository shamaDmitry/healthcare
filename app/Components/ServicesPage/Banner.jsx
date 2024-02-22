import React from 'react';
import Container from '../atoms/Container';
import Headline from '../atoms/Headline';
import SubHeadline from '../atoms/SubHeadline';

const Banner = () => {
  return (
    <section className="relative pt-[60px] flex flex-col justify-center items-center min-h-screen bg-cover bg-right-bottom bg-no-repeat bg-services-banner">
      <Container className="flex-1 flex flex-col items-center justify-center pt-[150px] pb-10 text-white before:bg-black/40 before:absolute before:w-full before:h-full before:top-0">
        <Headline className="relative mb-6">
          XXXXXX offers business process
        </Headline>

        <SubHeadline className="relative mb-6 text-center">
          Outsourcing and information technology-enabled services that improve
          healthcare quality, manage costs, and empower patients and their
          caregiver
        </SubHeadline>
      </Container>
    </section>
  );
};

export default Banner;
