import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  addToCart,
  decreaseFromCart,
} from "../../features/counterSlice";
import { Grid, Button } from "@material-ui/core";
import { stateType } from "../../Types/types";
import "./index.css";

const Cart = () => {
  const dispatch = useDispatch();
  let total = 0;
  const { cart } = useSelector((state: stateType) => state);
  console.log(cart);
  return (
    <div className="cartPage">
      <h1>Cart Items</h1>

      <Grid
        container
        spacing={3}
        justify="center"
        alignItems="center"
        className="cartSection"
      >
        <Grid item md={8} xs={12}>
          <Grid
            container
            spacing={1}
            justify="center"
            alignItems="center"
            className="cartHead"
          >
            <Grid item xs={3}>
              Product
            </Grid>
            <Grid item xs={3}>
              Quantity
            </Grid>
            <Grid item xs={3}>
              Price
            </Grid>
            <Grid item xs={3}></Grid>
          </Grid>
        </Grid>
        {cart &&
          cart.map((item) => {
            total += item.price * item.quantity;
            return (
              <Grid item md={8} xs={10} key={item._productId}>
                <Grid
                  container
                  spacing={1}
                  justify="center"
                  alignItems="center"
                  className="cartBody"
                >
                  <Grid item xs={3}>
                    {item.name}
                  </Grid>
                  <Grid item xs={3}>
                    {item.quantity < 2 ? (
                      <Button variant="contained" size="small" disabled>
                        -
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={() => dispatch(decreaseFromCart(item))}
                      >
                        -
                      </Button>
                    )}

                    {item.quantity}
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      onClick={() => dispatch(addToCart(item))}
                    >
                      +
                    </Button>
                  </Grid>
                  <Grid item xs={3}>
                    $ {item.price * item.quantity}
                  </Grid>
                  <Grid item xs={3}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      onClick={() => dispatch(removeFromCart(item))}
                    >
                      X
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            );
          })}
      </Grid>
      {cart.length ? <h1>Total: {total}</h1> : null}
    </div>
  );
};

export default Cart;
