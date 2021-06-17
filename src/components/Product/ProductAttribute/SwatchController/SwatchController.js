import react from "react";
import { pickTextColor } from "helpers/colorHelpers";

class SwatchController extends react.Component {
  render() {
    const items = this.props.items.map((item) => {
      const additionalClass = item.id === this.props.selected ? " Product__AttributeItemBtn--Selected" : "";

      return (
        <button
          className={"Product__AttributeItemBtn Product__AttributeItemBtn--Swatch" + additionalClass}
          key={item.id}
          value={item.id}
          aria-label={item.displayValue}
          aria-pressed={item.id === this.props.selected ? "true" : "false"}
          onClick={this.props.handleItemClick}
          style={{
            backgroundColor: item.value,
            color: pickTextColor(item.value, "white", "black"),
          }}
        >
          {item.id === this.props.selected ? "✔" : ""}
        </button>
      );
    });
    return <react.Fragment>{items}</react.Fragment>;
  }
}

export default SwatchController;
