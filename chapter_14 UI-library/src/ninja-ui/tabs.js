import "./styles/tabs.css";
class Tabs {
  constructor(container) {
    this.container = container;
    this.tabs = container.querySelectorAll(".trigger");
  }
  init() {
    this.tabs.forEach((tab) => {
      tab.addEventListener("click", (e) => {
        this.toggleTabs(e);
        this.toggleContent(e);
      });
    });
  }
  toggleTabs(e) {
    //remove active class from all tabs
    this.tabs.forEach((tab) => tab.classList.remove("active"));

    //add the class active to the clicked tab
    e.target.classList.add("active");
  }
  toggleContent(e) {
    //aremove the the active class list from the div contain tab
    this.container.querySelectorAll(".content").forEach((item) => {
      item.classList.remove("active");
    });

    // add the active classlist to the targeted content
    const tab = e.currentTarget; // ensures correct trigger
    const select = tab.getAttribute("data-message");
    const content = this.container.querySelector(select);
    if (content) content.classList.add("active"); // safe check
  }
}
export { Tabs as default };
