import React, { useState } from "react";
import "./shop.data";
import SHOP_DATA from "./shop.data";
import "../../Components/collection-preview/collection-preview";
import CollectionPreview from "../../Components/collection-preview/collection-preview";

const ShopPage = () => {
  const [collections] = useState(SHOP_DATA);

  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;
