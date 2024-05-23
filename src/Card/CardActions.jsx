/* eslint-disable react/prop-types */
import cx from "classnames";
import Button from "../Button";
const CardActions = (props) => {
  const { actions, className, size } = props;

  return (
    <div className={cx("card-actions", className)}>
      {actions.map((action) => (
        <Button
          key={action.id}
          size={size}
          color="secondary"
          onClick={action.onClick}
        >
          {action.label}
        </Button>
      ))}
    </div>
  );
};

export default CardActions;
