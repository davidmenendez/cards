/* eslint-disable react/prop-types */
import cx from "classnames";

const CardHeader = (props) => {
  const {
    title,
    subtitle,
    children,
    className,
    label,
    pictogram,
    media,
    ...rest
  } = props;

  const hasMedia = !!media;

  return (
    <div className={cx("card-header", className)} {...rest}>
      {pictogram && <div className="card-pictogram">{pictogram}</div>}
      <div
        className={cx({
          "card-media-block": hasMedia,
          "card-title-block": !hasMedia,
        })}
      >
        <div className="card-title-content">
          {label && <p className="card-label">{label}</p>}
          {title && <p className="card-title">{title}</p>}
          {subtitle && <p className="card-subtitle">{subtitle}</p>}
        </div>
        {media && <div className="card-media">{media}</div>}
      </div>
      {children}
    </div>
  );
};

export default CardHeader;
