import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../../assets/default-image.jpeg";

const Product = ({ name, price, image }) => {
  const url = image && image.url;
  return (
    <article className="product">
      <img src={url || defaultImage} alt="" />
      <h4> {name} </h4>
      <h4> $ {price || 3.99} </h4>
    </article>
  );
};

// Product.propTypes = {
//   image: PropTypes.object.isRequired,
//   name: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
// };

export default Product;
