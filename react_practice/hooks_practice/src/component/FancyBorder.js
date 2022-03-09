// to acces the childern pass to <FancyBorder> component
// {this.props.childern} or {props.children} is used

const FancyBorder = (props) => {
  return (
    <div className="fancy-border">
      <h1>hello fancy border</h1>
      {props.children}
    </div>
  );
};

export default FancyBorder;
