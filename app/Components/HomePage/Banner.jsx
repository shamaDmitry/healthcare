import Link from 'next/link';
import Container from '../atoms/Container';
import Headline from '../atoms/Headline';
import SubHeadline from '../atoms/SubHeadline';
import DoubleArrowDown from '../icons/DoubleArrowDown';
import PlayArrow from '../icons/PlayArrow';

const Banner = () => {
  const beforeClasses =
    'before:pointer-events-none before:animate-ping before:border-white before:w-[110px] before:block before:h-[110px] before:absolute before:border before:rounded-full before:opacity-30';
  const afterClasses =
    'after:pointer-events-none after:animate-ping after:border-white after:w-[130px] after:block after:h-[130px] after:absolute after:border after:rounded-full after:opacity-30';

  return (
    <section className="relative pt-[60px] flex flex-col justify-center items-center min-h-screen bg-cover bg-right-bottom bg-no-repeat  bg-home-banner">
      <Container className="flex-1 flex flex-col items-center justify-center pt-[150px] pb-10 text-white before:bg-black/40 before:absolute before:w-full before:h-full before:top-0">
        <Headline className="relative mb-6">
          Advancing healthcare quality through innovation
        </Headline>

        <SubHeadline className="relative mb-6 text-center">
          We serve our customers by advancing population health, improving
          patient care and safety, engaging caregivers and other stakeholders,
          and effectively managing healthcare costs through quality improvement,
          strategic communication, and innovation.
        </SubHeadline>

        <div className="text-right">
          <button className="inline-flex items-center gap-10 p-5 outline-none group">
            <div
              className={`flex-shrink-0 border flex items-center justify-center border-white rounded-full w-[90px] h-[90px] bg-mask relative ${beforeClasses} ${afterClasses}`}
            >
              <PlayArrow />
            </div>
            <span className="font-bold text-white drop-shadow-lg group-hover:bg-red-400">
              Watch video
            </span>
          </button>
        </div>

        <Link
          href="#more"
          className="flex items-center gap-4 mt-auto font-bold text-white animate-bounce"
        >
          <DoubleArrowDown />
          Discover more
        </Link>
      </Container>
    </section>
  );
};

export default Banner;
