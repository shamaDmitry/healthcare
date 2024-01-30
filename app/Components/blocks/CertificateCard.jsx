import Image from 'next/image';

const CertificateCard = ({ active, imageSrc, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`transition flex items-center justify-center p-8 border cursor-pointer select-none border-separator grayscale ${
        active ? 'grayscale-0' : ''
      }`}
    >
      <Image src={imageSrc} alt="" width="100" height="0" className="w-full" />
    </div>
  );
};

export default CertificateCard;
