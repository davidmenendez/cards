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
  } = props;

  const displayHeader = title || subtitle;

  return (
    <Card className={cx("productive-card", className)} onClick={onClick}>
      {displayHeader && (
        <ProductiveCardHeader
          title={title}
          subtitle={subtitle}
          actions={actionsPosition === "top" && actions}
        />
      )}
      <CardBody>{children}</CardBody>
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
