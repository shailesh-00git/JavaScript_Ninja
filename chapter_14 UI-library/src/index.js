import Tooltip from "./ninja-ui/tooltip";
import DropDown from "./ninja-ui/dropdown";
import Tabs from "./ninja-ui/tabs";

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
