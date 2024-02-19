import LoadingDots from '../Components/atoms/LoadingDots';

const Loading = props => {
  console.log(props);

  return (
    <div className="z-[1000] flex items-center justify-center w-full h-screen bg-black/80">
      <LoadingDots color="bg-red-500" />
    </div>
  );
};

export default Loading;
