/* eslint-disable react/prop-types */
import cx from "classnames";
import "./Card.scss";

const Card = (props) => {
  const { children, className, ...rest } = props;

  return (
    <div className={cx("card", className)} {...rest}>
      {children}
    </div>
  );
};

export default Card;
