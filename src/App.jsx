/* cSpell:disable */
import ExpressiveCard from "./ExpressiveCard";
import ProductiveCard from "./ProductiveCard";

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
    // actionsPosition: "top",
    actionsPosition: "bottom",
  };

  return (
    <div className="app">
      <div className="container">
        <div className="cards">
          <ExpressiveCard {...expressiveProps}>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
              amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
              placerat eleifend leo.
            </p>
          </ExpressiveCard>
          <ProductiveCard {...productiveProps}>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
              amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
              placerat eleifend leo.
            </p>
          </ProductiveCard>
        </div>
      </div>
    </div>
  );
};

export default App;
