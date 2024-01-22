import Link from 'next/link';
import ArrowForward from '../icons/ArrowForward';
import Headline from '../atoms/Headline';

const CTA = props => {
  return (
    <section className="space-y-6 text-white bg-[url('/images/cta/background.jpg')] bg-center bg-no-repeat bg-cover p-5 flex flex-col justify-center items-center min-h-[420px]">
      <Headline className=''>Let`s have a talk</Headline>
      <Link
        href="/"
        className="flex items-center justify-center px-5 py-2 font-bold text-white capitalize bg-secondary gap-x-2"
      >
        <span>contact us</span> <ArrowForward />
      </Link>
    </section>
  );
};

export default CTA;
