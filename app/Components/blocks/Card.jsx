import Link from 'next/link';
import ArrowForward from '../icons/ArrowForward';
import Image from 'next/image';

const Card = ({ imageSrc, category, date, body, link }) => {
  return (
    <div className="shadow-md">
      <Image src={imageSrc} alt="" width="1" height="1" className="w-full" />

      <div className="flex flex-col p-4 bg-white">
        <div className="mb-4 text-sm">
          <Link href="/">{category}</Link> | <Link href="/">{date}</Link>
        </div>

        <p className="mb-10">{body}</p>

        <Link
          href={link}
          className="inline-flex items-center gap-4 text-secondary"
        >
          <span>READ MORE</span>
          <ArrowForward />
        </Link>
      </div>
    </div>
  );
};

export default Card;
