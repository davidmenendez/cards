/* eslint-disable react/prop-types */
import { CardFooter, CardActions } from "../Card";
import Button from "../Button";

const ProductiveCardFooter = (props) => {
  const { primaryButtonText, primaryButtonOnClick, actions = [] } = props;
  const hasActions = actions.length > 0;

  return (
    <CardFooter className="productive-card-footer">
      <Button onClick={primaryButtonOnClick} color="secondary">
        {primaryButtonText}
      </Button>
      {hasActions && <CardActions actions={actions} />}
    </CardFooter>
  );
};

export default ProductiveCardFooter;
