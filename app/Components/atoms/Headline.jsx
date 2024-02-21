const Headline = props => {
  return (
    <h1
      className={`text-xl md:text-2xl lg:text-3xl font-bold ${
        props.className ? props.className : ''
      }`}
    >
      {props.children}
    </h1>
  );
};

export default Headline;
