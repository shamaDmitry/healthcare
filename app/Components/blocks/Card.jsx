import Link from 'next/link';
import ArrowForward from '../icons/ArrowForward';
import Image from 'next/image';

const Card = ({ imageSrc, category, date, description, link }) => {
  return (
    <div className="flex flex-col shadow-md">
      <Link href={link} className="h-48">
        <Image
          src={imageSrc}
          alt=""
          width="400"
          height="300"
          className="object-cover w-full h-full"
        />
      </Link>

      <div className="flex flex-col flex-1 p-4 bg-white">
        <div className="flex mb-4 text-sm gap-x-2">
          <Link href="#" className="font-bold hover:underline">
            {category}
          </Link>

          <span>|</span>

          <p>{date}</p>
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
