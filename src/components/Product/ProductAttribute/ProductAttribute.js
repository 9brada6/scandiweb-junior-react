import react from "react";
import SwatchController from "./SwatchController/SwatchController";
import TextController from "./TextController/TextController";
import "./ProductAttribute.css";

class ProductAttribute extends react.Component {
  constructor(props) {
    super(props);

    this.attributeControllers = {
      swatch: SwatchController,
      text: TextController,
    };
  }

  render() {
    const attribute = this.props.attribute;
    const AttributeComponent = this.attributeControllers[attribute.type];

    return (
      <div className="Product__AttributeWrapper">
        <div className="Product__AttributeTitle">{attribute.name + ":"}</div>
        <div className="Product__AttributeSelectorWrapper">
          <AttributeComponent
            handleItemClick={this.props.handleItemClick}
            selected={this.props.selected}
            items={attribute.items}
          />
        </div>
      </div>
    );
  }
}

export default ProductAttribute;
