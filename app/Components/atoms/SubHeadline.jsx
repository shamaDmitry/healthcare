const SubHeadline = props => {
  return (
    <h2
      className={`text-2xl font-medium ${
        props.className ? props.className : ''
      }`}
    >
      {props.children}
    </h2>
  );
};

export default SubHeadline;
