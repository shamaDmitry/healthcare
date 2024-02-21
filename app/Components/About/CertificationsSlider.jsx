'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState } from 'react';
import SliderControls from '../blocks/SliderControls';

import Headline from '../atoms/Headline';
import SubHeadline from '../atoms/SubHeadline';
import CertificateCard from '../blocks/CertificateCard';
import { slideData } from './CertificationsSliderData';

const Slide = ({ title, body }) => {
  return (
    <div className="mb-12 space-y-3 shrink-0 basis-full text-gray">
      <p>{title}</p>

      <p>{body}</p>
    </div>
  );
};

const CertificationsSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({});

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.scrollTo(activeSlideIndex);
  }, [emblaApi, activeSlideIndex]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12">
      <div className="flex gap-5 pb-5 mb-5 overflow-auto sm:grid-cols-1 md:mb-0 md:grid md:grid-cols-1 lg:grid-cols-2">
        {slideData.map((slide, index) => {
          return (
            <CertificateCard
              key={slide.id}
              active={index === activeSlideIndex}
              imageSrc={slide.image}
              onClick={() => {
                setActiveSlideIndex(index);
                emblaApi.scrollTo(activeSlideIndex);
              }}
            />
          );
        })}
      </div>

      <div className="md:col-span-2">
        <section>
          <Headline className="mb-3 capitalize text-secondary">
            certifications
          </Headline>

          <SubHeadline className="mb-9">Our certifications</SubHeadline>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex cursor-grab">
              {slideData.map(slide => {
                return (
                  <Slide key={slide.id} title={slide.title} body={slide.body} />
                );
              })}
            </div>
          </div>

          <div className="ml-auto">
            <SliderControls
              prev={() => {
                if (emblaApi.canScrollPrev()) {
                  setActiveSlideIndex(prevState => prevState - 1);
                  emblaApi.scrollPrev();
                }
              }}
              next={() => {
                if (emblaApi.canScrollNext()) {
                  setActiveSlideIndex(prevState => prevState + 1);
                  emblaApi.scrollNext();
                }
              }}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default CertificationsSlider;
