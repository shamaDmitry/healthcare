const SliderProgress = ({ scrollProgress = 0 }) => {
  return (
    <div className="overflow-hidden my-10 w-full sm:max-w-[200px] h-[2px] bg-gray/10 relative">
      <div
        className="absolute top-0 left-0 h-full transition bg-gentle-black"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default SliderProgress;
