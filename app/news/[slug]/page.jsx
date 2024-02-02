import Container from '@/app/Components/atoms/Container';
import Headline from '@/app/Components/atoms/Headline';
import Card from '@/app/Components/blocks/Card';
import NewsCard from '@/app/Components/blocks/NewsCard';
import ArrowBackward from '@/app/Components/icons/ArrowBackward';
import Link from 'next/link';

const Page = ({ params }) => {
  return (
    <div className="flex-1 bg-light pt-[60px] mb-10">
      <Container className="mb-[140px]">
        <div className="my-10">
          <Link
            href="/news"
            className="inline-flex items-center gap-x-2 hover:opacity-50"
          >
            <ArrowBackward />

            <span className="text-sm font-medium uppercase text-gray">
              back to news
            </span>
          </Link>
        </div>

        <Headline className="mb-4">
          Lorem ipsum dolor sit amet consec tetur adipi scing elit
        </Headline>
      </Container>

      <div className="min-h-[520px] bg-[url('/images/news/news01.jpg')] bg-center bg-no-repeat bg-cover"></div>

      <Container className="">
        <div className="grid grid-cols-3 gap-16">
          <div className="col-span-2">
            <div className="grid grid-cols-3 p-8 -translate-y-1/2 bg-white divide-x shadow divide-separator">
              <div className="flex flex-col items-center justify-center">
                <h4 className="mb-2 text-lg text-gray">Category</h4>
                <p className="font-medium text-gentle-black">
                  Innovation stories
                </p>
              </div>

              <div className="flex flex-col items-center justify-center">
                <h4 className="mb-2 text-lg text-gray">Published on</h4>
                <p className="font-medium text-gentle-black">01 May, 2023</p>
              </div>

              <div className="flex flex-col items-center justify-center">
                <h4 className="mb-2 text-lg text-gray">Share</h4>
                <p className="font-medium text-gentle-black">01 May, 2023</p>
              </div>
            </div>

            <div className="font-medium text-black">
              <p className="mb-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                nostrum delectus dignissimos corrupti obcaecati dolore, quidem
                voluptatibus. Est, sequi repellendus laboriosam consectetur
                exercitationem veritatis. Maxime distinctio blanditiis eius
                voluptatibus eaque?
              </p>

              <p className="mb-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                nostrum delectus dignissimos corrupti obcaecati dolore, quidem
                voluptatibus. Est, sequi repellendus laboriosam consectetur
                exercitationem veritatis. Maxime distinctio blanditiis eius
                voluptatibus eaque?
              </p>

              <p className="mb-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                nostrum delectus dignissimos corrupti obcaecati dolore, quidem
                voluptatibus. Est, sequi repellendus laboriosam consectetur
                exercitationem veritatis. Maxime distinctio blanditiis eius
                voluptatibus eaque?
              </p>
            </div>
          </div>

          <div className="py-10">
            <h3 className="mb-4 text-xl font-bold text-gray">
              Highlights news
            </h3>
            <div className="grid grid-rows-2 gap-4">
              <NewsCard />

              <NewsCard />
            </div>
          </div>
        </div>

        <section>
          <Headline className="mb-4">More like this</Headline>

          <div className="grid grid-cols-3 gap-6">
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
              link="/news/2"
            />
            <Card
              imageSrc="https://placehold.co/600x400"
              category="Articles"
              date="01 May, 2023"
              body="Mend the Gap! A New Perspective to Address Quality Concerns"
              link="/news/2"
            />
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Page;
