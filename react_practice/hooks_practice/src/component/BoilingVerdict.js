const BoilingVerdict = (props) => {
  if (props.celcius >= 100) {
    return <div>water would boil</div>;
  } else {
    return <div>water would not boil</div>;
  }
};

export default BoilingVerdict;
