import Container from '@/app/Components/atoms/Container';
import Headline from '@/app/Components/atoms/Headline';

const Page = ({ params }) => {
  return (
    <section className="py-[120px]">
      <Container>
        <Headline>category {JSON.stringify(params.id)}</Headline>
      </Container>
    </section>
  );
};

export default Page;
