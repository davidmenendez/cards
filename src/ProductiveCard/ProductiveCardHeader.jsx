/* eslint-disable react/prop-types */
import { CardHeader, CardActions } from "../Card";

const ProductiveCardHeader = (props) => {
  const { title, subtitle, actions = [] } = props;
  const hasActions = actions.length > 0;

  return (
    <CardHeader title={title} subtitle={subtitle}>
      {hasActions && <CardActions actions={actions} size="sm" />}
    </CardHeader>
  );
};

export default ProductiveCardHeader;
