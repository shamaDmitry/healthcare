import Image from 'next/image';

const CertificateCard = ({ active, imageSrc, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex-shrink-0 transition flex items-center justify-center p-2 lg:p-4 2xl:p-8 border cursor-pointer select-none border-separator grayscale ${
        active ? 'grayscale-0' : ''
      }`}
    >
      <Image
        src={imageSrc}
        alt=""
        width="100"
        height="0"
        className="flex-shrink-0 object-cover w-full h-full"
      />
    </div>
  );
};

export default CertificateCard;
