// Function to open the modal
function openModal(modalID) {
  var modal = document.getElementById(modalID);
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
}

// Function to close the modal
function closeModal(modalID) {
  var modal = document.getElementById(modalID);
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

window.onclick = function (event) {
  var modals = document.getElementsByClassName("modal");
  for (var i = 0; i < modals.length; i++) {
    if (event.target == modals[i]) {
      modals[i].style.display = "none";
      document.body.style.overflow = "auto";
    }
  }
};
