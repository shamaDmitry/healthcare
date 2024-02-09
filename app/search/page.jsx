import Container from '../Components/atoms/Container';
import Headline from '../Components/atoms/Headline';
import { contentfulClient } from '../libs/contentful';

async function getSearch(term) {
  const data = await contentfulClient.getEntries({
    content_type: 'newsPost',
    query: term,
  });

  return data;
}

const Page = async ({ params, searchParams }) => {
  const data = await getSearch(searchParams.term);

  if (!searchParams.term) {
    return (
      <div className="flex-1 bg-light-gray pt-[120px]">
        <Container className="">
          <Headline className="text-center">Search:</Headline>

          <p> Nothing is here</p>
        </Container>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-light-gray pt-[120px]">
      <Container className="">
        <Headline className="text-center">
          Search:
          <span className="ml-2 text-secondary">{searchParams.term}</span>
        </Headline>

        <p className="pb-2 mb-4 border-b border-separator">
          Founded: <span className="font-bold">{data.total}</span>
        </p>

        <pre className="h-64 overflow-auto">
          {JSON.stringify(data, null, 2)}
        </pre>
      </Container>
    </div>
  );
};

export default Page;
