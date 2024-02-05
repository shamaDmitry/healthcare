import Link from 'next/link';
import Container from '../Components/atoms/Container';
import Headline from '../Components/atoms/Headline';
import SubHeadline from '../Components/atoms/SubHeadline';
import NewsCard from '../Components/blocks/NewsCard';
import Card from '../Components/blocks/Card';
import Paginate from '../Components/blocks/Pagination';
import { contentfulClient } from '../libs/contentful';
import CategoryLinks from '../Components/News/CategoryLinks';

async function getData() {
  const news = await contentfulClient.getEntries({ content_type: 'newsPost' });

  return news;
}

const Page = async () => {
  const news = await getData();

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

        <CategoryLinks />

        <div className="grid grid-cols-3 gap-x-6 gap-y-12">
          {news.items.map(item => {
            return (
              <Card
                key={item.sys.id}
                imageSrc={`https:${item.fields.heroImage.fields.file.url}`}
                category={item.fields.category}
                date={item.fields.publishDate}
                description={
                  item.fields.description.content[0].content[0].value
                }
                link={`/news/${item.fields.slug}`}
              />
            );
          })}
        </div>

        {/* <Paginate /> */}
      </Container>
    </div>
  );
};

export default Page;
