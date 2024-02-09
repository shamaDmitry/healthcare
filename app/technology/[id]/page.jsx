import Container from '@/app/Components/atoms/Container';
import Headline from '@/app/Components/atoms/Headline';

const Page = ({ params }) => {
  return (
    <div className="bg-light">
      <div className="min-h-screen pt-[60px] flex flex-col">
        <Container className="flex flex-1 pt-10">
          <div className="flex flex-col items-center justify-between py-10">
            <Headline className="text-center text-secondary">
              {JSON.stringify(params)}
            </Headline>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Page;
