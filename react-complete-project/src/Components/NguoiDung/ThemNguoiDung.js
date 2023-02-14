import The from "../GiaoDien/The";
import classes from './ThemNguoiDung.module.css';

const ThemNguoiDung = () => {
  const themNguoiDungHandler = (event) => {
    event.preventDefault();
  }; 

  return (
    <The className={classes.input}>
      <form onSubmit={themNguoiDungHandler}>
        <label htmlFor="tennguoidung">Ten nguoi dung</label>
        <input id="tennguoidung" />
        <label htmlFor="tuoi">Tuoi (nam)</label>
        <input id="tuoi" />
        <button type="submit">Them nguoi dung</button>
      </form>
    </The>
  );
};

export default ThemNguoiDung;
