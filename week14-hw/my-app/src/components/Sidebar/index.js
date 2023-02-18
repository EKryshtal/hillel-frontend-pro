import React from "react";
import './style.css';

const Sidebar = () => {
  const routes = ['Shopping', 'Profile', 'Contacts'];
  const listItems = routes.map((route) => <li>{route}</li>)
  
  const RoutesList = <ul className="sidebar__list">{listItems}</ul>

  const Sidebar = <aside className="sidebar">{RoutesList}</aside>

  return Sidebar;
}

export default Sidebar;