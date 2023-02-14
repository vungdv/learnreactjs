
import classes from './The.module.css';

const The = (props) => {

return <div className={`${classes.the} ${props.className}`}>{props.children}</div>
};

export default The;