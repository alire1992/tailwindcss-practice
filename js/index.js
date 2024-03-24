function toggleModal() {
  const modal = document.getElementById("modalMenu");
  modal.classList.toggle("hidden");
}

function toggleSubMenu(e) {
  if (e.target.id === "product") {
    const box = document.getElementById("subMenuBox");
    const icon = e.target.children[0];
    box.classList.toggle("hidden");
    e.target.classList.toggle("nav-item-selected");
    icon.classList.toggle("fa-chevron-left");
    icon.classList.toggle("fa-chevron-down");
  }
  if (e.target.id === "product-mobile") {
    const box = document.getElementById("subMenuBox-mobile");
    const icon = e.target.children[0];
    box.classList.toggle("hidden");
    icon.classList.toggle("fa-chevron-left");
    icon.classList.toggle("fa-chevron-down");
  }
}
