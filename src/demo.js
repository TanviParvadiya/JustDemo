import React from 'react'

import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import $ from "jquery";

import "bootstrap/dist/css/bootstrap.min.css";
const demo = (props) => {
  return (
    <>
      

      <header class="header">
  <input class="menu-btn" type="checkbox" id="menu-btn" />
  <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
  <ul class="menu">
    <li><a href="#work">Our Work {props.data} </a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#careers">Careers</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</header>
    </>
  )
}

export default demo
