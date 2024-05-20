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

  const onClickHandler = (e, fn) => {
    e.stopPropagation();
    if (fn) {
      fn();
    }
  };
  const onPrimaryClick = (e) => onClickHandler(e, primaryButtonOnClick);
  const onSecondaryClick = (e) => onClickHandler(e, secondaryButtonOnClick);

  return (
    <CardFooter className="expressive-card-footer">
      {secondaryButtonText && (
        <Button onClick={onSecondaryClick} color="secondary">
          {secondaryButtonText}
        </Button>
      )}
      {primaryButtonText && (
        <Button onClick={onPrimaryClick}>{primaryButtonText}</Button>
      )}
    </CardFooter>
  );
};

export default ExpressiveCardFooter;
