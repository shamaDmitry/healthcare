import classNames from 'classnames';

const Container = ({ children, className }) => {
  return (
    <section
      className={classNames(
        `container max-w-screen-xl px-10 ${className ? className : ''}`
      )}
    >
      {children}
    </section>
  );
};

export default Container;
