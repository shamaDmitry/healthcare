import Link from 'next/link';
import Container from '../Components/atoms/Container';
import Headline from '../Components/atoms/Headline';
import SubHeadline from '../Components/atoms/SubHeadline';
import DoubleArrowDown from '../Components/icons/DoubleArrowDown';

const Page = () => {
  return (
    <div className="flex-1 flex flex-col bg-light pt-[60px]">
      <Container className="flex pt-10">
        <div className="flex flex-col items-center justify-between py-10">
          <Headline className="text-center text-secondary">About</Headline>

          <SubHeadline className="mb-10 text-center text-primary">
            Technology-Enabled Organization
          </SubHeadline>

          <p>
            that touches key facets of the journeys of patients and caregivers
            through the healthcare system. We offers information technology,
            program integrity, quality improvement, strategic communications,
            and business process outsourcing solutions.
          </p>

          <Link
            href="#more"
            className="flex items-center gap-4 py-8 font-bold text-gray animate-bounce"
          >
            <DoubleArrowDown />
            Discover more
          </Link>
        </div>
      </Container>

      <div className="mx-auto max-w-screen-2xl px-[108px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
        explicabo! Debitis earum voluptate quia exercitationem eius at corporis.
        Doloremque praesentium voluptatem officia mollitia eveniet suscipit
        iusto voluptate provident labore dolorem?
      </div>
    </div>
  );
};

export default Page;
