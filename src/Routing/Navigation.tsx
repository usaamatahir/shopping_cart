import React from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { stateType } from "../Types/types";
import "./Navigation.css";

const Navigation = () => {
  const { cart } = useSelector((state: stateType) => state);
  return (
    <div className="navBar">
      <label>
        <Link to="/" className="logo">
          Shoe Store
        </Link>
      </label>
      <Link to="/cart">
        <Badge badgeContent={cart.length} color="secondary">
          <AddShoppingCartIcon className="shoppingCart" />
        </Badge>
      </Link>
    </div>
  );
};

export default Navigation;
