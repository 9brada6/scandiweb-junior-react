import react from "react";
import { pickTextColor } from "helpers/colorHelpers";

class SwatchAttribute extends react.Component {
  render() {
    const items = this.props.attribute.items.map((item) => {
      const additionalClass = item.id === this.props.selected ? " Product__AttributeItemBtn--Selected" : "";

      return (
        <button
          className={"CartPageItem__AttributeItemBtn CartPageItem__AttributeItemBtn--Swatch" + additionalClass}
          key={item.id}
          value={item.id}
          aria-label={item.displayValue}
          aria-pressed={item.id === this.props.selected ? "true" : "false"}
          style={{
            backgroundColor: item.value,
            color: pickTextColor(item.value, "white", "black"),
          }}
        >
          {item.id === this.props.selected ? "✔" : ""}
        </button>
      );
    });

    return <div className="CartPageItem__AttributeItems">{items}</div>;
  }
}

export default SwatchAttribute;
