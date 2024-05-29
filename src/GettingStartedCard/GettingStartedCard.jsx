/* eslint-disable react/prop-types */
import cx from "classnames";
import { Card } from "../Card";
import GettingStartedCardHeader from "./GettingStartedCardHeader";
import GettingStartedCardFooter from "./GettingStartedCardFooter";
import "./GettingStartedCard.scss";
import { isClickable } from "../utils";

const GettingStartedCard = (props) => {
  const {
    className,
    media,
    pictogram,
    title,
    label,
    actions = [],
    onClick,
  } = props;

  const clickable = isClickable(onClick);

  return (
    <Card
      className={cx("gs-card", className, {
        clickable,
      })}
      onClick={clickable ? onClick : undefined}
    >
      <GettingStartedCardHeader
        label={label}
        title={title}
        pictogram={pictogram}
        media={media}
      />
      <GettingStartedCardFooter actions={actions} />
    </Card>
  );
};

export default GettingStartedCard;
