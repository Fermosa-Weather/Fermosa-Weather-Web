export function setupNavigation() {
    const list = document.querySelectorAll<HTMLElement>(".navigation li");
  
    function activeLink(this: HTMLElement) {
      list.forEach((item) => {
        item.classList.remove("hovered");
      });
      this.classList.add("hovered");
    }
  
    list.forEach((item) => item.addEventListener("mouseover", activeLink));
  
    // Menu Toggle
    const toggle = document.querySelector<HTMLElement>(".toggle");
    const navigation = document.querySelector<HTMLElement>(".navigation");
    const main = document.querySelector<HTMLElement>(".main");
  
    toggle?.addEventListener("click", () => {
      navigation?.classList.toggle("active");
      main?.classList.toggle("active");
    });
  }
  