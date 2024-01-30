'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import ExternalLink from '../atoms/ExternalLink';
import SliderControls from '../blocks/SliderControls';
import SliderProgress from '../blocks/SliderProgress';

const LeadershipSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({});
  const [scrollProgress, setScrollProgress] = useState(0);

  const onScroll = useCallback(emblaApi => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll(emblaApi);

    emblaApi.on('reInit', onScroll);
    emblaApi.on('scroll', onScroll);
  }, [emblaApi, onScroll]);

  return (
    <>
      <div className="flex mb-24">
        <p className="text-gentle-black max-w-[846px]">
          We believe that corporate governance enhances the long-term success of
          the organization. XXXXXX is committed to conducting its business
          activities with integrity and excellence, ensuring the trust of its
          customers, employees, and business partners.
        </p>

        {emblaApi && (
          <div className="ml-auto">
            <SliderControls
              prev={emblaApi.scrollPrev}
              next={emblaApi.scrollNext}
            />
          </div>
        )}
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex cursor-grab gap-x-8">
          <section className="flex p-6 shrink-0 md:w-[500px] bg-white gap-x-6">
            <div className="overflow-hidden rounded-full w-[157px] h-[157px] shrink-0">
              <Image
                src="/images/homepage/image01.jpg"
                alt=""
                className="w-full"
                width={611}
                height={664}
                priority
              />
            </div>

            <div className="flex flex-col w-full">
              <h1 className="mb-1 font-bold text-gentle-black">
                John C. Doe, Esq.
              </h1>
              <p className="text-gray">Chairman</p>

              <div className="mt-auto text-right">
                <ExternalLink href="test" />
              </div>
            </div>
          </section>

          <section className="flex p-6 shrink-0 md:w-[500px] bg-white gap-x-6">
            <div className="overflow-hidden rounded-full w-[157px] h-[157px] shrink-0">
              <Image
                src="/images/homepage/image01.jpg"
                alt=""
                className="w-full"
                width={611}
                height={664}
                priority
              />
            </div>

            <div className="flex flex-col w-full">
              <h1 className="mb-1 font-bold text-gentle-black">
                John C. Doe, Esq.
              </h1>
              <p className="text-gray">Chairman</p>

              <div className="mt-auto text-right">
                <ExternalLink href="test" />
              </div>
            </div>
          </section>

          <section className="flex p-6 shrink-0 md:w-[500px] bg-white gap-x-6">
            <div className="overflow-hidden rounded-full w-[157px] h-[157px] shrink-0">
              <Image
                src="/images/homepage/image01.jpg"
                alt=""
                className="w-full"
                width={611}
                height={664}
                priority
              />
            </div>

            <div className="flex flex-col w-full">
              <h1 className="mb-1 font-bold text-gentle-black">
                John C. Doe, Esq.
              </h1>
              <p className="text-gray">Chairman</p>

              <div className="mt-auto text-right">
                <ExternalLink href="test" />
              </div>
            </div>
          </section>

          <section className="flex p-6 shrink-0 md:w-[500px] bg-white gap-x-6">
            <div className="overflow-hidden rounded-full w-[157px] h-[157px] shrink-0">
              <Image
                src="/images/homepage/image01.jpg"
                alt=""
                className="w-full"
                width={611}
                height={664}
                priority
              />
            </div>

            <div className="flex flex-col w-full">
              <h1 className="mb-1 font-bold text-gentle-black">
                John C. Doe, Esq.
              </h1>
              <p className="text-gray">Chairman</p>

              <div className="mt-auto text-right">
                <ExternalLink href="test" />
              </div>
            </div>
          </section>
        </div>
      </div>

      <SliderProgress scrollProgress={scrollProgress} />
    </>
  );
};

export default LeadershipSlider;
