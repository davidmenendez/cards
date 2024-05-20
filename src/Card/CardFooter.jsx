/* eslint-disable react/prop-types */
import cx from "classnames";

const CardFooter = (props) => {
  const { children, className } = props;
  return <div className={cx("card-footer", className)}>{children}</div>;
};

export default CardFooter;
