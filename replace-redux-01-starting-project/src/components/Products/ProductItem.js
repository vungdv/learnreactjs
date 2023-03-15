import React from "react";
import { useStore } from "../../hook-store/store";
import Card from "../UI/Card";
import "./ProductItem.css";
import { TOGGLE_FAV } from "../../store/actions/products";

const ProductItem = React.memo((props) => {
  console.log("rendering...");
  //this component doesn't use state, just dispatch actions so that it's not interest in listening to the global state
  //and don't need to be re-rendered when the global state is updated.
  const dispatch = useStore(false)[1];

  const toggleFavHandler = () => {
    dispatch(TOGGLE_FAV, props.id);
  };

  return (
    <Card style={{ marginBottom: "1rem" }}>
      <div className="product-item">
        <h2 className={props.isFav ? "is-fav" : ""}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? "button-outline" : ""}
          onClick={toggleFavHandler}
        >
          {props.isFav ? "Un-Favorite" : "Favorite"}
        </button>
      </div>
    </Card>
  );
});

export default ProductItem;
