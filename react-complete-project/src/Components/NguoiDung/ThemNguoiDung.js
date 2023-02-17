import React, {useState, useEffect} from "react";

import The from "../GiaoDien/The";
import classes from './ThemNguoiDung.module.css';
import CaiNut from '../GiaoDien/CaiNut'

const ThemNguoiDung = () => {
  const [temp, setTemp] = useState(0);
  console.log("Reload" + temp);
  useEffect(() => {
    console.log("useEffect:" + temp);

    return () => {
      console.log("CLEAN UP:" + temp);
    }
  }, [temp]);
  const themNguoiDungHandler = (event) => {
    event.preventDefault();
  }; 

  return (
    <The className={classes.input}>
      <form onSubmit={themNguoiDungHandler}>
        <label htmlFor="tennguoidung">Ten nguoi dung</label>
        <input id="tennguoidung" onKeyUp={() => {setTemp(Math.random());}} />
        <label htmlFor="tuoi">Tuoi (nam)</label>
        <input id="tuoi" />
        <CaiNut type="submit">Them nguoi dung</CaiNut>
      </form>
    </The>
  );
};

export default ThemNguoiDung;
