/* eslint-disable react/prop-types */
import { CardFooter } from "../Card";
import Button from "../Button";

const ExpressiveCardFooter = (props) => {
  const {
    primaryButtonText,
    primaryButtonOnClick,
    secondaryButtonText,
    secondaryButtonOnClick,
  } = props;

  return (
    <CardFooter className="expressive-card-footer">
      {secondaryButtonText && (
        <Button onClick={secondaryButtonOnClick} color="secondary">
          {secondaryButtonText}
        </Button>
      )}
      {primaryButtonText && (
        <Button onClick={primaryButtonOnClick}>{primaryButtonText}</Button>
      )}
    </CardFooter>
  );
};

export default ExpressiveCardFooter;
