import React from 'react';
import Card from '../blocks/Card';
import { contentfulClient } from '@/app/libs/contentful';

const getLatestNews = async () => {
  const latest = await contentfulClient.getEntries({
    order: '-sys.createdAt',
    content_type: 'newsPost',
    limit: 3,
  });

  return latest;
};

const LatestNewsList = async () => {
  const latest = await getLatestNews();

  return (
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
  );
};

export default LatestNewsList;
