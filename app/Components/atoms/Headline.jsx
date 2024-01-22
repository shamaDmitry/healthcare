const Headline = props => {
  return (
    <h1 {...props} className="text-4xl font-medium">
      {props.children}
    </h1>
  );
};

export default Headline;
