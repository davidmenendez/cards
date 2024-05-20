/* eslint-disable react/prop-types */
import cx from "classnames";
import "./Card.scss";

const Card = (props) => {
  const { children, className, onClick } = props;
  const classnames = cx("card", className, {
    "card--clickable": onClick,
  });

  const clickHandler = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className={classnames} onClick={clickHandler}>
      {children}
    </div>
  );
};

export default Card;
