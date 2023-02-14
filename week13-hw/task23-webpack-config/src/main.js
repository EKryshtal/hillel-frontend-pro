import { showButton } from "./button/button";
import image from "./assets/images/React-icon.png";
import "./main.css";

showButton();

const reactLogo = document.createElement("img");
reactLogo.setAttribute("src", image);

document.body.appendChild(reactLogo);