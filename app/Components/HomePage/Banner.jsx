import Container from '../atoms/Container';
import Headline from '../atoms/Headline';
import SubHeadline from '../atoms/SubHeadline';
import PlayArrow from '../icons/PlayArrow';
import VideoModal from './VideoModal';

const Banner = () => {
  return (
    <>
      <div className="relative pt-[60px] flex flex-col justify-center items-center min-h-screen bg-cover bg-right-bottom bg-no-repeat bg-home-banner">
        <Container className="flex-1 flex justify-center pt-[150px] pb-10 text-white before:bg-black/40 before:absolute before:w-full before:h-full before:top-0 before:left-0">
          <div className="flex flex-col items-center md:max-w-screen-md">
            <Headline className="relative mb-6 text-center">
              Advancing healthcare quality through innovation
            </Headline>

            <SubHeadline className="relative mb-6 text-center">
              We serve our customers by advancing population health, improving
              patient care and safety, engaging caregivers and other
              stakeholders, and effectively managing healthcare costs through
              quality improvement, strategic communication, and innovation.
            </SubHeadline>

            <div className="my-5">
              <VideoModal
                video="/video/video.mp4"
                videoWidth={1920}
                videoHeight={1080}
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Banner;
