/* eslint-disable react/prop-types */
import cx from "classnames";

const CardBody = (props) => {
  const { children, className, ...rest } = props;
  return (
    <div className={cx("card-body", className)} {...rest}>
      {children}
    </div>
  );
};

export default CardBody;
