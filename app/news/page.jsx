import Container from '../Components/atoms/Container';
import Headline from '../Components/atoms/Headline';
import SubHeadline from '../Components/atoms/SubHeadline';
import NewsCard from '../Components/blocks/NewsCard';
import Card from '../Components/blocks/Card';
import Paginate from '../Components/blocks/Pagination';
import { contentfulClient } from '../libs/contentful';
import CategoryLinks from '../Components/News/CategoryLinks';

async function getData(query) {
  const news = await contentfulClient.getEntries({
    'fields.highlights': false,
    order: '-sys.createdAt',
    content_type: 'newsPost',
    'fields.category': query === 'all' ? '' : query,
  });

  return news;
}

async function getHighlights() {
  const highlights = await contentfulClient.getEntries({
    'fields.highlights': true,
    order: '-sys.createdAt',
    content_type: 'newsPost',
  });

  return highlights;
}

const Page = async ({ params, searchParams }) => {
  const category = searchParams?.category || 'all';
  const news = await getData(category);
  const highlights = await getHighlights();

  return (
    <div className="flex-1 bg-light pt-[60px]">
      <Container className="pt-20 mb-10">
        <Headline className="mb-10">News</Headline>
        <SubHeadline className="mb-5">Highlights</SubHeadline>

        {highlights.items.length === 3 ? (
          <div className="grid gap-4 mb-10 md:grid-cols-3">
            <div className="grid col-span-2">
              <NewsCard data={highlights.items[0]} />
            </div>

            <div className="grid grid-flow-row grid-rows-2 gap-4">
              <NewsCard data={highlights.items[1]} />
              <NewsCard data={highlights.items[2]} />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 mb-10">
            <NewsCard data={highlights.items[0]} />
            <NewsCard data={highlights.items[1]} />
          </div>
        )}

        <CategoryLinks activeLink={category} />

        <div className="grid grid-cols-3 gap-x-6 gap-y-12">
          {!news.items.length && (
            <p className="font-medium capitalize text-gray">nothing is here</p>
          )}

          {news.items &&
            news.items.map(item => {
              return (
                <Card
                  key={item.sys.id}
                  imageSrc={`https:${item.fields.heroImage.fields.file.url}`}
                  category={item.fields.category}
                  date={item.fields.publishDate}
                  description={
                    item.fields.description.content[0].content[0].value
                  }
                  link={`/news/${item.sys.id}`}
                />
              );
            })}
        </div>

        {/* <Paginate
          itemsPerPage={2}
          totalData={news.total}
          paginate={paginate}
          previousPage={previousPage}
          nextPage={nextPage}
        /> */}
      </Container>
    </div>
  );
};

export default Page;
