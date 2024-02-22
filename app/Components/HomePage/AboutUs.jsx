import React from 'react';
import Container from '../atoms/Container';
import Headline from '../atoms/Headline';
import Link from 'next/link';

const AboutUs = () => {
  return (
    <section className="py-10 bg-light">
      <Container>
        <div className="flex items-center py-10 px-5 md:px-20 relative bg-[url('/images/homepage/about-us.jpg')] min-h-[412px] bg-center bg-no-repeat bg-cover">
          <div className="bg-gradient-to-r from-[#000000c9] h-full pointer-events-none absolute top-0 left-0 w-full" />

          <div className="relative text-white md:w-1/2">
            <Headline className="mb-6">About us</Headline>

            <p className="mb-6 font-medium">
              XXXXXX is a technology-enabled organization that touches key
              facets of the journeys of patients and caregivers through the
              healthcare system.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center justify-center px-5 py-3 font-bold text-white capitalize bg-secondary"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
