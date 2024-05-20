/* eslint-disable react/prop-types */
import cx from "classnames";
import { CardBody, CardHeader, Card } from "../Card";
import ExpressiveCardFooter from "./ExpressiveCardFooter";
import "./ExpressiveCard.scss";

const ExpressiveCard = (props) => {
  const {
    className,
    onClick,
    title,
    subtitle,
    children,
    primaryButtonText,
    secondaryButtonText,
    primaryButtonOnClick,
    secondaryButtonOnClick,
  } = props;

  const displayHeader = title || subtitle;
  const displayFooter = primaryButtonText || secondaryButtonText;

  return (
    <Card className={cx("expressive-card", className)} onClick={onClick}>
      {displayHeader && <CardHeader title={title} subtitle={subtitle} />}
      <CardBody>{children}</CardBody>
      {displayFooter && (
        <ExpressiveCardFooter
          primaryButtonText={primaryButtonText}
          primaryButtonOnClick={primaryButtonOnClick}
          secondaryButtonText={secondaryButtonText}
          secondaryButtonOnClick={secondaryButtonOnClick}
        />
      )}
    </Card>
  );
};

export default ExpressiveCard;