const IconWithText = ({
  className = '',
  icon,
  iconBg = 'bg-light-red',
  iconSize = 'w-11 h-11',
  text,
}) => {
  return (
    <div className={`${className} flex-col flex items-center sm:block`}>
      <div
        className={`flex items-center justify-center mb-6 rounded-full text-secondary ${iconSize} ${iconBg}`}
      >
        {icon}
      </div>

      <p className="mb-6 text-gray">{text}</p>
    </div>
  );
};

export default IconWithText;
