import { contentfulClient } from '@/app/libs/contentful';
import classNames from 'classnames';
import Link from 'next/link';

async function getData() {
  const category = await contentfulClient.getEntries({
    content_type: 'category',
  });

  return category;
}

const CategoryLinks = async ({ activeLink }) => {
  const category = await getData();

  return (
    <div className="mb-10 flex font-medium items-center *:flex *:items-center text-gray gap-x-2 *:before:w-[1px] *:before:bg-current *:before:h-[12px] *:before:mr-3 *:before:ml-1">
      <Link
        href="/news"
        className={classNames({
          'before:hidden hover:underline': true,
          'underline font-bold': activeLink.toLowerCase() === 'all',
        })}
        scroll={false}
      >
        All
      </Link>

      {category.items.map(item => {
        return (
          <Link
            href={`/news?category=${item.fields.categoryName}`}
            key={item.sys.id}
            scroll={false}
            className={classNames({
              'hover:underline': true,
              'underline font-bold':
                activeLink.toLowerCase() ===
                item.fields.categoryName.toLowerCase(),
            })}
          >
            {item.fields.categoryName}
          </Link>
        );
      })}
    </div>
  );
};

export default CategoryLinks;
