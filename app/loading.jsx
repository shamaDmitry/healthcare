import Loading from './Components/atoms/Loading';

const LoadingScreen = () => {
  return (
    <div className="absolute top-0 left-0 z-[1000] flex items-center justify-center w-full h-screen bg-black/90">
      <Loading />
    </div>
  );
};

export default LoadingScreen;
