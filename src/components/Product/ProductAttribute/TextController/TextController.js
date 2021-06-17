import react from "react";

class TextController extends react.Component {
  render() {
    const items = this.props.items.map((item) => {
      const additionalClass =
        item.id === this.props.selected ? " Product__AttributeItemBtn--Selected Btn--Selected" : "";

      return (
        <button
          className={"Product__AttributeItemBtn Product__AttributeItemBtn--Text Btn" + additionalClass}
          key={item.id}
          value={item.id}
          aria-pressed={item.id === this.props.selected ? "true" : "false"}
          onClick={this.props.handleItemClick}
        >
          {item.displayValue}
        </button>
      );
    });
    return <react.Fragment>{items}</react.Fragment>;
  }
}

export default TextController;
