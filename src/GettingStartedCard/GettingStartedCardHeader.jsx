/* eslint-disable react/prop-types */
import { CardHeader } from "../Card";
import "./GettingStartedCard.scss";

const GettingStartedCardHeader = (props) => {
  const { pictogram, title, label, media } = props;
  return (
    <CardHeader
      label={label}
      title={title}
      pictogram={pictogram}
      className="gs-card-header"
      media={media}
    />
  );
};

export default GettingStartedCardHeader;
