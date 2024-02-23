const Loading = () => {
  return (
    <div className="flex items-center justify-center">
      <div
        // style={{ width: `${size}px`, height: `${size}px` }}
        className="w-20 h-20 animate-spin"
      >
        <div className="w-full h-full border-8 rounded-[65%] border-light-gray border-t-secondary border-b-secondary" />
      </div>
    </div>
  );
};

export default Loading;
