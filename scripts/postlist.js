// Get the modal
var deletePostModal = document.getElementById("deleteModal");

// Get the button that opens the modal
var deletePostButton = document.getElementById("deleteButton");

// Get the <span> element that closes the modal
var deletePostClose = document.getElementsByClassName("delete-close")[0];

// When the user clicks on the button, open the modal
deletePostButton.onclick = function() {
  deletePostModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
deletePostClose.onclick = function() {
  deletePostModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == deletePostModal) {
    deletePostModal.style.display = "none";
  }
}
