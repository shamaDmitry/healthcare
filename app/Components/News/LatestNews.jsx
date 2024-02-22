import React, { Suspense } from 'react';
import Container from '../atoms/Container';
import Headline from '../atoms/Headline';
import Link from 'next/link';
import NewsCardSkeleton from './NewsCardSkeleton';
import LatestNewsList from './LatestNewsList';

export const LatestNewsSkeleton = () => {
  return (
    <div className="grid gap-4 mb-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8 md:mb-12">
      {[...Array(3).keys()].map(item => {
        return <NewsCardSkeleton key={item} />;
      })}
    </div>
  );
};

const LatestNews = async () => {
  return (
    <section className="py-10 bg-light">
      <Container>
        <Headline className="mb-5">Latest news</Headline>

        <Suspense fallback={<LatestNewsSkeleton />}>
          <LatestNewsList />
        </Suspense>

        <div className="px-12 text-center">
          <Link
            href="/news"
            className="inline-flex items-center justify-center px-5 py-3 font-bold text-white capitalize bg-secondary"
          >
            view all news
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default LatestNews;
