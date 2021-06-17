import react from "react";

class TextAttribute extends react.Component {
  render() {
    const items = this.props.attribute.items.map((item) => {
      const additionalClass =
        item.id === this.props.selected ? " CartPageItem__AttributeItemBtn--Selected Btn--Selected" : "";

      return (
        <button
          className={"CartPageItem__AttributeItemBtn CartPageItem__AttributeItemBtn--Text Btn" + additionalClass}
          key={item.id}
          value={item.id}
          aria-pressed={item.id === this.props.selected ? "true" : "false"}
          onClick={this.props.handleItemClick}
        >
          {item.displayValue}
        </button>
      );
    });
    return <div className="CartPageItem__AttributeItems">{items}</div>;
  }
}

export default TextAttribute;
