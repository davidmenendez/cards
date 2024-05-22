/* eslint-disable react/prop-types */
import cx from "classnames";

const CardFooter = (props) => {
  const { children, className, ...rest } = props;
  return (
    <div className={cx("card-footer", className)} {...rest}>
      {children}
    </div>
  );
};

export default CardFooter;
