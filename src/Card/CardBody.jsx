/* eslint-disable react/prop-types */
import cx from "classnames";

const CardBody = (props) => {
  const { children, className } = props;
  return <div className={cx("card-body", className)}>{children}</div>;
};

export default CardBody;
