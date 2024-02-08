import Container from '@/app/Components/atoms/Container';
import Headline from '@/app/Components/atoms/Headline';
import Card from '@/app/Components/blocks/Card';
import NewsCard from '@/app/Components/blocks/NewsCard';
import ArrowBackward from '@/app/Components/icons/ArrowBackward';
import { contentfulClient } from '@/app/libs/contentful';
import Image from 'next/image';
import Link from 'next/link';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

async function getData(params) {
  return await contentfulClient.getEntry(params.slug);
}

async function getHighlights() {
  const highlights = await contentfulClient.getEntries({
    'fields.highlights': true,
    order: '-sys.createdAt',
    content_type: 'newsPost',
  });

  return highlights;
}

const Page = async ({ params }) => {
  const data = await getData(params);
  const highlights = await getHighlights();
  const document = {
    nodeType: 'document',
    content: [
      {
        nodeType: 'paragraph',
        content: [
          {
            nodeType: 'text',
            value: 'Hello world!',
            marks: [],
          },
        ],
      },
    ],
  };

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

        <Headline className="mb-4">{data.fields.title}</Headline>
      </Container>

      <div className={`min-h-[520px] relative`}>
        <Image
          src={`https:${data.fields.heroImage.fields.file.url}`}
          alt=""
          className="absolute top-0 left-0 object-cover w-full h-full"
          width={1000}
          height={1000}
          priority
        />
      </div>

      <Container className="">
        <div className="grid grid-cols-3 gap-16">
          <div className="col-span-2">
            <div className="grid grid-cols-3 p-8 -translate-y-1/2 bg-white divide-x shadow divide-separator">
              <div className="flex flex-col items-center justify-center">
                <h4 className="mb-2 text-lg text-gray">Category</h4>
                <p className="font-medium text-gentle-black">
                  {data.fields.category}
                </p>
              </div>

              <div className="flex flex-col items-center justify-center">
                <h4 className="mb-2 text-lg text-gray">Published on</h4>
                <p className="font-medium text-gentle-black">
                  {data.fields.publishDate}
                </p>
              </div>

              <div className="flex flex-col items-center justify-center">
                <h4 className="mb-2 text-lg text-gray">Share</h4>
                <p className="font-medium text-gentle-black">
                  {data.fields.publishDate}
                </p>
              </div>
            </div>

            <div
              className="font-medium text-black"
              dangerouslySetInnerHTML={{
                __html: documentToHtmlString(data.fields.body, {
                  renderNode: {
                    [BLOCKS.PARAGRAPH]: (node, next) =>
                      `<p class="mb-4">${next(node.content)}</p>`,
                  },
                }),
              }}
            />
          </div>

          <div className="py-10">
            <h3 className="mb-4 text-xl font-bold text-gray">
              Highlights news
            </h3>

            <div className="grid grid-rows-3 gap-4">
              {highlights.items.map(data => {
                return <NewsCard data={data} key={data} />;
              })}
            </div>
          </div>
        </div>

        <section>
          <Headline className="mb-4">More like this</Headline>

          <div className="grid grid-cols-3 gap-6">
            {highlights.items.map(item => {
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
        </section>
      </Container>
    </div>
  );
};

export default Page;
