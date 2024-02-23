import Image from 'next/image';
import Link from 'next/link';

const NewsCard = ({ data }) => {
  const imageSrc = data.fields.heroImage.fields.file.url;
  const category = data.fields.category;
  const date = data.fields.publishDate;
  const description = data.fields.description.content[0].content[0].value;
  const link = data.sys.id;

  return (
    <div className="min-h-60 flex overflow-hidden group before:z-10 relative before:pointer-events-none before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-t before:from-[#000000cc]">
      <Link href={`/news/${link}`} className="relative flex-1 overflow-hidden">
        <Image
          src={`https:${imageSrc}`}
          alt=""
          className="object-cover w-full h-full transition duration-500 group-hover:-rotate-3 group-hover:scale-110"
          width={300}
          height={200}
          priority
        />
      </Link>
      <div className="absolute bottom-0 left-0 z-10 w-full p-4 text-white md:p-9">
        <div className="flex items-center gap-2 mb-2 text-sm text-white">
          <Link href={`/category/${category}`} className="hover:underline">
            {category}
          </Link>

          <div className="w-[1px] bg-current h-[12px]"></div>

          <p>{date}</p>
        </div>

        <p className="overflow-hidden text-nowrap text-ellipsis">
          {description}
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
