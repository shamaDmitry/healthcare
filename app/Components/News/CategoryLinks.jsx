import { contentfulClient } from '@/app/libs/contentful';
import Link from 'next/link';

async function getData() {
  const category = await contentfulClient.getEntries({
    content_type: 'category',
  });

  return category;
}

const CategoryLinks = async () => {
  const category = await getData();

  return (
    <div className="mb-10 flex font-medium items-center *:flex *:items-center text-gray gap-x-2 *:before:w-[1px] *:before:bg-current *:before:h-[12px] *:before:mr-3 *:before:ml-1">
      <Link href="/news" className="before:hidden" scroll={false}>
        All
      </Link>

      {/* <pre>{JSON.stringify(category, null, 2)}</pre> */}

      {category.items.map(item => {
        return (
          <Link
            href={`/news?category=${item.fields.categoryName}`}
            key={item.sys.id}
            scroll={false}
          >
            {item.fields.categoryName}
          </Link>
        );
      })}
    </div>
  );
};

export default CategoryLinks;
