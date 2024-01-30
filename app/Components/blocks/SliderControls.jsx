import ArrowForward from '../icons/ArrowForward';

const SliderControls = ({ prev, next }) => {
  return (
    <div className="flex gap-x-3">
      <button
        className="flex items-center justify-center w-12 h-12 transition border hover:opacity-60 border-gentle-black"
        onClick={prev}
      >
        <ArrowForward className="rotate-180" />
      </button>

      <button
        className="flex items-center justify-center w-12 h-12 transition border hover:opacity-60 border-gentle-black"
        onClick={next}
      >
        <ArrowForward />
      </button>
    </div>
  );
};

export default SliderControls;
