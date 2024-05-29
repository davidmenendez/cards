/* eslint-disable react/prop-types */
import { CardFooter } from "../Card";

const GettingStartedCardFooter = (props) => {
  const { actions } = props;
  const hasActions = actions.length > 0;
  return (
    <CardFooter className="gs-card-footer">
      {hasActions && (
        <div className="card-actions">
          {actions.map((action) => (
            <div className="action" key={action.id}>
              {action.icon}
              {action.label}
            </div>
          ))}
        </div>
      )}
    </CardFooter>
  );
};

export default GettingStartedCardFooter;
