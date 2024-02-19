import LoadingDots from '../Components/atoms/LoadingDots';

const Loading = props => {
  console.log(props);

  return (
    <div className="fixed top-0 left-0 z-[1000] flex items-center justify-center w-full h-screen bg-red-800">
      <LoadingDots color="bg-red-500"></LoadingDots>
    </div>
  );
};

export default Loading;
