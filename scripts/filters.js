(function () {
  const buttons = Array.from(document.querySelectorAll(".filter-btn"));
  const fillteredDiv = Array.from(document.querySelectorAll(".filterDiv"));

  fillteredDiv.forEach((el) => {
    el.classList.add("show");
  });

  buttons[0].classList.add("btn-active-filter");

  const filterFunction = (id) => {
    fillteredDiv.forEach((el) => {
      el.classList.remove("show");
    });
    const filtered = fillteredDiv.filter((el) => {
      return el.classList.contains(id);
    });
    filtered.forEach((el) => {
      el.classList.toggle("show");
    });
  };

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      buttons.forEach((btn) => {
        btn.classList.remove("btn-active-filter");
      });
      const id = e.target.id;
      e.target.classList.add("btn-active-filter");
      filterFunction(id);
    });
  });
})();
