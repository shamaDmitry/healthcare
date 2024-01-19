import DoubleArrowDown from '../icons/DoubleArrowDown';
import PlayArrow from '../icons/PlayArrow';

const Banner = () => {
  const beforeClasses =
    'before:border-white before:w-[110px] before:block before:h-[110px] before:absolute before:border before:rounded-full before:opacity-30';
  const afterClasses =
    'after:border-white after:w-[130px] after:block after:h-[130px] after:absolute after:border after:rounded-full after:opacity-30';

  return (
    <section className="pt-[60px] flex flex-col justify-center items-center min-h-screen bg-cover bg-right-bottom bg-no-repeat  bg-home-banner">
      <div className="container space-y-5 text-white">
        <h1>Advancing healthcare quality through innovation</h1>

        <h2>
          We serve our customers by advancing population health, improving
          patient care and safety, engaging caregivers and other stakeholders,
          and effectively managing healthcare costs through quality improvement,
          strategic communication, and innovation.
        </h2>

        <button className="flex items-center gap-4 text-white">
          <DoubleArrowDown />
          Discover more
        </button>

        <button className="flex items-center gap-10 p-5 peer">
          <div
            className={`flex-shrink-0 border flex items-center justify-center border-white rounded-full w-[90px] h-[90px] bg-mask relative ${beforeClasses} ${afterClasses}`}
          >
            <PlayArrow />
          </div>
          <span className="font-bold text-white">Watch video</span>
        </button>
      </div>
    </section>
  );
};

export default Banner;
