import Image from 'next/image';
import Link from 'next/link';

const NewsCard = props => {
  return (
    <div className="overflow-hidden group before:z-10 relative before:pointer-events-none before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-t before:from-[#000000cc]">
      <Link href="/news/1" className="relative overflow-hidden">
        <Image
          src="https://placehold.co/600x400"
          alt=""
          className="w-full transition duration-500 group-hover:-rotate-3 group-hover:scale-110"
          width={611}
          height={664}
          priority
        />
      </Link>

      <div className="absolute bottom-0 left-0 z-10 w-full text-white p-9">
        <div className="flex items-center gap-2 mb-2 text-sm text-white">
          <Link href="/category" className="hover:underline">
            Articles
          </Link>

          <div className="w-[1px] bg-current h-[12px]"></div>

          <Link href="/date" className="hover:underline">
            01 May, 2023
          </Link>
        </div>

        <p>
          Lorem ipsum dolor sit amet consec tetur adipi scing elit sed do
          eiusmod
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
