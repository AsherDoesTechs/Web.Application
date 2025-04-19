// Filter Users
function filterUsers() {
  let input = document.getElementById("user-search");
  let filter = input.value.toLowerCase();
  let rows = document.getElementById("user-table").getElementsByTagName("tr");

  for (let i = 1; i < rows.length; i++) {
    let cells = rows[i].getElementsByTagName("td");
    let nameCell = cells[1];
    if (nameCell) {
      let nameText = nameCell.textContent || nameCell.innerText;
      if (nameText.toLowerCase().indexOf(filter) > -1) {
        rows[i].style.display = "";
      } else {
        rows[i].style.display = "none";
      }
    }
  }
}

// Filter Products
function filterProducts() {
  let input = document.getElementById("product-search");
  let filter = input.value.toLowerCase();
  let rows = document
    .getElementById("product-table")
    .getElementsByTagName("tr");

  for (let i = 1; i < rows.length; i++) {
    let cells = rows[i].getElementsByTagName("td");
    let nameCell = cells[1];
    if (nameCell) {
      let nameText = nameCell.textContent || nameCell.innerText;
      if (nameText.toLowerCase().indexOf(filter) > -1) {
        rows[i].style.display = "";
      } else {
        rows[i].style.display = "none";
      }
    }
  }
}
