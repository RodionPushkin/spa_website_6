// import react from 'react';
import {NavLink} from "react-router-dom";
import './NavComponent.scss';
const NavComponent = ()=>{
  return (
    <nav className="nav">
      <input type="checkbox" id='menu'/>
      <label className="menu">
        <img src="/assets/menu.svg" alt="" />
        <span className="s"> — меню</span>
      </label>
      <div className="links">
        <NavLink to="/">главная</NavLink>
        <NavLink to="/profile">профиль</NavLink>
        <NavLink to="/signin">войти</NavLink>
        <NavLink to="/signup">зарегистрироваться</NavLink>
      </div>
    </nav>
  )
}
export {NavComponent}