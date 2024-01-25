import Link from 'next/link';
import Container from '../Components/atoms/Container';
import Headline from '../Components/atoms/Headline';
import SubHeadline from '../Components/atoms/SubHeadline';
import NewsCard from '../Components/blocks/NewsCard';
import Card from '../Components/blocks/Card';
import Paginate from '../Components/blocks/Pagination';

const Page = () => {
  return (
    <div className="flex-1 bg-light pt-[60px]">
      <Container className="pt-20 mb-10">
        <Headline className="mb-10">News</Headline>
        <SubHeadline className="mb-5">Highlights</SubHeadline>

        <div className="grid grid-cols-3 gap-4 mb-10">
          <div className="grid col-span-2">
            <NewsCard />
          </div>

          <div className="grid grid-flow-row grid-rows-2 gap-4">
            <NewsCard />

            <NewsCard />
          </div>
        </div>

        <div className="mb-10 flex font-medium items-center *:flex *:items-center text-gray gap-x-2 *:before:w-[1px] *:before:bg-current *:before:h-[12px] *:before:mr-3 *:before:ml-1">
          <Link href="#" className="before:hidden">
            All
          </Link>
          <Link href="#">Press Release</Link>
          <Link href="#">Articles</Link>
          <Link href="#">Innovation Stories</Link>
          <Link href="#">Company News</Link>
        </div>

        <div className="grid grid-cols-3 gap-x-6 gap-y-12">
          <Card
            imageSrc="https://placehold.co/600x400"
            category="Articles"
            date="01 May, 2023"
            body="Mend the Gap! A New Perspective to Address Quality Concerns"
            link="/news/1"
          />
          <Card
            imageSrc="https://placehold.co/600x400"
            category="Articles"
            date="01 May, 2023"
            body="Mend the Gap! A New Perspective to Address Quality Concerns"
            link="/news/2"
          />
          <Card
            imageSrc="https://placehold.co/600x400"
            category="Articles"
            date="01 May, 2023"
            body="Mend the Gap! A New Perspective to Address Quality Concerns"
            link="/news/3"
          />
          <Card
            imageSrc="https://placehold.co/600x400"
            category="Articles"
            date="01 May, 2023"
            body="Mend the Gap! A New Perspective to Address Quality Concerns"
            link="/news/4"
          />
          <Card
            imageSrc="https://placehold.co/600x400"
            category="Articles"
            date="01 May, 2023"
            body="Mend the Gap! A New Perspective to Address Quality Concerns"
            link="/news/4"
          />
          <Card
            imageSrc="https://placehold.co/600x400"
            category="Articles"
            date="01 May, 2023"
            body="Mend the Gap! A New Perspective to Address Quality Concerns"
            link="/news/4"
          />
        </div>

        <Paginate />
      </Container>
    </div>
  );
};

export default Page;
