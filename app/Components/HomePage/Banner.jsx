import Link from 'next/link';
import Container from '../atoms/Container';
import Headline from '../atoms/Headline';
import SubHeadline from '../atoms/SubHeadline';
import DoubleArrowDown from '../icons/DoubleArrowDown';
import PlayArrow from '../icons/PlayArrow';

const Banner = () => {
  const beforeClasses =
    'before:pointer-events-none before:animation-delay-300 before:animate-ping before:border-white before:w-[110px] before:block before:h-[110px] before:absolute before:border before:rounded-full before:opacity-30';
  const afterClasses =
    'after:pointer-events-none after:animate-ping before:animation-delay-400 after:border-white after:w-[130px] after:block after:h-[130px] after:absolute after:border after:rounded-full after:opacity-30';

  return (
    <div className="relative pt-[60px] flex flex-col justify-center items-center min-h-screen bg-cover bg-right-bottom bg-no-repeat bg-home-banner">
      <Container className="flex-1 flex justify-center pt-[150px] pb-10 text-white before:bg-black/40 before:absolute before:w-full before:h-full before:top-0 before:left-0">
        <div className="flex flex-col items-center md:max-w-screen-md">
          <Headline className="relative mb-6 text-center">
            Advancing healthcare quality through innovation
          </Headline>

          <SubHeadline className="relative mb-6 text-center">
            We serve our customers by advancing population health, improving
            patient care and safety, engaging caregivers and other stakeholders,
            and effectively managing healthcare costs through quality
            improvement, strategic communication, and innovation.
          </SubHeadline>

          <div className="my-5">
            <button className="relative inline-flex items-center gap-10 p-5 outline-none cursor-pointer pointer-events-auto group">
              <div
                className={`group-hover:opacity-50 transition duration-200 flex-shrink-0 border flex items-center justify-center border-white rounded-full w-[90px] h-[90px] bg-mask relative ${beforeClasses} ${afterClasses}`}
              >
                <PlayArrow />
              </div>
              <span className="pb-1 relative h-full font-bold text-white drop-shadow-lg before:w-0 before:h-[2px] before:absolute before:bottom-0 before:left-0 group-hover:before:w-full before:bg-white before:transition-all before:duration-300">
                Watch video
              </span>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
