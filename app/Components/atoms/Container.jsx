import classNames from 'classnames';

const Container = ({ children, className }) => {
  return (
    <div
      className={classNames(
        `container max-w-screen-xl px-4 md:px-10  ${className ? className : ''}`
      )}
    >
      {children}
    </div>
  );
};

export default Container;
