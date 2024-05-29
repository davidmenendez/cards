/* eslint-disable react/prop-types */
import cx from "classnames";
import { CardBody, CardHeader, Card } from "../Card";
import ExpressiveCardFooter from "./ExpressiveCardFooter";
import "./ExpressiveCard.scss";
import { isClickable } from "../utils";

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
  const clickable = isClickable(onClick);

  return (
    <Card
      className={cx("expressive-card", className, {
        clickable,
      })}
      onClick={clickable ? onClick : undefined}
    >
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
