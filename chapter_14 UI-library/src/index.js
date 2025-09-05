import Tooltip from "./ninja-ui/tooltip";
import DropDown from "./ninja-ui/dropdown";
import Tabs from "./ninja-ui/tabs";
import SnackBar from "./ninja-ui/snackbar";
//craete a tooltip
const tooltip = new Tooltip(document.querySelector(".tooltip"));
tooltip.inti();

//create dropdown
const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
  const instance = new DropDown(dropdown);
  instance.init();
});

// create  tabs
const tabs = new Tabs(document.querySelector(".tabs"));
tabs.init();

//create snack bar
const snackbar = new SnackBar();
snackbar.init();
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  snackbar.show("you clicked me 😊");
});
