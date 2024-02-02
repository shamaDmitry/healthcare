import Link from 'next/link';
import ArrowForward from '../icons/ArrowForward';
import Image from 'next/image';

const Card = ({ imageSrc, category, date, description, link }) => {
  return (
    <div className="flex flex-col shadow-md">
      <Link href={link} className="">
        <Image
          src={imageSrc}
          alt=""
          width="100"
          height="0"
          className="w-full"
        />
      </Link>

      <div className="flex flex-col flex-1 p-4 bg-white">
        <div className="mb-4 text-sm">
          <Link href="/">{category}</Link> | <Link href="/">{date}</Link>
        </div>

        <p className="mb-10">{description}</p>

        <Link
          href={link}
          className="inline-flex items-center gap-4 mt-auto text-secondary"
        >
          <span>READ MORE</span>
          <ArrowForward />
        </Link>
      </div>
    </div>
  );
};

export default Card;
