const Headline = props => {
  return (
    <h1
      className={`text-3xl font-medium ${
        props.className ? props.className : ''
      }`}
    >
      {props.children}
    </h1>
  );
};

export default Headline;
