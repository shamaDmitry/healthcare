import Banner from './Components/HomePage/Banner';
import Link from 'next/link';
import CTA from './Components/blocks/CTA';
import Card from './Components/blocks/Card';
import Headline from './Components/atoms/Headline';
import Container from './Components/atoms/Container';
import { contentfulClient } from './libs/contentful';
import Solutions from './Components/HomePage/Solutions';
import ProviderServices from './Components/HomePage/ProviderServices';
import PayerServices from './Components/HomePage/PayerServices';
import Government from './Components/HomePage/Government';
import AboutUs from './Components/HomePage/AboutUs';

const getLatestNews = async () => {
  const latest = await contentfulClient.getEntries({
    order: '-sys.createdAt',
    content_type: 'newsPost',
    limit: 3,
  });

  return latest;
};

export default async function Home() {
  const latest = await getLatestNews();

  return (
    <section className="relative bg-light">
      <Banner />

      <Solutions />

      <ProviderServices />

      <PayerServices />

      <Government />

      <section className="py-10 bg-light">
        <AboutUs />

        <Container>
          <Headline className="mb-5">Latest news</Headline>

          <div className="grid gap-4 mb-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8 md:mb-12">
            {latest.items.map(item => {
              return (
                <Card
                  key={item.sys.id}
                  imageSrc={`https:${item.fields.heroImage.fields.file.url}`}
                  category={item.fields.category}
                  date={item.fields.publishDate}
                  description={item.fields.title}
                  link={`/news/${item.sys.id}`}
                />
              );
            })}
          </div>

          <div className="px-12 text-center md:text-right">
            <Link
              href="/news"
              className="inline-flex items-center justify-center px-5 py-3 font-bold text-white capitalize bg-secondary"
            >
              view all news
            </Link>
          </div>
        </Container>
      </section>

      <CTA />
    </section>
  );
}
