/* eslint-disable react/prop-types */
import cx from "classnames";
import { CardBody, Card } from "../Card";
import ProductiveCardFooter from "./ProductiveCardFooter";
import ProductiveCardHeader from "./ProductiveCardHeader";
import "./ProductiveCard.scss";

const ProductiveCard = (props) => {
  const {
    className,
    onClick,
    title,
    subtitle,
    children,
    primaryButtonText,
    primaryButtonOnClick,
    actions,
    actionsPosition,
    clickZone,
  } = props;

  const displayHeader = title || subtitle;

  const isClickable = (zone) => {
    return onClick && typeof onClick === "function" && clickZone === zone;
  };

  const zoneOneClickable = isClickable(1);
  const zoneTwoClickable = isClickable(2);
  const zoneThreeClickable = isClickable(3);

  return (
    <Card
      className={cx("card", "productive-card", className, {
        clickable: zoneOneClickable,
      })}
      onClick={zoneOneClickable ? onClick : undefined}
    >
      <div
        className={cx("clickZone", { clickable: zoneTwoClickable })}
        onClick={zoneTwoClickable ? onClick : undefined}
      >
        {displayHeader && (
          <ProductiveCardHeader
            title={title}
            subtitle={subtitle}
            actions={actionsPosition === "top" && actions}
          />
        )}
        <CardBody
          className={cx({ clickable: zoneThreeClickable })}
          onClick={zoneThreeClickable ? onClick : undefined}
        >
          {children}
        </CardBody>
      </div>
      {primaryButtonText && (
        <ProductiveCardFooter
          primaryButtonOnClick={primaryButtonOnClick}
          primaryButtonText={primaryButtonText}
          actions={actionsPosition === "bottom" && actions}
        />
      )}
    </Card>
  );
};

export default ProductiveCard;
