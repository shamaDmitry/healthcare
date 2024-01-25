'use client';
import classNames from 'classnames';
import KeyboardLeft from '../icons/KeyboardLeft';
import KeyboardRight from '../icons/KeyboardRight';

const Paginate = ({
  index,
  itemsPerPage = 10,
  totalData = 100,
  paginate,
  previousPage,
  nextPage,
}) => {
  const buttonClasses =
    'w-[30px] h-[30px] flex items-center justify-center text-gray hover:bg-gentle-black hover:text-white';
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalData / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center pb-4 my-10 overflow-hidden overflow-x-auto">
      <div className="flex items-center gap-x-2">
        <button onClick={previousPage} className={buttonClasses}>
          <KeyboardLeft />
        </button>

        {pageNumbers.map(number => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={classNames(buttonClasses, {
              'bg-gentle-black text-white': number === index,
            })}
          >
            {number}
          </button>
        ))}

        <button onClick={nextPage} className={buttonClasses}>
          <KeyboardRight />
        </button>
      </div>
    </div>
  );
};

export default Paginate;
