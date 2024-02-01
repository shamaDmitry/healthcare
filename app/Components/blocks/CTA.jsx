import Link from 'next/link';
import ArrowForward from '../icons/ArrowForward';
import Headline from '../atoms/Headline';
import Container from '../atoms/Container';
import CustomButton from '../atoms/Button';

const CTA = props => {
  return (
    <section className="text-white bg-[url('/images/cta/background.jpg')] bg-center bg-no-repeat bg-cover flex flex-col justify-center min-h-[420px]">
      <Container className="flex flex-col items-center space-y-6">
        <Headline className="">Let`s have a talk</Headline>

        <CustomButton
          as="Link"
          href="/contact"
          className="text-white bg-secondary hover:bg-secondary/80 h-[58px] inline-flex items-center justify-center px-5 py-2 font-bold capitalize gap-x-2"
        >
          <span>contact us</span> <ArrowForward />
        </CustomButton>
      </Container>
    </section>
  );
};

export default CTA;
