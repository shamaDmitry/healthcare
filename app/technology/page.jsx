import Container from '../Components/atoms/Container';
import Headline from '../Components/atoms/Headline';

const Page = () => {
  return (
    <div className="bg-light">
      <div className="min-h-screen pt-[60px] flex flex-col">
        <Container className="flex flex-1 pt-10">
          <div className="flex flex-col items-center justify-between py-10">
            <Headline className="text-center text-secondary">
              Technology
            </Headline>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Page;
