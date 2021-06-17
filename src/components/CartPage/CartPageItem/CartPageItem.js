import react from "react";
import SwatchAttribute from "./SwatchAttribute/SwatchAttribute";
import TextAttribute from "./TextAttribute/TextAttribute";
import { CartContext, PriceFormatContext } from "helpers/contexts";
import { getProductPrettifiedPrice } from "helpers/currencyHelpers";
import "./CartPageItem.css";

class CartPageItem extends react.Component {
  constructor(props) {
    super(props);

    this.attributeControllers = {
      swatch: SwatchAttribute,
      text: TextAttribute,
    };
  }

  decreaseAmount(item) {
    this.props.cartContext.modifyItemAmount(item.product, item.attributes, -1);
  }

  increaseAmount(item) {
    this.props.cartContext.modifyItemAmount(item.product, item.attributes, 1);
  }

  render() {
    const item = this.props.item;
    const currency = this.props.currency;
    const itemImage = item.product.gallery[0];

    const attributes = item.product.attributes.map((attr) => {
      const ProductAttribute = this.attributeControllers[attr.type];
      return <ProductAttribute key={attr.id} attribute={attr} selected={item.attributes[attr.id]} />;
    });

    return (
      <article className="CartPageItem">
        <div className="CartPageItem_ItemInfoWrapper">
          <div className="CartPageItem__Title">{item.product.name}</div>
          <div className="CartPageItem__Price">{getProductPrettifiedPrice(item.product, currency)}</div>
          <div className="CartPageItem__AttributeWrapper">{attributes}</div>
        </div>

        <div className="CartPageItem_ItemAmountWrapper">
          <button
            className="CartPageItem__AmountChangeBtn Btn"
            onClick={() => {
              this.increaseAmount(item);
            }}
          >
            +
          </button>
          <div className="CartPageItem__ItemAmount">{item.amount}</div>
          <button
            className="CartPageItem__AmountChangeBtn Btn"
            onClick={() => {
              this.decreaseAmount(item);
            }}
          >
            -
          </button>
        </div>

        <div className="CartPageItem_ItemPresentationWrapper">
          <div className="CartPageItem_ItemImageWrapper">
            <img className="CartPageItem_ItemImage" src={itemImage} alt="The product" />
          </div>
        </div>
      </article>
    );
  }
}

class CartPageItemWithContext extends react.Component {
  render() {
    return (
      <CartContext.Consumer>
        {(cartContext) => (
          <PriceFormatContext.Consumer>
            {(currencyContext) => (
              <CartPageItem {...this.props} cartContext={cartContext} currency={currencyContext.currency} />
            )}
          </PriceFormatContext.Consumer>
        )}
      </CartContext.Consumer>
    );
  }
}

export default CartPageItemWithContext;
