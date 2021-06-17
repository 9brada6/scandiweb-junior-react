import react from "react";

class TextAttr extends react.Component {
  render() {
    const item = this.props.item;
    const attrObject = item.product.attributes.find((attrItem) => this.props.attrId === attrItem.id);
    const selectedAttr = item.attributes[this.props.attrId];

    const buttons = attrObject.items.map((attrItem) => {
      const isSelected = selectedAttr === attrItem.id;
      const additionalSelectedClass = isSelected ? " Btn--Selected" : "";
      return (
        <button
          className={"Btn NavbarCart__AttrBtn" + additionalSelectedClass}
          aria-pressed={isSelected}
          key={attrItem.id}
          disabled={!isSelected}
        >
          {attrItem.displayValue}
        </button>
      );
    });

    return <div className="NavbarCart__AttrBtnsWrapper">{buttons}</div>;
  }
}

export default TextAttr;
