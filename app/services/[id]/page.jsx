import Container from '@/app/Components/atoms/Container';
import Headline from '@/app/Components/atoms/Headline';

const Page = ({ params }) => {
  return (
    <section className="relative bg-light">
      <section className="relative pt-[60px] flex flex-col justify-center items-center min-h-screen bg-cover bg-right-bottom bg-no-repeat bg-services-banner">
        <Container className="flex-1 flex flex-col items-center justify-center pt-[150px] pb-10 text-white before:bg-black/40 before:absolute before:w-full before:h-full before:top-0">
          <Headline className="relative mb-6">
            {JSON.stringify(params)}
          </Headline>
        </Container>
      </section>
    </section>
  );
};

export default Page;
