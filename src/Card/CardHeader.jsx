/* eslint-disable react/prop-types */
import cx from "classnames";

const CardHeader = (props) => {
  const { title, subtitle, children, className, ...rest } = props;

  return (
    <div className={cx("card-header", className)} {...rest}>
      <div className="card-title-block">
        {title && <p className="card-title">{title}</p>}
        {subtitle && <p className="card-subtitle">{subtitle}</p>}
      </div>
      {children}
    </div>
  );
};

export default CardHeader;
