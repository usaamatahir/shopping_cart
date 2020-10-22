import React from "react";
import { Grid, Card, CardContent } from "@material-ui/core";
import { products } from "./Products/Products.json";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/counterSlice";
import { productType } from "../../Types/types";
import "./Content.css";

const Content = () => {
  const dispatch = useDispatch();

  function truncate(str: any, n: number) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div id="Content">
      <h1>Products</h1>
      <Grid container justify="center" alignItems="center" spacing={3}>
        {products.map((product: productType, ind: number) => {
          return (
            <Grid item md={4} sm={6} xs={12}>
              <Card>
                <CardContent>
                  <img
                    className="productImg"
                    src={product.image}
                    alt={product.name}
                  />
                  <h3 className="productName">{product.name}</h3>
                  <body className="productDes">
                    {truncate(product.description, 200)}
                  </body>
                  <div className="contentAlign">
                    <span className="productPrice">
                      Price: $ {product.price}
                    </span>
                    <button
                      className="addToCart"
                      onClick={() => dispatch(addToCart(product))}
                    >
                      add to cart
                    </button>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Content;
