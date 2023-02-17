import classes from "./CaiNut.module.css";

const CaiNut = (props) => {
  return (
    <button
      className={classes.cainut}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default CaiNut