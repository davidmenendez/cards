/* eslint-disable react/prop-types */
import cx from "classnames";
import "./Button.scss";

const Button = (props) => {
  const { children, color = "primary", onClick, size } = props;
  const classnames = cx("button", `button-${color}`, {
    [`button--${size}`]: size,
  });
  return (
    <button onClick={onClick} className={classnames}>
      {children}
    </button>
  );
};

export default Button;
