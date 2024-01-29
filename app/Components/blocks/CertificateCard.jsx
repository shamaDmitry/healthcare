import Image from 'next/image';

const CertificateCard = () => {
  return (
    <div className="flex items-center justify-center p-8 border border-separator">
      <Image
        src="https://placehold.co/600x400"
        alt=""
        width="100"
        height="0"
        className="w-full"
      />
    </div>
  );
};

export default CertificateCard;
