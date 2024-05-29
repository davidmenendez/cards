/* cSpell:disable */
import ExpressiveCard from "./ExpressiveCard";
import ProductiveCard from "./ProductiveCard";
import GettingStartedCard from "./GettingStartedCard";
import ReactLogo from "./assets/react.svg";
import Icon from "./assets/Icon";
import Chart from "./assets/Chart";
import Clock from "./assets/Clock";
import Arrow from "./assets/Arrow";

import { useState } from "react";

const App = () => {
  const expressiveProps = {
    title: "Expressive Title",
    subtitle: "Expressive subtitle",
    primaryButtonText: "Get started",
    secondaryButtonText: "Return",
    onClick: () => console.log("hello"),
    primaryButtonOnClick: () => console.log("primary"),
    secondaryButtonOnClick: () => console.log("secondary"),
  };

  const productiveProps = {
    title: "Productive Title",
    subtitle: "Productive subtitle",
    primaryButtonText: "Get started",
    primaryButtonOnClick: () => console.log("primary"),
    actions: [
      {
        id: "add",
        label: "+",
        onClick: () => console.log("added"),
      },
      {
        id: "delete",
        label: "-",
        onClick: () => console.log("deleted"),
      },
    ],
    actionsPosition: "top",
    onClick: () => console.log("click zones"),
    clickZone: 1,
  };

  const getStartedProps = {
    title: "Title",
    label: "Label",
    media: <img src={ReactLogo} />,
    pictogram: <Icon />,
    actions: [
      {
        id: "clock",
        icon: <Clock />,
        label: "20 minutes",
      },
      {
        id: "chart",
        icon: <Chart />,
        label: "Beginner",
      },
      {
        id: "arrow",
        icon: <Arrow />,
      },
    ],
    onClick: () => console.log("get started!"),
  };

  const [clickZone, setClickZone] = useState(0);
  const [actionsPosition, setActionsPosition] = useState("bottom");
  const [clickable, setClickable] = useState(false);

  const actionsPositionHandler = (position) => {
    setActionsPosition(position);
  };

  return (
    <div className="app">
      <div className="container">
        <div className="cards">
          <ExpressiveCard
            {...expressiveProps}
            onClick={clickable ? expressiveProps.onClick : undefined}
          >
            <div className="input-group">
              <div>
                <input
                  type="checkbox"
                  id="clickable"
                  name="clickable"
                  checked={clickable}
                  onChange={(e) => setClickable(e.target.checked)}
                />
                <label htmlFor="clickable">clickable</label>
              </div>
            </div>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
              amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
              placerat eleifend leo.
            </p>
          </ExpressiveCard>
          <ProductiveCard
            {...productiveProps}
            clickZone={clickZone}
            actionsPosition={actionsPosition}
          >
            <div className="input-group">
              <label>productive click zone</label>
              <input
                type="number"
                value={clickZone}
                onChange={(e) => setClickZone(Number(e.target.value))}
                min={0}
                max={3}
              />
            </div>
            <div className="input-group">
              <legend>actions position</legend>
              <div>
                <input
                  type="radio"
                  id="top"
                  name="position"
                  value="top"
                  checked={actionsPosition === "top"}
                  onChange={() => actionsPositionHandler("top")}
                />
                <label htmlFor="top">top</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="bottom"
                  name="position"
                  value="bottom"
                  checked={actionsPosition === "bottom"}
                  onChange={() => actionsPositionHandler("bottom")}
                />
                <label htmlFor="bottom">bottom</label>
              </div>
            </div>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
              amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
              placerat eleifend leo.
            </p>
          </ProductiveCard>
          <GettingStartedCard {...getStartedProps}></GettingStartedCard>
        </div>
      </div>
    </div>
  );
};

export default App;
