import Link from 'next/link';

const CategoryLinks = () => {
  return (
    <div className="mb-10 flex font-medium items-center *:flex *:items-center text-gray gap-x-2 *:before:w-[1px] *:before:bg-current *:before:h-[12px] *:before:mr-3 *:before:ml-1">
      <Link href="#" className="before:hidden">
        All
      </Link>
      <Link href="#">Press Release</Link>
      <Link href="#">Articles</Link>
      <Link href="#">Innovation Stories</Link>
      <Link href="#">Company News</Link>
    </div>
  );
};

export default CategoryLinks;
